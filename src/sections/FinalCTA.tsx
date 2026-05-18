import { motion } from 'motion/react';
import { C, SERIF, WA_URL } from '../tokens';
import { Reveal } from '../components/Reveal';

export function FinalCTA() {
  return (
    <section style={{ padding: '100px 24px', background: C.dark, position: 'relative', overflow: 'hidden' }}>
      {/* Ambient orb */}
      <div aria-hidden style={{
        position: 'absolute', top: '50%', left: '50%',
        width: 600, height: 600, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(61,130,52,0.25) 0%, rgba(0,0,0,0) 70%)',
        transform: 'translate(-50%, -50%)', pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 680, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <Reveal>
          <img
            src="/perritos.png"
            alt="Perritos NatuCan"
            style={{ height: 130, objectFit: 'contain', display: 'block', margin: '0 auto' }}
          />
          <h2 style={{
            fontFamily: SERIF,
            fontSize: 'clamp(28px, 4.5vw, 52px)',
            color: C.white, letterSpacing: -1.5, lineHeight: 1.1, marginBottom: 18,
          }}>
            Tu peludo se lo merece.<br />
            <span style={{ color: C.orange }}>Pídelo hoy.</span>
          </h2>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, marginBottom: 40, maxWidth: 480, margin: '0 auto 40px' }}>
            Entrega rápida en Medellín. Pago contra entrega disponible. Más de 500 peludos felices nos respaldan.
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <motion.a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            animate={{
              boxShadow: [
                '0 4px 22px rgba(37,211,102,0.45), 0 0 0 0 rgba(37,211,102,0)',
                '0 8px 36px rgba(37,211,102,0.75), 0 0 0 8px rgba(37,211,102,0)',
                '0 4px 22px rgba(37,211,102,0.45), 0 0 0 0 rgba(37,211,102,0)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              padding: '18px 36px', borderRadius: 14,
              background: '#25D366', color: C.white,
              fontSize: 18, fontWeight: 700, border: 'none',
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.533 5.854L.057 23.215a.75.75 0 0 0 .92.92l5.389-1.47A11.952 11.952 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.686-.528-5.207-1.442l-.374-.222-3.875 1.056 1.084-3.773-.243-.386A9.954 9.954 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
            </svg>
            Pedir por WhatsApp
          </motion.a>

          <div style={{ display: 'flex', justifyContent: 'center', gap: 24, flexWrap: 'wrap', marginTop: 32 }}>
            {['✅ Pago contra entrega', '🚚 Entrega en Medellín', '💚 100% Natural'].map(item => (
              <span key={item} style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>{item}</span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
