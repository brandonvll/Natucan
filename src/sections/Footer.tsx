import { C, WA_URL } from '../tokens';

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
              onClick={!link.external ? e => { e.preventDefault(); document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' }); } : undefined}
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
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M12 2L3 6.5V12c0 5 3.8 9.7 9 11 5.2-1.3 9-6 9-11V6.5L12 2z" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" strokeLinejoin="round"/>
              <path d="M8 12l2.5 2.5L16 9" stroke="rgba(255,255,255,0.5)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.28)', fontWeight: 500 }}>
              Producto avalado por ICA · Reg. N° 0130002024
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
