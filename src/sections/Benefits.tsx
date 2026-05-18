import { C, SERIF } from '../tokens';
import { Reveal } from '../components/Reveal';

const ITEMS = [
  { icon: '🦷', title: 'Reduce el sarro y la placa', desc: 'La textura natural elimina residuos y mantiene sus dientes más limpios.' },
  { icon: '🛡️', title: 'Encías más fuertes', desc: 'Masticar estimula las encías y mejora la salud bucal de forma natural.' },
  { icon: '💨', title: 'Aliento más fresco', desc: 'Menos placa, menos bacterias, mejor aliento — sin productos artificiales.' },
  { icon: '🌿', title: '100% natural', desc: 'Sin químicos, sin conservantes. Solo un ingrediente, puro amor.' },
];

export function Benefits() {
  return (
    <section id="beneficios" style={{ background: C.bg, overflow: 'hidden' }}>
      <div className="benefits-inner">

        {/* Left: content — padding-left aligns with 1100px container center */}
        <div className="benefits-content">
          <Reveal>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              padding: '5px 14px', borderRadius: 100,
              background: C.greenLight, border: `1px solid ${C.border}`,
              fontSize: 12, fontWeight: 700, color: C.green,
              marginBottom: 18, letterSpacing: 0.5, textTransform: 'uppercase' as const,
            }}>
              Beneficios
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 style={{
              fontFamily: SERIF,
              fontSize: 'clamp(24px, 3.2vw, 38px)',
              color: C.dark, lineHeight: 1.2,
              letterSpacing: -0.5, marginBottom: 18,
            }}>
              ¿Por qué las patas de pollo limpian los dientes de tu perro?
            </h2>
          </Reveal>

          <Reveal delay={0.14}>
            <p style={{ fontSize: 17, color: C.darkMuted, lineHeight: 1.65, marginBottom: 36 }}>
              Masticar es algo natural para ellos, y cuando lo hacen bien, su salud lo agradece.
            </p>
          </Reveal>

          <ul style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 36 }}>
            {ITEMS.map((item, i) => (
              <Reveal key={item.title} delay={0.1 + i * 0.08} y={20}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                  <div style={{
                    width: 52, height: 52, minWidth: 52, borderRadius: 14,
                    background: C.greenLight, border: `1px solid ${C.border}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 24,
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <strong style={{ display: 'block', fontFamily: SERIF, fontSize: 17, color: C.dark, marginBottom: 4 }}>
                      {item.title}
                    </strong>
                    <p style={{ fontSize: 15, color: C.darkMuted, lineHeight: 1.6, margin: 0 }}>
                      {item.desc}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={0.5}>
            <div style={{
              fontSize: 17, fontStyle: 'italic', color: C.dark,
              background: C.bgAlt, padding: '16px 20px',
              borderRadius: 14, borderLeft: `4px solid ${C.green}`,
            }}>
              Porque una boca sana, es igual a un{' '}
              <strong style={{ color: C.orange, fontStyle: 'normal' }}>perro feliz.</strong> 🐾
            </div>
          </Reveal>
        </div>

        {/* Right: full-height image — no card, no border, image fills the column */}
        <div className="benefits-image-col" style={{ position: 'relative', minHeight: 560 }}>
          {/* Dog photo — fills the entire column */}
          <img
            src="/perro2.png"
            alt="Perro feliz masticando patas de pollo NatuCan"
            style={{
              position: 'absolute', inset: 0,
              width: '75%', height: '100%',
              objectFit: 'cover', objectPosition: 'center top',
              display: 'block',
            }}
          />
          {/* Gradient — section bg color fading up from bottom */}
          <div aria-hidden style={{
            position: 'absolute', bottom: 0, left: 0, right: 0,
            height: '75%',
            background: `linear-gradient(to top,
              rgba(247,250,245,1) 0%,
              rgba(247,250,245,0.6) 40%,
              rgba(247,250,245,0) 100%
            )`,
          }} />
        </div>

      </div>
    </section>
  );
}
