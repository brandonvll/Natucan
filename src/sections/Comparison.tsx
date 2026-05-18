import { motion } from 'motion/react';
import { useRef } from 'react';
import { useInView } from 'motion/react';
import { C, SERIF, EASE } from '../tokens';
import { Reveal } from '../components/Reveal';
import { Reel } from '../components/Reel';
import { X, Check } from 'lucide-react';

const BAD = [
  'Colorantes y saborizantes artificiales',
  'Conservantes químicos',
  'Subproductos de baja calidad',
  'Rellenos y harinas procesadas',
  'Difícil digestión',
];

const GOOD = [
  'Un solo ingrediente 100% natural',
  'Sin conservantes ni aditivos',
  'Pollo colombiano seleccionado',
  'Alto en proteína y colágeno',
  'Digestión fácil y saludable',
];

const REEL_ITEMS = [
  { id: '1', src: '/banner1.avif' },
  { id: '2', src: '/banner2.webp' },
  { id: '3', src: '/banner3.jpg' },
  { id: '4', src: '/banner4.avif' },
  { id: '5', src: '/banner5.jpg' },
  { id: '6', src: '/banner6.jpg' },
];

export function Comparison() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="por-que" style={{ padding: '0 0 0', background: C.bgAlt, overflow: 'hidden' }}>

      {/* Reel — full width, above the heading */}
      <Reveal delay={0.1} y={20}>
        <div style={{ marginBottom: 64 }}>
          <Reel
            items={REEL_ITEMS}
            rows={2}
            duration={28}
            direction="alternate"
            itemWidth={280}
            itemHeight={180}
            gap={14}
            maskColor={C.bgAlt}
          />
        </div>
      </Reveal>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>

        <Reveal style={{ textAlign: 'center', marginBottom: 56 }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            padding: '5px 14px', borderRadius: 100,
            background: C.greenLight, border: `1px solid ${C.border}`,
            fontSize: 12, fontWeight: 700, color: C.green,
            marginBottom: 16, letterSpacing: 0.5, textTransform: 'uppercase' as const,
          }}>
            Diferencia real
          </span>
          <h2 style={{
            fontFamily: SERIF,
            fontSize: 'clamp(24px, 3.5vw, 42px)',
            color: C.dark, lineHeight: 1.15, letterSpacing: -0.5, marginBottom: 14,
          }}>
            ¿Por qué NatuCan?
          </h2>
          <p style={{ fontSize: 17, color: C.darkMuted, maxWidth: 520, margin: '0 auto' }}>
            No todos los snacks son iguales. Elige lo que tu perro realmente merece.
          </p>
        </Reveal>

        {/* Two-column comparison */}
        <div ref={ref} className="comparison-grid">
          {/* Bad card */}
          <motion.div
            initial={{ opacity: 0, x: -56 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -56 }}
            transition={{ duration: 0.9, ease: EASE }}
            style={{
              background: C.white, borderRadius: 20, overflow: 'hidden',
              border: '1px solid #E5C5C5',
              boxShadow: '0 4px 24px rgba(200,0,0,0.06)',
            }}
          >
            <div style={{ padding: '20px 24px', background: '#FEF2F2', borderBottom: '1px solid #FECACA' }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: '#991B1B' }}>😟 Snacks Comerciales</h3>
            </div>
            <ul style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: 14 }}>
              {BAD.map(item => (
                <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 24, height: 24, borderRadius: '50%', background: '#FEE2E2', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <X size={13} style={{ color: '#DC2626' }} strokeWidth={2.5} />
                  </div>
                  <span style={{ fontSize: 15, color: C.darkMuted }}>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Good card */}
          <motion.div
            initial={{ opacity: 0, x: 56 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 56 }}
            transition={{ duration: 0.9, ease: EASE }}
            style={{
              background: C.white, borderRadius: 20, overflow: 'hidden',
              border: `1px solid ${C.border}`,
              boxShadow: `0 4px 24px rgba(61,130,52,0.10)`,
            }}
          >
            <div style={{ padding: '20px 24px', background: C.greenLight, borderBottom: `1px solid ${C.border}` }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: C.greenDark }}>
                🌿 NatuCan <span style={{ fontSize: 13, fontWeight: 600, background: C.green, color: C.white, padding: '2px 10px', borderRadius: 100, marginLeft: 8 }}>Recomendado</span>
              </h3>
            </div>
            <ul style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: 14 }}>
              {GOOD.map(item => (
                <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 24, height: 24, borderRadius: '50%', background: C.greenLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Check size={13} style={{ color: C.green }} strokeWidth={2.5} />
                  </div>
                  <span style={{ fontSize: 15, color: C.dark, fontWeight: 500 }}>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      <div style={{ height: 96 }} />
    </section>
  );
}
