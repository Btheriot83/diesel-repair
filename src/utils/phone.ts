// src/utils/phone.ts
export function toE164(input: string): string { const cleaned = input.replace(/[^\d+]/g,''); return cleaned.startsWith('+')? cleaned : '+'+cleaned; }
export function isE164(input: string): boolean { return /^\+[1-9]\d{6,14}$/.test(input); }
export function maskDisplay(e164: string): string {
  const digits = e164.replace(/\D/g,'');
  if (digits.length===11 && digits.startsWith('1')) {
    const a=digits.slice(1,4), b=digits.slice(4,7), c=digits.slice(7,11);
    return `(${a}) ${b}-${c}`;
  }
  return e164;
}
