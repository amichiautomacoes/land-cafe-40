import assert from 'node:assert/strict';
import { test } from 'node:test';
import { contactResponse, DEFAULT_WHATSAPP_NUMBER } from '../app/lib/contact.ts';
import { INTENTS } from '../app/content.ts';

test('cada motivo preserva o número e a mensagem do WhatsApp', () => {
  for (const [key, intent] of Object.entries(INTENTS)) {
    const response = contactResponse(new Request(`http://localhost/contato?motivo=${key}`), DEFAULT_WHATSAPP_NUMBER);
    assert.equal(response.status, 303);
    const destination = new URL(response.headers.get('location')!);
    assert.equal(destination.origin, 'https://wa.me');
    assert.equal(destination.pathname, `/${DEFAULT_WHATSAPP_NUMBER}`);
    assert.equal(destination.searchParams.get('text'), intent.message);
  }
});

test('sem motivo usa café; números formatados são normalizados', () => {
  const response = contactResponse(new Request('http://localhost/contato'), '+55 (21) 99592-1242');
  const destination = new URL(response.headers.get('location')!);
  assert.equal(destination.pathname, `/${DEFAULT_WHATSAPP_NUMBER}`);
  assert.equal(destination.searchParams.get('text'), INTENTS.cafe.message);
});

test('motivos inválidos e nomes herdados não redirecionam', () => {
  for (const value of ['https://example.com', '', 'toString', '__proto__', 'constructor']) {
    const response = contactResponse(new Request(`http://localhost/contato?motivo=${encodeURIComponent(value)}`), DEFAULT_WHATSAPP_NUMBER);
    assert.equal(response.status, 400);
    assert.equal(response.headers.get('location'), null);
  }
});

test('configuração de contato inválida não redireciona', () => {
  for (const number of ['', 'abc', '123', '1234567890123456']) {
    const response = contactResponse(new Request('http://localhost/contato'), number);
    assert.equal(response.status, 503);
    assert.equal(response.headers.get('location'), null);
  }
});
