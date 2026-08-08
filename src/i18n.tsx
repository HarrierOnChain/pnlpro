import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

// ── Locale registry ─────────────────────────────────────────────────────────
// Add a language by adding a row here + a (possibly partial) message override in
// messages.tsx. Anything not translated falls back to English automatically.
export interface Locale {
  code: string;
  name: string; // English name
  native: string; // endonym
  flag: string;
  dir: 'ltr' | 'rtl';
}

export const LOCALES = [
  { code: 'en', name: 'English', native: 'English', flag: '🇬🇧', dir: 'ltr' },
  { code: 'zh', name: 'Chinese', native: '中文', flag: '🇨🇳', dir: 'ltr' },
  { code: 'ru', name: 'Russian', native: 'Русский', flag: '🇷🇺', dir: 'ltr' },
  { code: 'es', name: 'Spanish', native: 'Español', flag: '🇪🇸', dir: 'ltr' },
  { code: 'pt', name: 'Portuguese', native: 'Português', flag: '🇧🇷', dir: 'ltr' },
  { code: 'fr', name: 'French', native: 'Français', flag: '🇫🇷', dir: 'ltr' },
  { code: 'de', name: 'German', native: 'Deutsch', flag: '🇩🇪', dir: 'ltr' },
  { code: 'it', name: 'Italian', native: 'Italiano', flag: '🇮🇹', dir: 'ltr' },
  { code: 'tr', name: 'Turkish', native: 'Türkçe', flag: '🇹🇷', dir: 'ltr' },
  { code: 'vi', name: 'Vietnamese', native: 'Tiếng Việt', flag: '🇻🇳', dir: 'ltr' },
  { code: 'ja', name: 'Japanese', native: '日本語', flag: '🇯🇵', dir: 'ltr' },
  { code: 'ko', name: 'Korean', native: '한국어', flag: '🇰🇷', dir: 'ltr' },
  { code: 'ar', name: 'Arabic', native: 'العربية', flag: '🇸🇦', dir: 'rtl' },
] as const;

export type Lang = (typeof LOCALES)[number]['code'];
const CODES = LOCALES.map((l) => l.code) as Lang[];
export const isLang = (v: unknown): v is Lang => typeof v === 'string' && (CODES as string[]).includes(v);
export const localeOf = (code: Lang): Locale => LOCALES.find((l) => l.code === code) ?? LOCALES[0];
export const htmlLangOf = (code: Lang) => (code === 'zh' ? 'zh-CN' : code === 'pt' ? 'pt-BR' : code);

interface LangContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  dir: 'ltr' | 'rtl';
}
const LangContext = createContext<LangContextValue | null>(null);

const langFromPath = (): Lang | null => {
  if (typeof window === 'undefined') return null;
  const seg = window.location.pathname.split('/').filter(Boolean)[0];
  return isLang(seg) ? seg : null;
};

// The URL PATH is authoritative, so the rendered language always matches the
// (prerendered) page — clean for SEO and no hydration flash. Stored/browser
// preference is applied via a redirect from the root, not by overriding render.
function detectInitialLang(): Lang {
  if (typeof window === 'undefined') return 'en';
  try {
    const fromPath = langFromPath();
    if (fromPath) return fromPath;
    const q = new URLSearchParams(window.location.search).get('lang'); // legacy links
    if (isLang(q)) return q;
  } catch {
    /* ignore */
  }
  return 'en';
}

// Preferred locale from a returning visitor (stored) or their browser.
function preferredLang(): Lang | null {
  try {
    const stored = window.localStorage.getItem('lang');
    if (isLang(stored)) return stored;
  } catch {
    /* ignore */
  }
  if (typeof navigator !== 'undefined') {
    const b = (navigator.language ?? '').toLowerCase();
    const hit = CODES.find((c) => b === c || b.startsWith(c + '-'));
    if (hit) return hit;
  }
  return null;
}
const pathFor = (code: Lang) => (code === 'en' ? '/' : `/${code}/`);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectInitialLang);
  const dir = localeOf(lang).dir;

  const setLang = (next: Lang) => {
    setLangState(next);
    try {
      window.localStorage.setItem('lang', next);
    } catch {
      /* ignore */
    }
    // Reflect the locale in the URL path (/es/, /ja/, / for English) so it's
    // shareable and matches the prerendered per-locale page — client-side, no reload.
    try {
      const target = pathFor(next);
      if (window.location.pathname !== target) window.history.pushState(null, '', target);
    } catch {
      /* ignore */
    }
  };

  // Returning/browser-preferred visitor landing on the root → their locale page.
  // (Crawlers have no stored pref and en browser lang, so they stay on /.)
  useEffect(() => {
    try {
      if (langFromPath() || new URLSearchParams(window.location.search).get('lang')) return;
      const pref = preferredLang();
      if (pref && pref !== 'en' && window.location.pathname === '/') window.location.replace(pathFor(pref));
    } catch {
      /* ignore */
    }
  }, []);

  // Back/forward navigation between /es/, /ja/, / …
  useEffect(() => {
    const onPop = () => setLangState(langFromPath() ?? 'en');
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = htmlLangOf(lang);
      document.documentElement.dir = dir;
    }
  }, [lang, dir]);

  return <LangContext.Provider value={{ lang, setLang, dir }}>{children}</LangContext.Provider>;
}

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used within LangProvider');
  return ctx;
}
