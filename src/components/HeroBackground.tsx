import { useEffect, useRef } from 'react';

// Generative hero backdrop: green particles that drift and form/break "bonds"
// (combine & split), plus a few atoms (nucleus + orbiting electrons). No images.
// Lightweight, DPR-crisp, mouse-reactive, and respects prefers-reduced-motion.
export function HeroBackground() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const parent = canvas.parentElement as HTMLElement;

    const GREENS = ['#22c55e', '#4ade80', '#86efac', '#16a34a'];
    const pick = () => GREENS[(Math.random() * GREENS.length) | 0];

    type Dot = { x: number; y: number; vx: number; vy: number; r: number; c: string };
    type Atom = { x: number; y: number; e: number; phase: number; rx: number; ry: number; rot: number };
    let W = 0;
    let H = 0;
    let dots: Dot[] = [];
    let atoms: Atom[] = [];

    function build() {
      W = parent.clientWidth || window.innerWidth;
      H = parent.clientHeight || 640;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      canvas.style.width = W + 'px';
      canvas.style.height = H + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const n = Math.max(28, Math.min(72, Math.round((W * H) / 20000)));
      dots = Array.from({ length: n }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: 1.1 + Math.random() * 2.2,
        c: pick(),
      }));
      atoms = Array.from({ length: 4 }, () => ({
        x: W * (0.12 + Math.random() * 0.76),
        y: H * (0.12 + Math.random() * 0.76),
        e: 2 + ((Math.random() * 2) | 0),
        phase: Math.random() * Math.PI * 2,
        rx: 24 + Math.random() * 20,
        ry: 11 + Math.random() * 10,
        rot: Math.random() * Math.PI,
      }));
    }
    build();

    const mouse = { x: -9999, y: -9999 };
    const onMove = (e: MouseEvent) => {
      const b = canvas.getBoundingClientRect();
      mouse.x = e.clientX - b.left;
      mouse.y = e.clientY - b.top;
    };

    const MAXD = 132;
    let raf = 0;
    let t = 0;

    function frame() {
      t += 0.016;
      ctx.clearRect(0, 0, W, H);

      // bonds — form & break as dots drift (combine / split)
      for (let i = 0; i < dots.length; i++) {
        const p = dots[i];
        for (let j = i + 1; j < dots.length; j++) {
          const q = dots[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const d = Math.hypot(dx, dy);
          if (d < MAXD) {
            ctx.strokeStyle = `rgba(52,211,153,${(1 - d / MAXD) * 0.45})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
      }

      // dots
      for (const p of dots) {
        if (!reduce) {
          p.x += p.vx;
          p.y += p.vy;
          const mdx = mouse.x - p.x;
          const mdy = mouse.y - p.y;
          const md = Math.hypot(mdx, mdy);
          if (md < 150 && md > 0.001) {
            const f = ((150 - md) / 150) * 0.02;
            p.x += (mdx / md) * f;
            p.y += (mdy / md) * f;
          }
          if (p.x < 0 || p.x > W) p.vx *= -1;
          if (p.y < 0 || p.y > H) p.vy *= -1;
          p.x = Math.max(0, Math.min(W, p.x));
          p.y = Math.max(0, Math.min(H, p.y));
        }
        ctx.beginPath();
        ctx.fillStyle = p.c;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // atoms — nucleus + orbiting electrons (chemical-structure motif)
      for (const a of atoms) {
        ctx.beginPath();
        ctx.fillStyle = 'rgba(74,222,128,0.95)';
        ctx.arc(a.x, a.y, 2.6, 0, Math.PI * 2);
        ctx.fill();
        for (let k = 0; k < a.e; k++) {
          const rot = a.rot + k * 0.9;
          const cos = Math.cos(rot);
          const sin = Math.sin(rot);
          ctx.strokeStyle = 'rgba(34,197,94,0.14)';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.ellipse(a.x, a.y, a.rx, a.ry, rot, 0, Math.PI * 2);
          ctx.stroke();
          const ang = a.phase + t * (0.5 + 0.18 * k) + (k * Math.PI * 2) / a.e;
          const ex = Math.cos(ang) * a.rx;
          const ey = Math.sin(ang) * a.ry;
          const px = a.x + ex * cos - ey * sin;
          const py = a.y + ex * sin + ey * cos;
          ctx.beginPath();
          ctx.fillStyle = '#86efac';
          ctx.arc(px, py, 1.7, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      if (!reduce) raf = requestAnimationFrame(frame);
    }
    frame();

    let rid = 0;
    const rebuild = () => {
      window.clearTimeout(rid);
      rid = window.setTimeout(() => {
        build();
        if (reduce) frame();
      }, 150);
    };
    const ro = new ResizeObserver(rebuild);
    ro.observe(parent);
    if (!reduce) window.addEventListener('mousemove', onMove, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(rid);
      ro.disconnect();
      window.removeEventListener('mousemove', onMove);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className="absolute inset-0 -z-10 h-full w-full pointer-events-none"
      style={{
        maskImage: 'radial-gradient(ellipse 78% 72% at 50% 40%, #000 55%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 78% 72% at 50% 40%, #000 55%, transparent 100%)',
      }}
      aria-hidden
    />
  );
}
