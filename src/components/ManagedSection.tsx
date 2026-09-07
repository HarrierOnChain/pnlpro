import { useEffect, useState } from 'react';
import { useT } from '../messages';

const REPO = 'HarrierOnChain/Prediction-Markets-Trading-Bot-Toolkits';

// The star count used to be typed into the i18n copy, so it silently went stale
// (it read 359+ while the repo was at 433). Read it from GitHub instead and fall
// back to the copy if the call fails or is rate-limited.
function useStarCount() {
  const [stars, setStars] = useState<number | null>(null);
  useEffect(() => {
    let cancelled = false;
    fetch(`https://api.github.com/repos/${REPO}`)
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        if (!cancelled && typeof d?.stargazers_count === 'number') setStars(d.stargazers_count);
      })
      .catch(() => {
        /* offline or rate-limited — the i18n fallback stands */
      });
    return () => {
      cancelled = true;
    };
  }, []);
  return stars;
}

export function ManagedSection() {
  const t = useT();
  const m = t.managed;
  const stars = useStarCount();

  return (
    <section id="managed" className="py-24 border-t border-border-subtle">
      <div className="container-x">
        <div className="max-w-3xl mb-10">
          <div className="text-sm font-semibold text-green-400 uppercase tracking-wider mb-3">{m.eyebrow}</div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">{m.headline}</h2>
          <p className="text-lg text-zinc-400 leading-relaxed">{m.description}</p>
        </div>

        {/* By the numbers — honest, verifiable signals */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {m.stats.map((s, i) => (
            <div key={s.label} className="card p-5 text-center">
              <div className="text-2xl md:text-3xl font-bold text-white">
                {i === 0 && stars !== null ? stars.toLocaleString() : s.value}
              </div>
              <div className="mt-1 text-xs uppercase tracking-wider text-zinc-500">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Paper-beta honesty callout */}
        <div className="max-w-3xl mb-14 rounded-xl border border-amber-500/25 bg-amber-500/5 px-5 py-4 text-sm text-amber-200/90 leading-relaxed">
          {m.statusNote}
        </div>

        {/* What you get */}
        <h3 className="text-sm font-semibold text-zinc-300 uppercase tracking-wider mb-5">{m.featuresTitle}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
          {m.features.map((f) => (
            <div key={f.title} className="card p-5 flex gap-4">
              <div className="text-2xl shrink-0" aria-hidden>{f.icon}</div>
              <div>
                <div className="font-bold text-white mb-1">{f.title}</div>
                <div className="text-sm text-zinc-400 leading-relaxed">{f.body}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Plans/pricing removed — the hosted service is not currently offered.
            The copy was dropped from messages.tsx too (all locales), so nothing
            price-related ships in the bundle. The waitlist CTA is gone too: it
            pointed at app.pnlpro.fit, which no longer resolves. */}
      </div>
    </section>
  );
}
