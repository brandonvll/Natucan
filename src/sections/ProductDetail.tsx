import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { C, SERIF, WA_URL, EASE } from '../tokens';
import { Reveal } from '../components/Reveal';
import { trackContact, trackViewContent } from '../lib/pixel';

const NUTRITION = [
  { label: 'Proteína', value: '45%', icon: '💪' },
  { label: 'Colágeno', value: 'Alto', icon: '🦴' },
  { label: 'Calorías', value: '340', icon: '⚡' },
  { label: 'Aditivos', value: 'Cero', icon: '🚫' },
];

export function ProductDetail() {
  const [showNutrition, setShowNutrition] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!showNutrition) return;
    const handler = (e: MouseEvent) => {
      if (tooltipRef.current && !tooltipRef.current.contains(e.target as Node)) {
        setShowNutrition(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [showNutrition]);

  return (
    <section id="producto" style={{ background: C.bgAlt, overflow: 'hidden' }}>
      <div className="product-grid">

        {/* Image — fills full column height with green vignette */}
        <div className="product-image-col" style={{ position: 'relative', minHeight: 560 }}>
          <img
            src="/producto-frente.png"
            alt="Patas de Pollo Deshidratadas NatuCan — frente del empaque"
            style={{
              position: 'absolute', inset: 0,
              width: '100%', height: '100%',
              objectFit: 'cover', objectPosition: 'center',
              display: 'block',
            }}
          />
          {/* Top */}
          <div aria-hidden style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '35%', background: `linear-gradient(to bottom, ${C.bgAlt} 0%, transparent 100%)` }} />
          {/* Bottom — mobile only */}
          <div aria-hidden className="product-grad-bottom" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '35%', background: `linear-gradient(to top, ${C.bgAlt} 0%, transparent 100%)` }} />
          {/* Right — desktop only */}
          <div aria-hidden className="product-grad-right" style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: '30%', background: `linear-gradient(to left, ${C.bgAlt} 0%, transparent 100%)` }} />
        </div>

        {/* Content — flex column so perritos sticks to bottom */}
        <div style={{
          padding: '96px 24px 0 48px',
          maxWidth: 680,
          display: 'flex', flexDirection: 'column',
        }}>
          <Reveal>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              padding: '5px 14px', borderRadius: 100,
              background: C.greenLight, border: `1px solid ${C.border}`,
              fontSize: 12, fontWeight: 700, color: C.green,
              marginBottom: 18, letterSpacing: 0.5, textTransform: 'uppercase' as const,
            }}>
              El Producto
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 style={{ fontFamily: SERIF, fontSize: 'clamp(24px, 3.2vw, 38px)', color: C.dark, lineHeight: 1.2, letterSpacing: -0.5, marginBottom: 18 }}>
              Patas de Pollo<br />Deshidratadas NatuCan
            </h2>
          </Reveal>

          <Reveal delay={0.14}>
            <p style={{ fontSize: 16, color: C.darkMuted, lineHeight: 1.7, marginBottom: 20 }}>
              Elaboradas con pollo colombiano seleccionado y deshidratadas a baja temperatura para conservar todos sus nutrientes. Sin conservantes, sin colorantes, sin harinas. Solo lo que tu perro necesita.
            </p>
          </Reveal>

          {/* ICA certification badge */}
          <Reveal delay={0.20}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 12,
              padding: '10px 18px 10px 14px', borderRadius: 12, marginBottom: 28,
              background: C.greenLight, border: `1.5px solid ${C.border}`,
            }}>
              <img src="/ica-logo.png" alt="ICA - Instituto Colombiano Agropecuario" style={{ height: 32, objectFit: 'contain' }} />
              <div>
                <div style={{ fontSize: 12, fontWeight: 700, color: C.green, letterSpacing: 0.5, textTransform: 'uppercase' as const, lineHeight: 1 }}>
                  Avalado por ICA
                </div>
                <div style={{ fontSize: 11, color: C.darkMuted, fontWeight: 500, marginTop: 2 }}>
                  Registro N° 01320002024 · Comercialización autorizada
                </div>
              </div>
            </div>
          </Reveal>

          {/* Nutrition grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20, marginBottom: 32 }}>
            {NUTRITION.map((n, i) => (
              <Reveal key={n.label} delay={0.18 + i * 0.08}>
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 2.2, delay: i * 0.3, repeat: Infinity, ease: 'easeInOut' }}
                  style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 4 }}
                >
                  <span style={{ fontSize: 28 }}>{n.icon}</span>
                  <div style={{ fontFamily: SERIF, fontSize: 22, fontWeight: 800, color: C.dark, lineHeight: 1 }}>{n.value}</div>
                  <div style={{ fontSize: 12, color: C.darkMuted, fontWeight: 600 }}>{n.label}</div>
                </motion.div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.28}>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <motion.a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackContact('producto')}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '14px 24px', borderRadius: 12,
                  background: '#25D366', color: C.white,
                  fontSize: 15, fontWeight: 700,
                }}
              >
                Pedir ahora
              </motion.a>
              <div ref={tooltipRef} style={{ position: 'relative' }}>
                <motion.button
                  onClick={() => { if (!showNutrition) trackViewContent('tabla_nutricional'); setShowNutrition(v => !v); }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    padding: '14px 24px', borderRadius: 12,
                    background: C.white, color: C.dark,
                    fontSize: 15, fontWeight: 600,
                    border: `1px solid ${C.border}`,
                    cursor: 'pointer',
                  }}
                >
                  Ver tabla nutricional
                </motion.button>
                <AnimatePresence>
                  {showNutrition && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: EASE }}
                      style={{
                        position: 'absolute', bottom: 'calc(100% + 12px)',
                        left: '50%', marginLeft: -140,
                        background: C.white, borderRadius: 16,
                        border: `1px solid ${C.border}`,
                        boxShadow: '0 12px 40px rgba(28,61,34,0.15)',
                        padding: 8, zIndex: 50, width: 280,
                      }}
                    >
                      <img src="/nutricion.png" alt="Tabla nutricional NatuCan" style={{ width: '100%', borderRadius: 10, display: 'block' }} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </Reveal>

          {/* Perritos — pegado al fondo */}
          <Reveal delay={0.36} style={{ marginTop: 'auto' }}>
            <img
              src="/perritos.png"
              alt="Perritos NatuCan"
              style={{ height: 140, objectFit: 'contain', display: 'block' }}
            />
          </Reveal>
        </div>

      </div>
    </section>
  );
}
