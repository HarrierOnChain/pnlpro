import { useState, useRef, useEffect } from 'react';
import { APP_URL, GITHUB_URL } from '../bots';
import { useLang, LOCALES, localeOf } from '../i18n';
import { useT, READY_LANGS } from '../messages';

export function Nav() {
  const t = useT();
  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-bg-base/70 border-b border-border-subtle">
      <nav className="container-x flex items-center justify-between h-16">
        <a href="#top" className="flex items-center gap-2 font-bold tracking-tight">
          <img src="/logo-mark.png" alt="PnL Profit" width={34} height={34} className="w-[34px] h-[34px] object-contain" />
          <span>PnL Profit</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
          <a href="#strategies" className="hover:text-white transition-colors">{t.nav.strategies}</a>
          <a href="#managed" className="hover:text-white transition-colors">{t.nav.managed}</a>
          <a href="#venues" className="hover:text-white transition-colors">{t.nav.venues}</a>
          <a href="#tools" className="hover:text-white transition-colors">Tools</a>
          <a href="#engine" className="hover:text-white transition-colors">{t.nav.engine}</a>
          <a href="#safety" className="hover:text-white transition-colors">{t.nav.safety}</a>
          <a href="blog/" className="hover:text-white transition-colors">{t.nav.blog}</a>
          <a href="#contact" className="hover:text-white transition-colors">{t.nav.contact}</a>
        </div>

        <div className="flex items-center gap-2">
          <LangToggle />
          <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="btn-secondary hidden sm:inline-flex" aria-label={t.nav.github}>
            <GitHubIcon />
            <span className="hidden lg:inline">{t.nav.github}</span>
          </a>
          <a href={APP_URL} className="btn-primary">
            <span>Open App</span>
          </a>
        </div>
      </nav>
    </header>
  );
}

function LangToggle() {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const cur = localeOf(lang);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('click', onDoc);
    return () => document.removeEventListener('click', onDoc);
  }, []);

  return (
    <div ref={ref} className="relative hidden sm:block">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Change language"
        className="inline-flex items-center gap-1.5 rounded-lg border border-border-subtle bg-bg-elevated px-2.5 py-1.5 text-xs font-semibold text-zinc-300 hover:text-white transition-colors"
      >
        <span aria-hidden>{cur.flag}</span>
        <span className="hidden md:inline">{cur.native}</span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      {open && (
        <ul
          role="listbox"
          className="absolute end-0 mt-2 max-h-[70vh] w-44 overflow-auto rounded-xl border border-border-subtle bg-bg-elevated p-1 shadow-2xl z-50"
        >
          {LOCALES.filter((l) => READY_LANGS.includes(l.code)).map((l) => (
            <li key={l.code}>
              <button
                type="button"
                role="option"
                aria-selected={l.code === lang}
                onClick={() => {
                  setLang(l.code);
                  setOpen(false);
                }}
                className={`flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm transition-colors ${
                  l.code === lang ? 'bg-bg-base text-white' : 'text-zinc-400 hover:bg-bg-base/60 hover:text-white'
                }`}
              >
                <span aria-hidden>{l.flag}</span>
                <span className="flex-1 text-start">{l.native}</span>
                {l.code === lang && <span className="text-green-400">✓</span>}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-1.93c-3.2.7-3.88-1.54-3.88-1.54-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.1 11.1 0 015.79 0c2.2-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.69.41.36.78 1.07.78 2.15v3.19c0 .31.21.67.8.55 4.56-1.53 7.85-5.84 7.85-10.91C23.5 5.65 18.35.5 12 .5z"/>
    </svg>
  );
}
