import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { C, SERIF, EASE } from '../tokens';
import { Reveal } from '../components/Reveal';
import { ChevronDown } from 'lucide-react';

const FAQS = [
  { q: '¿Para qué razas y tamaños es adecuado?', a: 'NatuCan es ideal para perros de todas las razas y tamaños. Para perros pequeños recomendamos supervisar durante la masticación y partir la pata en trozos si es necesario.' },
  { q: '¿Con qué frecuencia puedo dárselo a mi perro?', a: 'Recomendamos 2-3 veces por semana como snack complementario. No debe reemplazar la alimentación principal, pero es perfecto como premio saludable.' },
  { q: '¿Cómo se procesan las patas de pollo?', a: 'Se deshidratan a baja temperatura (por debajo de 70°C) para conservar todos sus nutrientes naturales. No se usan conservantes, colorantes ni aditivos de ningún tipo.' },
  { q: '¿Cuánto dura el producto?', a: 'Tiene una vida útil de 6 meses almacenado en lugar fresco y seco. Una vez abierto, consúmalo en 4-6 semanas para garantizar la frescura.' },
  { q: '¿Hacen envíos fuera de Medellín?', a: 'Por ahora solo hacemos entregas en Medellín y el área metropolitana. Escríbenos por WhatsApp si estás fuera y evaluamos la opción de envío.' },
  { q: '¿Cómo hago mi pedido?', a: 'Es muy sencillo: haz clic en cualquier botón de WhatsApp, cuéntanos qué combo quieres y coordinamos el pago y la entrega. ¡Así de fácil!' },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: `1px solid ${C.border}` }}>
      <button
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        style={{
          width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '20px 0', background: 'none', border: 'none', textAlign: 'left',
          cursor: 'pointer', gap: 16,
        }}
      >
        <span style={{ fontSize: 16, fontWeight: 600, color: C.dark, lineHeight: 1.4 }}>{q}</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3, ease: EASE }}>
          <ChevronDown size={20} style={{ color: C.darkMuted, flexShrink: 0 }} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            style={{ overflow: 'hidden' }}
          >
            <p style={{ fontSize: 15, color: C.darkMuted, lineHeight: 1.7, paddingBottom: 20 }}>{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  return (
    <section id="faq" style={{ padding: '96px 0', background: C.bgAlt }}>
      <div style={{ maxWidth: 760, margin: '0 auto', padding: '0 24px' }}>

        <Reveal style={{ textAlign: 'center', marginBottom: 56 }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            padding: '5px 14px', borderRadius: 100,
            background: C.greenLight, border: `1px solid ${C.border}`,
            fontSize: 12, fontWeight: 700, color: C.green,
            marginBottom: 16, letterSpacing: 0.5, textTransform: 'uppercase' as const,
          }}>
            Preguntas frecuentes
          </span>
          <h2 style={{ fontFamily: SERIF, fontSize: 'clamp(24px, 3.5vw, 42px)', color: C.dark, letterSpacing: -0.5 }}>
            ¿Tienes dudas?
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div>
            {FAQS.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
