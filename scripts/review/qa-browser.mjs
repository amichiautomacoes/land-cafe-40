import assert from 'node:assert/strict';
import { mkdirSync, writeFileSync } from 'node:fs';
import { chromium } from 'playwright';

const target = process.env.QA_URL || 'http://127.0.0.1:5021';
const out = '.taste-skill/qa';
mkdirSync(out, { recursive: true });
const browser = await chromium.launch({ headless: true, chromiumSandbox: true });
const report = { url: target, viewports: [], functional: [] };

try {
  for (const width of [320, 390, 768, 1440, 1920]) {
    const context = await browser.newContext({ viewport: { width, height: width < 700 ? 844 : 1000 }, locale: 'pt-BR' });
    const page = await context.newPage();
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    const response = await page.goto(target, { waitUntil: 'networkidle' });
    assert.equal(response.status(), 200);
    await page.evaluate(() => document.fonts.ready);
    for (const image of await page.locator('img[loading="lazy"]').all()) await image.scrollIntoViewIfNeeded();
    await page.evaluate(async () => Promise.all([...document.images].map(image => image.decode().catch(() => {}))));
    const metrics = await page.evaluate(() => ({
      overflow: document.documentElement.scrollWidth - innerWidth,
      badImages: [...document.images].filter(image => !image.complete || !image.naturalWidth).map(image => image.src),
      missingAnchors: [...document.querySelectorAll('a[href^="#"]')].filter(link => !document.getElementById(link.hash.slice(1))).map(link => link.hash),
      fontLoaded: document.fonts.check('600 32px Poppins'),
      titleCount: document.querySelectorAll('h1').length,
    }));
    assert.equal(metrics.overflow, 0, `Overflow at ${width}px`);
    assert.deepEqual(metrics.badImages, []);
    assert.deepEqual(metrics.missingAnchors, []);
    assert.equal(metrics.fontLoaded, true);
    assert.equal(metrics.titleCount, 1);
    assert.deepEqual(errors, []);

    if (width < 700) {
      await page.evaluate(() => scrollTo(0, 0));
      const menu = page.getByRole('button', { name: 'Menu', exact: true });
      await menu.click();
      assert.equal(await menu.getAttribute('aria-expanded'), 'true');
      await page.keyboard.press('Escape');
      assert.equal(await menu.getAttribute('aria-expanded'), 'false');
      assert.equal(await menu.evaluate(el => el === document.activeElement), true);
      await menu.click();
      await page.locator('#main-nav a[href="#sabores"]').click();
      assert.equal(await menu.getAttribute('aria-expanded'), 'false');
    }

    const choices = { cafe: 'Um café, sem pressa', trabalho: 'Uma pausa nas ideias', encontro: 'O seu próximo encontro' };
    for (const [value, title] of Object.entries(choices)) {
      await page.locator(`input[name="motivo"][value="${value}"]`).check();
      assert.equal(await page.locator('#intent-title').innerText(), title);
    }
    let submitted = '';
    await page.route('**/contato?*', route => {
      submitted = route.request().url();
      return route.fulfill({ status: 200, contentType: 'text/html', body: '<title>Contato verificado</title>' });
    });
    await page.getByRole('button', { name: 'Conversar no WhatsApp' }).click();
    await page.waitForURL('**/contato?*');
    assert.equal(new URL(submitted).searchParams.get('motivo'), 'encontro');
    report.viewports.push({ width, ...metrics, javascriptErrors: errors, menu: width < 700 ? 'passed' : 'desktop', intentSelection: 'passed', formSubmission: 'passed' });
    await context.close();
  }

  const noScript = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 390, height: 844 } });
  const plain = await noScript.newPage();
  await plain.goto(target);
  assert.equal(await plain.locator('h1').isVisible(), true);
  assert.equal(await plain.locator('#main-nav').isVisible(), true);
  assert.equal(await plain.locator('.plan-form button').isVisible(), true);
  await plain.screenshot({ path: `${out}/no-javascript.png` });
  report.functional.push('Navigation, content and native form remain available without JavaScript.');
  await noScript.close();

  const reduced = await browser.newContext({ reducedMotion: 'reduce', viewport: { width: 390, height: 844 } });
  const quiet = await reduced.newPage();
  await quiet.goto(target, { waitUntil: 'networkidle' });
  assert.equal(await quiet.evaluate(() => document.getAnimations().length), 0);
  assert.equal(await quiet.locator('h1').isVisible(), true);
  await quiet.screenshot({ path: `${out}/reduced-motion.png` });
  report.functional.push('Reduced motion: no active animations; content visible.');
  await reduced.close();
  writeFileSync(`${out}/functional.json`, JSON.stringify(report, null, 2));
  console.log(`Browser QA passed: ${report.viewports.map(viewport => viewport.width).join(', ')}px; menu, images, fonts, anchors, intents, form, no JavaScript and reduced motion.`);
} finally {
  await browser.close();
}
