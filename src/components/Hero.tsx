import { APP_URL, GITHUB_URL } from '../bots';
import { useT, interp } from '../messages';

export function Hero() {
  const t = useT();
  return (
    <section
      id="top"
      className="relative -mt-16 flex min-h-[92vh] flex-col overflow-hidden"
    >
      {/* full-bleed banner video */}
      <video
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        src="/banner.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden
      />

      {/* legibility + brand overlays */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-bg-base via-bg-base/55 to-bg-base/25" aria-hidden />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-bg-base/90 via-bg-base/35 to-transparent" aria-hidden />
      <div className="absolute inset-x-0 -bottom-1 -z-10 h-40 bg-gradient-to-t from-bg-base to-transparent" aria-hidden />
      <div className="pointer-events-none absolute -left-40 top-1/3 -z-10 h-[520px] w-[520px] rounded-full bg-green-500/15 blur-[130px]" aria-hidden />

      {/* content — anchored bottom-left, cinematic */}
      <div className="container-x relative flex flex-1 flex-col justify-end pb-14 pt-28">
        <div className="max-w-3xl">
          <div className="mb-6 flex flex-wrap items-center gap-3 text-xs font-medium">
            <span className="inline-flex items-center gap-2 rounded-full border border-green-500/25 bg-green-500/10 px-3 py-1.5 text-green-300 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
              {t.hero.badge}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-zinc-200 backdrop-blur-sm">
              <span className="text-brand-polymarket">Polymarket</span>
              <span className="text-zinc-600">·</span>
              <span className="text-brand-kalshi">Kalshi</span>
              <span className="text-zinc-600">·</span>
              <span className="text-brand-limitless">Limitless</span>
            </span>
          </div>

          <h1 className="text-5xl font-extrabold leading-[1.03] tracking-tight drop-shadow-[0_2px_20px_rgba(0,0,0,0.6)] md:text-7xl">
            {t.hero.headlineLine1}
            <br />
            <span className="gradient-text">{t.hero.headlineLine2}</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-300 md:text-xl">
            {interp(t.hero.description, {
              polymarket: <span className="font-semibold text-brand-polymarket">Polymarket</span>,
              kalshi: <span className="font-semibold text-brand-kalshi">Kalshi</span>,
              limitless: <span className="font-semibold text-brand-limitless">Limitless</span>,
            })}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href={APP_URL} className="btn-primary px-6 py-3 text-base">
              <span>{t.hero.ctaTelegram}</span>
              <ArrowIcon />
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary px-6 py-3 text-base backdrop-blur-sm"
            >
              <GitHubIcon />
              <span>{t.hero.ctaGithub}</span>
            </a>
          </div>
        </div>
      </div>

      {/* stats strip along the bottom edge of the banner */}
      <div className="relative border-t border-white/10 bg-bg-base/50 backdrop-blur-md">
        <div className="container-x grid grid-cols-2 divide-white/5 md:grid-cols-4 md:divide-x">
          {t.hero.stats.map((stat) => (
            <Stat key={stat.label} label={stat.label} value={stat.value} unit={stat.unit} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value, unit }: { label: string; value: string; unit: string }) {
  return (
    <div className="px-5 py-5 text-left">
      <div className="text-xs font-medium uppercase tracking-wider text-zinc-500">{label}</div>
      <div className="mt-2 flex items-baseline gap-1.5">
        <span className="font-mono text-2xl font-bold text-white md:text-3xl">{value}</span>
        <span className="text-xs text-zinc-500">{unit}</span>
      </div>
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5 12h14M13 6l6 6-6 6"/>
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-1.93c-3.2.7-3.88-1.54-3.88-1.54-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.1 11.1 0 015.79 0c2.2-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.69.41.36.78 1.07.78 2.15v3.19c0 .31.21.67.8.55 4.56-1.53 7.85-5.84 7.85-10.91C23.5 5.65 18.35.5 12 .5z"/>
    </svg>
  );
}
