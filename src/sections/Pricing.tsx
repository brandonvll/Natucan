import { motion } from 'motion/react';
import { C, SERIF, WA_URL, EASE } from '../tokens';
import { Reveal } from '../components/Reveal';
import { Check } from 'lucide-react';

const PLANS = [
  {
    name: 'Combo x3',
    price: '$39.900',
    desc: 'El más popular 🐾',
    features: ['3 bolsas × 100g', 'Ahorras $10.800 vs precio individual', '🚚 Envío GRATIS a Medellín y área metropolitana'],
    featured: true,
    badge: '🚚 Envío GRATIS',
    cta: 'Pedir Combo x3',
  },
  {
    name: 'Combo x2',
    price: '$29.900',
    desc: 'Ahorra más por bolsa',
    features: ['2 bolsas × 100g', 'Ahorras $3.900 vs precio individual', '🚚 Domicilio $6.000 a Medellín y área metropolitana'],
    featured: false,
    badge: '🚚 Domicilio $6.000',
    cta: 'Pedir Combo x2',
  },
  {
    name: '1 Bolsa',
    price: '$16.900',
    desc: 'Para conocer NatuCan',
    features: ['100g de patas deshidratadas', 'Snack premium para tu perro', '🚚 Domicilio $12.000 a Medellín y área metropolitana'],
    featured: false,
    badge: '🚚 Domicilio $12.000',
    cta: 'Pedir 1 Bolsa',
  },
];

export function Pricing() {
  return (
    <section id="precios" style={{ padding: '96px 0', background: C.bg }}>
      <div className="pricing-wrapper" style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>

        <Reveal style={{ textAlign: 'center', marginBottom: 56 }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            padding: '5px 14px', borderRadius: 100,
            background: C.greenLight, border: `1px solid ${C.border}`,
            fontSize: 12, fontWeight: 700, color: C.green,
            marginBottom: 16, letterSpacing: 0.5, textTransform: 'uppercase' as const,
          }}>
            Precios
          </span>
          <h2 style={{ fontFamily: SERIF, fontSize: 'clamp(24px, 3.5vw, 42px)', color: C.dark, letterSpacing: -0.5, marginBottom: 14 }}>
            Escoge tu combo NatuCan
          </h2>
          <p style={{ fontSize: 17, color: C.darkMuted, maxWidth: 480, margin: '0 auto' }}>
            Más bolsas, mejor precio. El Combo x3 incluye envío gratis.
          </p>
        </Reveal>

        <div className="pricing-grid">
          {PLANS.map((plan, i) => (
            <Reveal key={plan.name} delay={0.1 + i * 0.12} y={60}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3, ease: EASE }}
                style={{
                  background: plan.featured ? C.dark : C.white,
                  borderRadius: 20,
                  border: plan.featured ? `2px solid ${C.green}` : `1px solid ${C.border}`,
                  padding: '36px 28px',
                  boxShadow: plan.featured ? `0 20px 60px rgba(28,61,34,0.20)` : '0 4px 24px rgba(28,61,34,0.06)',
                  position: 'relative', height: '100%', display: 'flex', flexDirection: 'column',
                }}
              >
                {plan.featured && (
                  <div style={{
                    position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)',
                    background: C.orange, color: C.white,
                    padding: '4px 18px', borderRadius: 100,
                    fontSize: 12, fontWeight: 700, whiteSpace: 'nowrap',
                  }}>
                    ⭐ Más popular
                  </div>
                )}
                {!plan.featured && (
                  <div style={{
                    position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)',
                    background: C.green, color: C.white,
                    padding: '4px 18px', borderRadius: 100,
                    fontSize: 12, fontWeight: 700, whiteSpace: 'nowrap',
                  }}>
                    {plan.badge}
                  </div>
                )}

                <p style={{ fontSize: 13, fontWeight: 700, color: plan.featured ? 'rgba(255,255,255,0.6)' : C.darkMuted, textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 8 }}>
                  {plan.name}
                </p>
                <div style={{ fontFamily: SERIF, fontSize: 44, fontWeight: 800, color: plan.featured ? C.white : C.dark, lineHeight: 1, marginBottom: 6 }}>
                  {plan.price}
                </div>
                <p style={{ fontSize: 14, color: plan.featured ? 'rgba(255,255,255,0.55)' : C.darkMuted, marginBottom: 28 }}>
                  {plan.desc}
                </p>

                <ul style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32, flex: 1 }}>
                  {plan.features.map(f => (
                    <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                      <div style={{ width: 20, height: 20, borderRadius: '50%', background: plan.featured ? 'rgba(61,130,52,0.25)' : C.greenLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                        <Check size={11} style={{ color: plan.featured ? '#7DCE74' : C.green }} strokeWidth={2.5} />
                      </div>
                      <span style={{ fontSize: 14, color: plan.featured ? 'rgba(255,255,255,0.8)' : C.darkMuted, lineHeight: 1.5 }}>{f}</span>
                    </li>
                  ))}
                </ul>

                <motion.a
                  href={`${WA_URL}%20-%20${encodeURIComponent(plan.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                    padding: '14px 20px', borderRadius: 12,
                    background: plan.featured ? '#25D366' : C.green,
                    color: C.white, fontSize: 15, fontWeight: 700,
                    border: 'none', textDecoration: 'none',
                  }}
                >
                  {plan.cta}
                </motion.a>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
