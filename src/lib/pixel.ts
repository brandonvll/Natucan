// ─────────────────────────────────────────────────────────────
// Meta Pixel + Conversions API (CAPI) — NatuCan
// El pixel base ya está inicializado en index.html (ID 906241385756516).
// Este módulo dispara eventos estándar en el pixel (navegador) y, con el
// MISMO eventID, los reenvía a la CAPI (servidor) para deduplicarlos.
// ─────────────────────────────────────────────────────────────

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    _fbq?: unknown;
  }
}

type Params = Record<string, unknown>;

// eventID único para deduplicar el evento entre pixel y CAPI
function newEventId(prefix: string): string {
  return `${prefix}_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}

function getCookie(name: string): string {
  const m = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]+)'));
  return m ? m[1] : '';
}

// fbc: cookie _fbc del pixel, o construido desde ?fbclid con timestamp FIJO
function getFbc(): string {
  try {
    const raw = getCookie('_fbc');
    const cookieFbc = raw ? decodeURIComponent(raw) : '';
    if (/^fb\.\d+\.\d+\..+/.test(cookieFbc)) return cookieFbc;
  } catch { /* noop */ }
  const fbclid = new URLSearchParams(location.search).get('fbclid');
  if (fbclid) {
    let ts = sessionStorage.getItem('fbc_ts');
    if (!ts) { ts = String(Date.now()); sessionStorage.setItem('fbc_ts', ts); }
    return `fb.1.${ts}.${fbclid}`;
  }
  return '';
}

// Reenvía el evento al servidor (CAPI) con el mismo eventID.
// Falla en silencio si la función /api/pixel aún no tiene token configurado.
function sendCapi(eventName: string, eventId: string, customData: Params): void {
  try {
    fetch('/api/pixel', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        eventName,
        eventId,
        eventSourceUrl: location.href,
        fbp: getCookie('_fbp'),
        fbc: getFbc(),
        customData,
      }),
    }).catch(() => { /* noop */ });
  } catch { /* noop */ }
}

// Evento estándar en pixel + CAPI (deduplicado por eventID compartido)
function track(eventName: string, prefix: string, params: Params = {}): void {
  const eventId = newEventId(prefix);
  if (typeof window.fbq === 'function') {
    window.fbq('track', eventName, params, { eventID: eventId });
  }
  sendCapi(eventName, eventId, params);
}

// ── Conversiones específicas de NatuCan ──────────────────────

/** Ver contenido (precios, producto, tabla nutricional). */
export function trackViewContent(name?: string): void {
  track('ViewContent', 'vc', name ? { content_name: name } : {});
}

/** Clic en cualquier CTA de WhatsApp (contacto). */
export function trackContact(source?: string): void {
  track('Contact', 'ct', source ? { content_name: source } : {});
}

/** Clic en un plan de precios — señal de mayor intención, con valor en COP. */
export function trackInitiateCheckout(planName: string, priceLabel: string): void {
  const value = Number(String(priceLabel).replace(/[^\d]/g, '')) || 0;
  track('InitiateCheckout', 'ic', {
    content_name: planName,
    value,
    currency: 'COP',
  });
}
