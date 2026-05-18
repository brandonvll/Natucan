import { motion } from 'motion/react';
import { C, SERIF, EASE } from '../tokens';
import { Reveal } from '../components/Reveal';
import { Star } from 'lucide-react';

const TESTIMONIALS = [
  { name: 'María C.', role: 'Mamá de Luna 🐕', stars: 5, text: 'Lo pedí sin muchas expectativas y quedé sorprendida. Luna lo ama y noto que sus dientes están más limpios. Lo recomiendo al 100%.' },
  { name: 'Carlos R.', role: 'Papá de Milo y Coco 🐾', stars: 5, text: 'Tengo dos perritos y los dos enloquecen con las patas. Lo mejor es que sé exactamente qué les estoy dando — solo pollo.' },
  { name: 'Valentina S.', role: 'Mamá de Toby 🐩', stars: 5, text: 'Mi veterinario me recomendó cambiar los snacks procesados y encontré NatuCan. Toby está más activo y su aliento mejoró notablemente.' },
];

export function Testimonials() {
  return (
    <section id="testimonios" style={{ padding: '96px 0', background: C.bg }}>
      <div className="testimonials-wrapper" style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>

        <Reveal style={{ textAlign: 'center', marginBottom: 56 }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            padding: '5px 14px', borderRadius: 100,
            background: 'rgba(245,163,26,0.12)', border: '1px solid rgba(245,163,26,0.28)',
            fontSize: 12, fontWeight: 700, color: C.orange,
            marginBottom: 16, letterSpacing: 0.5, textTransform: 'uppercase' as const,
          }}>
            Testimonios
          </span>
          <h2 style={{ fontFamily: SERIF, fontSize: 'clamp(24px, 3.5vw, 42px)', color: C.dark, letterSpacing: -0.5, marginBottom: 14 }}>
            Lo que dicen los papás peludos
          </h2>
          <p style={{ fontSize: 17, color: C.darkMuted, maxWidth: 480, margin: '0 auto' }}>
            Más de 500 familias en Medellín ya confían en NatuCan.
          </p>
        </Reveal>

        <div className="testimonials-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1} y={50}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, ease: EASE }}
                style={{
                  background: C.white, borderRadius: 20, padding: '28px 24px',
                  border: `1px solid ${C.border}`,
                  boxShadow: '0 4px 24px rgba(28,61,34,0.06)',
                  height: '100%', display: 'flex', flexDirection: 'column',
                }}
              >
                <div style={{ display: 'flex', gap: 3, marginBottom: 16 }}>
                  {Array.from({ length: t.stars }).map((_, si) => (
                    <Star key={si} size={14} style={{ fill: C.orange, color: C.orange }} />
                  ))}
                </div>
                <p style={{ fontSize: 14, color: C.darkMuted, lineHeight: 1.7, fontStyle: 'italic', flex: 1, marginBottom: 20 }}>
                  "{t.text}"
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, paddingTop: 16, borderTop: `1px solid ${C.border}` }}>
                  <div style={{ width: 40, height: 40, borderRadius: '50%', background: C.greenLight, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>
                    🐾
                  </div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: C.dark }}>{t.name}</div>
                    <div style={{ fontSize: 12, color: C.darkMuted }}>{t.role}</div>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
