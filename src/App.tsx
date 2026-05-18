import { C, WA_URL } from './tokens';
import { Header } from './sections/Header';
import { Hero } from './sections/Hero';
import { Benefits } from './sections/Benefits';
import { Comparison } from './sections/Comparison';
import { Stats } from './sections/Stats';
import { Pricing } from './sections/Pricing';
import { ProductDetail } from './sections/ProductDetail';
import { Testimonials } from './sections/Testimonials';
import { FAQ } from './sections/FAQ';
import { FinalCTA } from './sections/FinalCTA';
import { Footer } from './sections/Footer';

/* ── Responsive CSS ──────────────────────────────────────────────────────────── */
const STYLES = `
/* Hero inner — right-aligned on desktop, centered on mobile */
.hero-container { position: relative; z-index: 1; }
.hero-inner {
  max-width: 620px;
  margin-left: auto;
  padding-right: 40px;
}
.hero-badges { justify-content: flex-start; }
.hero-trust  { justify-content: flex-start; }
.hero-cta    { justify-content: flex-start; }

/* Benefits — two columns, image bleeds to right viewport edge */
.benefits-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  align-items: stretch;
}
.benefits-content {
  padding: 96px 48px 96px max(24px, calc(50vw - 680px));
}

/* Comparison — two columns */
.comparison-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  align-items: stretch;
}

/* Stats — four columns */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
}

/* Pricing — three columns */
.pricing-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  align-items: stretch;
}

.product-grad-bottom { display: none; }

/* Product detail — two columns */
.product-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  align-items: stretch;
}

/* Floating WhatsApp */
.wsp-wrapper {
  position: fixed;
  bottom: 28px; right: 8px;
  z-index: 999;
  display: flex; flex-direction: column; align-items: center; gap: 0;
}
.wsp-float {
  display: flex; align-items: center; gap: 10px;
  padding: 13px 20px;
  background: #25D366;
  border-radius: 100px;
  color: white; font-weight: 700; font-size: 14px;
  box-shadow: 0 8px 32px rgba(37,211,102,0.5);
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
}

/* Reel marquee */
@keyframes reel-forward {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
@keyframes reel-reverse {
  from { transform: translateX(-50%); }
  to   { transform: translateX(0); }
}
.reel-row { animation-timing-function: linear; animation-iteration-count: infinite; }
.reel-forward { animation-name: reel-forward; }
.reel-reverse { animation-name: reel-reverse; }
.reel-pause-hover:hover { animation-play-state: paused; }

@keyframes nc-pulse {
  0%,100% { box-shadow: 0 8px 32px rgba(37,211,102,0.5), 0 0 0 0 rgba(37,211,102,0.4); }
  50%      { box-shadow: 0 8px 32px rgba(37,211,102,0.7), 0 0 0 10px rgba(37,211,102,0); }
}
.wsp-float { animation: nc-pulse 2.5s ease-in-out infinite; }

/* TABLET ≤ 900px */
@media (max-width: 900px) {
  .hero-inner {
    max-width: 100%;
    margin-left: 0;
    padding-right: 0;
    text-align: center;
    padding: 0 24px;
  }
  .hero-badges, .hero-trust, .hero-cta { justify-content: center; }

  .benefits-inner {
    grid-template-columns: 1fr;
    gap: 0;
  }
  .benefits-content { padding: 64px 24px; }
  .benefits-image-col { min-height: 360px; order: -1; }
  .benefits-dog { width: 100% !important; }

  .comparison-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .stats-wrapper, .pricing-wrapper, .testimonials-wrapper { padding: 0; }

  /* Testimonials — horizontal scroll */
  .testimonials-grid {
    display: flex !important;
    overflow-x: auto;
    gap: 16px;
    padding: 0 24px 16px;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
  }
  .testimonials-grid::-webkit-scrollbar { display: none; }
  .testimonials-grid > * { flex: 0 0 280px; scroll-snap-align: start; }
  .stats-section { padding: 40px 0 !important; }

  /* Stats — horizontal scroll */
  .stats-grid {
    display: flex;
    overflow-x: auto;
    gap: 16px;
    padding: 0 24px 16px;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
  }
  .stats-grid::-webkit-scrollbar { display: none; }
  .stats-grid > * { flex: 0 0 180px; scroll-snap-align: start; }

  /* Pricing — horizontal scroll */
  .pricing-grid {
    display: flex;
    overflow-x: auto;
    gap: 16px;
    padding: 20px 24px 16px;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    max-width: none;
    margin: 0;
  }
  .pricing-grid::-webkit-scrollbar { display: none; }
  .pricing-grid > * { flex: 0 0 280px; scroll-snap-align: start; }

  .product-grid {
    grid-template-columns: 1fr;
    gap: 0;
  }
  .product-grad-right { display: none; }
  .product-grad-bottom { display: block; }
}

/* MOBILE ≤ 560px */
@media (max-width: 560px) {
  .pricing-grid > * { flex: 0 0 260px; }
  .wsp-float-text { display: none; }
  .wsp-perritos { display: none; }
  .wsp-wrapper { bottom: 20px; right: 16px; }
  .wsp-float {
    width: 58px; height: 58px;
    border-radius: 50%;
    padding: 0;
    justify-content: center;
  }
}
`;

/* ── Floating WhatsApp button ────────────────────────────────────────────────── */
function FloatingWhatsApp() {
  return (
    <div className="wsp-wrapper">
      <a href={WA_URL} target="_blank" rel="noopener noreferrer" aria-label="Pedir por WhatsApp" className="wsp-perritos">
        <img src="/perritos.png" alt="Perritos NatuCan" style={{ height: 80, objectFit: 'contain', display: 'block' }} />
      </a>
      <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="wsp-float" aria-label="Pedir por WhatsApp">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.533 5.854L.057 23.215a.75.75 0 0 0 .92.92l5.389-1.47A11.952 11.952 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.686-.528-5.207-1.442l-.374-.222-3.875 1.056 1.084-3.773-.243-.386A9.954 9.954 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
        </svg>
        <span className="wsp-float-text">Pedir por WhatsApp</span>
      </a>
    </div>
  );
}

/* ── App ─────────────────────────────────────────────────────────────────────── */
export default function App() {
  return (
    <div style={{ background: C.bg, minHeight: '100vh', color: C.dark }}>
      <style>{STYLES}</style>
      <Header />
      <main>
        <Hero />
        <ProductDetail />
        <Benefits />
        <Comparison />
        <Stats />
        <Pricing />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
