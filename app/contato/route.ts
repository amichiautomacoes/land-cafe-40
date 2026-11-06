import { contactResponse } from '../lib/contact';

export const runtime = 'nodejs';

export function GET(request: Request) {
  return contactResponse(request);
}
