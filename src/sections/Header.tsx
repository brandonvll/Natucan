import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { C, EASE } from '../tokens';

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: EASE }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: '6px 0',
        backgroundColor: scrolled ? 'rgba(247,250,245,0.92)' : 'rgba(0,0,0,0)',
        backdropFilter: scrolled ? 'blur(16px) saturate(180%)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px) saturate(180%)' : 'none',
        borderBottom: scrolled ? `1px solid ${C.border}` : '1px solid transparent',
        boxShadow: scrolled ? '0 1px 20px rgba(28,61,34,0.06)' : 'none',
        transition: 'background-color 0.3s, border-color 0.3s, box-shadow 0.3s',
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px', display: 'flex', justifyContent: 'center' }}>
        <a href="#inicio" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center',
            background: scrolled ? 'transparent' : 'rgba(247,250,245,0.88)',
            borderRadius: 50, padding: scrolled ? '2px 0' : '4px 8px 4px 5px',
            backdropFilter: scrolled ? 'none' : 'blur(12px)',
            WebkitBackdropFilter: scrolled ? 'none' : 'blur(12px)',
            transition: 'background 0.3s, padding 0.3s',
          }}>
            <img src="/logo.png" alt="NatuCan" style={{ height: 46, objectFit: 'contain' }} />
          </div>
        </a>
      </div>
    </motion.header>
  );
}
