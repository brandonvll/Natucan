// ─────────────────────────────────────────────────────────────
// Conversions API (CAPI) — NatuCan · Vercel serverless function
// Reenvía eventos server-side a Meta con el mismo eventID que el pixel
// del navegador, para que Meta los deduplique y cuente una sola vez.
//
// REQUIERE la variable de entorno META_ACCESS_TOKEN en Vercel:
//   Project → Settings → Environment Variables → META_ACCESS_TOKEN
//   (token de Events Manager → Configuración → API de conversiones)
// ─────────────────────────────────────────────────────────────
const PIXEL_ID = '906241385756516';

export default async function handler(req, res) {
  const origin = req.headers.origin || '';
  res.setHeader('Access-Control-Allow-Origin', origin || '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).end();

  const ACCESS_TOKEN = process.env.META_ACCESS_TOKEN;
  if (!ACCESS_TOKEN) return res.status(500).json({ error: 'Token no configurado' });

  const { eventName, eventId, eventSourceUrl, fbp, fbc, customData, identity } = req.body || {};
  if (!eventName || !eventId) return res.status(400).json({ error: 'eventName y eventId requeridos' });

  // Preferir IPv6 si está disponible, fallback a IPv4
  const rawIps = (req.headers['x-forwarded-for'] || '').split(',').map((s) => s.trim());
  const ip = rawIps.find((i) => i.includes(':')) || rawIps[0] || '';
  const ua = req.headers['user-agent'] || '';

  const payload = {
    data: [{
      event_name: eventName,
      event_time: Math.floor(Date.now() / 1000),
      event_id: String(eventId),
      event_source_url: eventSourceUrl || undefined,
      action_source: 'website',
      ...(customData && Object.keys(customData).length ? { custom_data: customData } : {}),
      user_data: {
        client_ip_address: ip || undefined,
        client_user_agent: ua || undefined,
        // Validar formato antes de enviar: fb.N.timestamp.value
        ...(fbp && /^fb\.\d+\.\d+\.\d+$/.test(fbp) ? { fbp } : {}),
        ...(fbc && /^fb\.\d+\.\d+\..+$/.test(fbc) ? { fbc } : {}),
        // Coincidencias avanzadas (opcional) — solo si en el futuro se capturan
        // datos hasheados con SHA-256 (por ahora NatuCan no tiene formulario).
        ...(identity && /^[a-f0-9]{64}$/.test(identity.fn || '') ? { fn: [identity.fn] } : {}),
        ...(identity && /^[a-f0-9]{64}$/.test(identity.ln || '') ? { ln: [identity.ln] } : {}),
        ...(identity && /^[a-f0-9]{64}$/.test(identity.ph || '') ? { ph: [identity.ph] } : {}),
        ...(identity && /^[a-f0-9]{64}$/.test(identity.em || '') ? { em: [identity.em] } : {}),
      },
    }],
  };

  try {
    const r = await fetch(
      `https://graph.facebook.com/v19.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`,
      { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) }
    );
    const json = await r.json();
    return res.status(200).json(json);
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}
