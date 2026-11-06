import './skillui-env.mjs';
import { mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

// Use the project's Chromium and keep Taste's temporary profiles local.
process.env.CHROME_PATH ??= chromium.executablePath();
process.env.TASTE_SKILL_TMP ??= fileURLToPath(new URL('../../.taste-skill/runtime/', import.meta.url));
mkdirSync(process.env.TASTE_SKILL_TMP, { recursive: true });
