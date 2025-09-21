// src/utils/lazy.ts
// Tiny helpers for deferring work until idle or visible

export function onIdle(cb: () => void) {
  if ('requestIdleCallback' in window) {
    (window as any).requestIdleCallback(cb, { timeout: 2000 });
  } else {
    setTimeout(cb, 0);
  }
}

export function whenVisible(sel: string, cb: () => void, options: IntersectionObserverInit = { rootMargin: '200px' }) {
  const el = document.querySelector(sel);
  if (!el) return;
  if (!('IntersectionObserver' in window)) {
    cb(); return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        io.disconnect();
        cb();
      }
    });
  }, options);
  io.observe(el);
}

export function loadScript(src: string, attrs: Record<string,string|boolean> = {}) {
  const s = document.createElement('script');
  s.src = src;
  s.defer = true;
  for (const [k,v] of Object.entries(attrs)) {
    if (typeof v === 'boolean') { if (v) s.setAttribute(k, ''); }
    else s.setAttribute(k, String(v));
  }
  document.head.appendChild(s);
}
