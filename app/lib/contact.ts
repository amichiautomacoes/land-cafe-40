import { INTENTS } from '../content.ts';

export const DEFAULT_WHATSAPP_NUMBER = '5521995921242';

export function contactResponse(request: Request, configuredNumber = process.env.WHATSAPP_NUMBER ?? DEFAULT_WHATSAPP_NUMBER): Response {
  const intent = new URL(request.url).searchParams.get('motivo') ?? 'cafe';
  if (!Object.hasOwn(INTENTS, intent)) {
    return new Response('Escolha um dos motivos disponíveis na página.', { status: 400 });
  }
  const number = configuredNumber.replace(/\D/g, '');
  if (!/^\d{10,15}$/.test(number)) {
    return new Response('O contato está temporariamente indisponível.', { status: 503 });
  }
  const destination = new URL(`https://wa.me/${number}`);
  destination.searchParams.set('text', INTENTS[intent as keyof typeof INTENTS].message);
  return Response.redirect(destination, 303);
}
