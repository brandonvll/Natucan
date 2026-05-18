import { useRef, useEffect, useState } from 'react';
import { useInView } from 'motion/react';
import { C, SERIF } from '../tokens';
import { Reveal } from '../components/Reveal';

const STATS = [
  { target: 500, suffix: '+', label: 'Peludos felices' },
  { target: 100, suffix: '%', label: 'Natural · sin aditivos' },
  { target: 45, suffix: '%', label: 'Proteína pura' },
  { target: 24, suffix: 'h', label: 'Entrega en Medellín' },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = 16;
    const steps = duration / step;
    const increment = target / steps;
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) { setValue(target); clearInterval(timer); }
      else setValue(Math.round(start));
    }, step);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} style={{ fontFamily: SERIF, fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 800, color: C.white, lineHeight: 1 }}>
      {value.toLocaleString('es-CO')}{suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="stats-section" style={{ padding: '80px 0', background: C.dark }}>
      <div className="stats-wrapper" style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <div className="stats-grid">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1} y={30}>
              <div style={{ textAlign: 'center', padding: '8px 0' }}>
                <Counter target={s.target} suffix={s.suffix} />
                <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', marginTop: 8, fontWeight: 500 }}>
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
