import {
  venues,
  venueRepoUrl,
  venueLogo,
  botById,
  accentClasses,
  TELEGRAM_URL,
  type VenueMeta,
} from '../bots';
import { useLang } from '../i18n';
import { useT } from '../messages';

export function VenuesSection() {
  const t = useT();

  return (
    <section id="venues" className="py-24 border-t border-border-subtle">
      <div className="container-x">
        <div className="max-w-3xl mb-10">
          <div className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-3">{t.venues.eyebrow}</div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">{t.venues.headline}</h2>
          <p className="text-lg text-zinc-400 leading-relaxed">{t.venues.description}</p>
        </div>

        {/* One flat grid, no per-venue status. The engine is venue-agnostic and each
            venue has its own repo; claiming a live/beta/roadmap state per venue on the
            marketing site is a capability claim we don't want to make here. */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {venues.map((v) => (
            <VenueCard key={v.repo} venue={v} />
          ))}
        </div>

        <p className="mt-12 text-sm text-zinc-500 max-w-3xl">
          {t.venues.footnote}{' '}
          <a href={TELEGRAM_URL} target="_blank" rel="noreferrer" className="text-green-400 hover:text-green-300 font-medium">
            {t.venues.footnoteCta}
          </a>
        </p>
      </div>
    </section>
  );
}

function VenueCard({ venue }: { venue: VenueMeta }) {
  const t = useT();
  const { lang } = useLang();

  return (
    <a
      href={venueRepoUrl(venue.repo)}
      target="_blank"
      rel="noreferrer"
      className="card group p-5 flex flex-col gap-4 hover:border-green-500/40 transition-colors"
    >
      <div className="flex items-center gap-2.5 min-w-0">
        <img
          src={venueLogo(venue.domain)}
          alt=""
          width={20}
          height={20}
          loading="lazy"
          className="w-5 h-5 rounded shrink-0 bg-white/5"
        />
        <h4 className="font-bold text-white leading-tight truncate">{venue.name}</h4>
      </div>

      <div className="text-sm text-zinc-500">{(venue.type as Record<string, string>)[lang] ?? venue.type.en}</div>

      <div className="flex flex-col gap-2">
        <div className="text-[11px] uppercase tracking-wider text-zinc-600 font-semibold">{t.nav.strategies}</div>
        <div className="flex flex-wrap gap-1.5">
          {venue.strategies.map((id) => {
            const bot = botById[id];
            if (!bot) return null;
            const accent = accentClasses[bot.accent];
            return (
              <span
                key={id}
                title={t.bots.items[id]?.title ?? id}
                className={`inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 text-[11px] font-medium ${accent.bg} ${accent.text}`}
              >
                <span aria-hidden>{bot.emoji}</span>
                <span className="hidden md:inline max-w-[7rem] truncate">{t.bots.items[id]?.title ?? id}</span>
              </span>
            );
          })}
        </div>
      </div>

      <div className="mt-auto text-sm font-medium text-green-400 opacity-0 group-hover:opacity-100 transition-opacity">{t.venues.cardCta}</div>
    </a>
  );
}
