import { motion } from 'motion/react';
import { C, SERIF, WA_URL, EASE } from '../tokens';

export function Hero() {
  return (
    <section
      id="inicio"
      style={{
        position: 'relative', minHeight: '100vh',
        display: 'flex', alignItems: 'center',
        backgroundImage: 'url(/hero-banner.jpg)',
        backgroundSize: 'cover', backgroundPosition: 'center right',
        overflow: 'hidden', padding: '120px 0 80px',
      }}
    >
      {/* Gradient overlay — dark on right where text lives */}
      <div aria-hidden style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to left, rgba(10,6,2,0.92) 0%, rgba(10,6,2,0.82) 35%, rgba(10,6,2,0.45) 60%, rgba(10,6,2,0.10) 100%)',
        zIndex: 0,
      }} />

      <div className="hero-container" style={{ width: '100%', maxWidth: '100%', padding: '0 0', position: 'relative', zIndex: 1 }}>
        <div className="hero-inner">

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 44 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.25, ease: EASE }}
            style={{
              fontFamily: SERIF,
              fontSize: 'clamp(28px, 3.8vw, 46px)',
              color: C.white, lineHeight: 1.18,
              marginBottom: 22, letterSpacing: -0.5,
            }}
          >
            Snacks naturales que tu peludo{' '}
            <span style={{ color: C.orange }}>va a amar 🐾</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.42, ease: EASE }}
            style={{
              fontSize: 'clamp(15px, 1.8vw, 18px)',
              color: 'rgba(255,255,255,0.85)',
              lineHeight: 1.65, marginBottom: 36, maxWidth: 510,
            }}
          >
            Patas de pollo deshidratadas 100% naturales, sin químicos ni conservantes.
            Un solo ingrediente, puro amor.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55, ease: EASE }}
            style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}
            className="hero-cta"
          >
            <motion.a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
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
                padding: '16px 28px', borderRadius: 14,
                background: '#25D366', color: C.white,
                fontSize: 16, fontWeight: 700, border: 'none',
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.533 5.854L.057 23.215a.75.75 0 0 0 .92.92l5.389-1.47A11.952 11.952 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.686-.528-5.207-1.442l-.374-.222-3.875 1.056 1.084-3.773-.243-.386A9.954 9.954 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
              Pedir por WhatsApp
            </motion.a>

            <motion.a
              href="#precios"
              onClick={e => { e.preventDefault(); document.getElementById('precios')?.scrollIntoView({ behavior: 'smooth' }); }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '16px 24px', borderRadius: 14,
                background: 'rgba(255,255,255,0.10)',
                border: '1px solid rgba(255,255,255,0.28)',
                backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)',
                color: C.white, fontSize: 15, fontWeight: 600,
              }}
            >
              Ver precios ↓
            </motion.a>
          </motion.div>

          {/* ICA badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.68, ease: EASE }}
            style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 28 }}
            className="hero-trust"
          >
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              padding: '7px 16px 7px 10px', borderRadius: 100,
              background: 'rgba(255,255,255,0.10)',
              border: '1px solid rgba(255,255,255,0.22)',
              backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)',
            }}>
              <img src="/ica-logo-white.png" alt="ICA" style={{ height: 22, objectFit: 'contain', opacity: 0.9 }} />
              <span style={{ color: 'rgba(255,255,255,0.90)', fontSize: 13, fontWeight: 600, letterSpacing: 0.2 }}>
                Avalado por ICA · Reg. N° 0130002024
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
