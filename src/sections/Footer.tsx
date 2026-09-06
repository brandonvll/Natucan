import { C, WA_URL } from '../tokens';
import { trackContact } from '../lib/pixel';

export function Footer() {
  return (
    <footer style={{ padding: '40px 24px', background: C.greenDark, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20 }}>
        <img src="/logo.png" alt="NatuCan" style={{ height: 44, objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />

        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          {[
            { label: 'Inicio', href: '#inicio' },
            { label: 'Beneficios', href: '#beneficios' },
            { label: 'Precios', href: '#precios' },
            { label: 'Pedir', href: WA_URL, external: true },
          ].map(link => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              onClick={link.external
                ? () => trackContact('footer')
                : e => { e.preventDefault(); document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' }); }}
              style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', fontWeight: 500, transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.8)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', marginBottom: 4 }}>
            © {new Date().getFullYear()} NatuCan · Hecho con 🐾
          </div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7 }}>
            <img src="/ica-logo-white.png" alt="ICA" style={{ height: 16, objectFit: 'contain', opacity: 0.4 }} />
            <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.28)', fontWeight: 500 }}>
              Producto avalado por ICA · Reg. N° 01320002024
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
