'use client';

import { useEffect } from 'react';

/** Progressive enhancement: content stays visible if scripts or motion are unavailable. */
export default function PageMotion() {
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const animations = new Set<Animation>();
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        observer.unobserve(entry.target);
        if (preference.matches) return;
        const animation = entry.target.animate([
          { opacity: 0, transform: 'translateY(24px)' },
          { opacity: 1, transform: 'translateY(0)' },
        ], { duration: 750, easing: 'cubic-bezier(.16,1,.3,1)' });
        animations.add(animation);
        animation.onfinish = () => animations.delete(animation);
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.intro-note > div, .index-header, .method-title, .method-steps, .contact-note > div').forEach(element => observer.observe(element));
    const stopMotion = () => { if (preference.matches) animations.forEach(a => a.cancel()); };
    preference.addEventListener('change', stopMotion);
    return () => {
      observer.disconnect();
      animations.forEach(a => a.cancel());
      preference.removeEventListener('change', stopMotion);
    };
  }, []);
  return null;
}
