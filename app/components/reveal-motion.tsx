'use client';

import { useEffect } from 'react';

export function RevealMotion() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!('IntersectionObserver' in window)) return;
    const animations = new Set<Animation>();
    const observer = new IntersectionObserver((entries) => {
      let stagger = 0;
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        observer.unobserve(entry.target);
        if (reduced.matches) return;
        const image = entry.target.matches('figure, img, .hero-media, .plan-panel');
        const keyframes = image
          ? [{ transform: 'translateY(20px) scale(1.015)' }, { transform: 'translateY(0) scale(1)' }]
          : [{ transform: 'translateY(16px)', opacity: 0.72 }, { transform: 'translateY(0)', opacity: 1 }];
        const animation = entry.target.animate(keyframes, { duration: image ? 1000 : 750, easing: 'cubic-bezier(0.22, 1, 0.36, 1)', delay: Math.min(stagger++ * 60, 180) });
        animations.add(animation);
        animation.onfinish = () => animations.delete(animation);
      });
    }, { threshold: 0.06 });
    document.querySelectorAll('[data-reveal]').forEach((element) => observer.observe(element));
    const cancel = () => { if (reduced.matches) { animations.forEach((animation) => animation.cancel()); animations.clear(); } };
    reduced.addEventListener('change', cancel);
    return () => { observer.disconnect(); reduced.removeEventListener('change', cancel); animations.forEach((animation) => animation.cancel()); };
  }, []);
  return null;
}
