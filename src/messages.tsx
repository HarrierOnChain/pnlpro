import type { ReactNode } from 'react';
import { useLang, LOCALES, type Lang } from './i18n';

interface Spec {
  label: string;
  value: string;
}

interface BotContent {
  title: string;
  tagline: string;
  hook: string;
  description: string;
  specs: Spec[];
}

interface HeroDescParts {
  polymarket: ReactNode;
  kalshi: ReactNode;
  limitless: ReactNode;
}

interface LiveSignalFootnoteParts {
  source: ReactNode;
  chainlink: ReactNode;
}

interface FooterDisclaimerParts {
  flag: ReactNode;
}

interface Feature {
  icon: string;
  title: string;
  body: string;
}

interface Layer {
  icon: string;
  title: string;
  body: string;
  accent: string;
}

interface Metric {
  metric: string;
  label: string;
}

interface LadderStep {
  stage: string;
  action: string;
}

interface Pillar {
  title: string;
  body: string;
}

interface Stat {
  label: string;
  value: string;
  unit: string;
}

interface ManagedFeature {
  icon: string;
  title: string;
  body: string;
}

interface ManagedPlan {
  name: string;
  price: string;
  fee: string;
  forWho: string;
  highlight?: boolean;
}

interface ManagedStat {
  value: string;
  label: string;
}

export interface Messages {
  langName: { en: string; zh: string; ru: string };
  nav: {
    strategies: string;
    managed: string;
    venues: string;
    engine: string;
    safety: string;
    blog: string;
    contact: string;
    github: string;
    telegram: string;
    langSwitch: string;
  };
  venues: {
    eyebrow: string;
    headline: string;
    description: string;
    statusLive: string;
    statusBeta: string;
    statusRoadmap: string;
    betaNote: string;
    groupLive: string;
    groupTraditional: string;
    groupCrypto: string;
    cardCta: string;
    footnote: string;
    footnoteCta: string;
  };
  managed: {
    eyebrow: string;
    headline: string;
    description: string;
    statusNote: string;
    stats: ManagedStat[];
    featuresTitle: string;
    features: ManagedFeature[];
    plansTitle: string;
    plans: ManagedPlan[];
    plansNote: string;
    cta: string;
  };
  hero: {
    badge: string;
    headlineLine1: string;
    headlineLine2: string;
    description: (parts: HeroDescParts) => ReactNode;
    ctaTelegram: string;
    ctaGithub: string;
    stats: Stat[];
  };
  liveSignal: {
    eyebrow: string;
    headline: string;
    sub: string;
    statusLive: string;
    statusOffline: string;
    statusConnecting: string;
    pair: string;
    sessionLabel: string;
    footnote: (parts: LiveSignalFootnoteParts) => ReactNode;
    attribution: string;
  };
  bots: {
    eyebrow: string;
    headline: string;
    description: string;
    statusProduction: string;
    statusDev: string;
    cardCta: string;
    cardCtaSuffix: string;
    items: Record<string, BotContent>;
  };
  engine: {
    eyebrow: string;
    headlineLine1: string;
    headlineLine2: string;
    description: string;
    features: Feature[];
    performanceEyebrow: string;
    performanceHeadline: string;
    metrics: Metric[];
  };
  safety: {
    eyebrow: string;
    headlineLine1: string;
    headlineLine2: string;
    description: string;
    layers: Layer[];
    ladderTitle: string;
    ladderSubtitle: string;
    ladder: LadderStep[];
  };
  howItWorks: {
    eyebrow: string;
    headline: string;
    description: string;
    steps: { num: string; title: string; body: string }[];
    getTitle: string;
    gets: string[];
    note: string;
    cta: string;
  };
  cta: {
    eyebrow: string;
    headline: string;
    description: string;
    ctaTelegram: string;
    ctaGithub: string;
    pillars: Pillar[];
  };
  footer: {
    productName: string;
    tagline: string;
    disclaimerLabel: string;
    disclaimer: (parts: FooterDisclaimerParts) => ReactNode;
    rights: string;
  };
}

const full: Record<'en' | 'zh' | 'ru', Messages> = {
  en: {
    langName: { en: 'English', zh: '简体中文', ru: 'Русский' },
    nav: {
      strategies: 'Strategies',
      managed: 'Managed',
      venues: 'Venues',
      engine: 'Engine',
      safety: 'Safety',
      blog: 'Blog',
      contact: 'Contact',
      github: 'GitHub',
      telegram: 'Telegram',
      langSwitch: 'Language',
    },
    venues: {
      eyebrow: 'Venue Coverage',
      headline: 'One engine. Every venue.',
      description:
        'The engine is venue-agnostic — any platform with an order book or position feed plugs in through a single adapter. Seven venues are live in production today, two more are in beta with live market data, and the rest of the prediction-market universe is adapter-driven roadmap. Each venue has its own dedicated bot repo.',
      statusLive: 'Live',
      statusBeta: 'Beta',
      statusRoadmap: 'Roadmap',
      betaNote: '🟡 Beta = live, verified price data wired into the cross-venue arbitrage engine; full strategy execution still in testing. PredictIt (real-money) and Manifold (play-money consensus signal) now feed live prices alongside Polymarket and Kalshi.',
      groupLive: '🟢 Live today',
      groupTraditional: 'Traditional / Regulated',
      groupCrypto: 'Crypto / Decentralized',
      cardCta: 'Open repo →',
      footnote: 'Want a venue prioritized? Adapter work is demand-driven — if you trade a platform not yet live, it can move up the queue.',
      footnoteCta: 'Request a venue →',
    },
    managed: {
      eyebrow: 'Managed & Copy-Trading',
      headline: "Don't want to run infrastructure? Let us.",
      description:
        'Trade the same engine as a service. Open a managed account, pick a proven leader from the on-chain leaderboard or a strategy, and let the hosted bots run — you watch balance, P&L, and fees on a live dashboard.',
      statusNote:
        '🧪 Early-access beta — paper trading (simulated funds). Explore the full product, the leaderboard, and the economics today with zero capital at risk. Managed live trading with real funds is gated behind the waitlist and not open yet — custody, security audit, and licensing come first.',
      stats: [
        { value: '359+', label: 'GitHub stars' },
        { value: '7 (+2 beta)', label: 'Live venues' },
        { value: '10', label: 'Strategies' },
        { value: 'Paper', label: 'Beta mode' },
      ],
      featuresTitle: 'What you get',
      features: [
        { icon: '📈', title: 'On-chain leaderboard', body: 'Real Polymarket wallets ranked by verifiable on-chain P&L (profit or volume, 1d/7d/30d/all-time). One click to copy a proven trader.' },
        { icon: '🤖', title: 'Hosted strategy bots', body: 'The same 10-strategy engine, run for you. No keys, no servers, no ops.' },
        { icon: '💰', title: 'Cross-venue arbitrage', body: 'Live pricing across Polymarket ↔ Kalshi ↔ PredictIt, with Manifold as a play-money consensus signal.' },
        { icon: '🛡️', title: 'Same safety layer', body: 'Circuit breaker, depth guard, trade floor — the guardrails from the open-source engine, applied to every managed account.' },
      ],
      plansTitle: 'Early-access plans',
      plans: [
        { name: 'Starter', price: 'Free', fee: 'No performance fee', forWho: 'Learn the bots in paper mode, zero risk' },
        { name: 'Pro', price: '$49 / mo', fee: '10% (high-water mark)', forWho: 'Hosted bots + more strategies', highlight: true },
        { name: 'Managed', price: '$199 / mo', fee: '20% (high-water mark)', forWho: 'Full copy-trading, hands-off' },
      ],
      plansNote:
        'Performance fees use a high-water mark — charged only on new profit above your prior peak, never on deposits or on recovering a drawdown. Pricing shown is early-access and paper-beta.',
      cta: 'Join the early-access waitlist',
    },
    hero: {
      badge: 'Managed & copy-trading · paper early access',
      headlineLine1: 'Copy proven traders.',
      headlineLine2: 'Profit on autopilot.',
      description: ({ polymarket, kalshi, limitless }) => (
        <>
          PnL Profit runs the bots for you. Pick a proven wallet from the live on-chain leaderboard — or a strategy — and hosted bots mirror it across {polymarket}, {kalshi} and {limitless}.
          {' '}Copy trading, cross-venue arbitrage, market making — one risk layer, one dashboard. Paper-trading early access.
        </>
      ),
      ctaTelegram: 'Open the App',
      ctaGithub: 'View on GitHub',
      stats: [
        { label: 'Order execution', value: '< 100ms', unit: 'end-to-end' },
        { label: 'Event processing', value: '< 1ms', unit: 'per event' },
        { label: 'Memory baseline', value: '~50MB', unit: 'resident' },
        { label: 'CPU under load', value: '< 5%', unit: 'modern hw' },
      ],
    },
    liveSignal: {
      eyebrow: 'Live signal',
      headline: 'BTC/USDT — the market the bots watch',
      sub: 'Real-time spot price, streamed directly from the order book.',
      statusLive: 'Live',
      statusOffline: 'Offline',
      statusConnecting: 'Connecting',
      pair: 'BTC / USDT',
      sessionLabel: '· session',
      footnote: ({ source, chainlink }) => (
        <>
          Source: {source}. Polymarket&apos;s BTC Up/Down markets resolve against {chainlink},
          which aggregate from Binance, Coinbase, Kraken, and other major venues — so what you see here
          is a faithful real-time proxy for the price the bots trade against.
        </>
      ),
      attribution: 'Charts by TradingView',
    },
    bots: {
      eyebrow: 'The Lineup',
      headline: 'Ten strategies. One engine.',
      description:
        'Each bot targets a distinct, well-defined market edge — copy trading, arbitrage, market making, on-chain signals. All share the same battle-tested execution core, risk layer, and venue-agnostic adapter stack. Pick the edge that fits your thesis; the infrastructure is already built.',
      statusProduction: 'Production',
      statusDev: 'In dev',
      cardCta: 'Discuss this bot',
      cardCtaSuffix: '→ Telegram',
      items: {
        'copy-trading': {
          title: 'Copy Trading',
          tagline: 'Mirror top wallets automatically with configurable sizing and risk limits.',
          hook: 'Outsource alpha to wallets that already proved they have it.',
          description:
            'Zero research, zero chart-watching, zero second-guessing — the bot copies, you compound. Tracks one or more high-performing wallets and mirrors BUY/SELL actions in near-real time.',
          specs: [
            { label: 'Tracked wallets', value: 'Multiple' },
            { label: 'Order types', value: 'FAK / GTD' },
            { label: 'Risk', value: 'Circuit breaker + depth' },
            { label: 'Dry run', value: 'Fully supported' },
          ],
        },
        'btc-arb': {
          title: 'BTC 5m / 15m / 1hr Arbitrage',
          tagline: 'Speed on short-window BTC Up/Down markets.',
          hook: '42ms end-to-end — in the order book before you finish reading the title.',
          description:
            'Watches BTC Up/Down windows. When a pricing inefficiency emerges, the bot places a low-latency FAK before the window closes. Human reflexes don\'t compete here.',
          specs: [
            { label: 'Markets', value: 'BTC Up/Down 5m–1hr' },
            { label: 'Order type', value: 'FAK' },
            { label: 'Execution', value: '~42ms' },
          ],
        },
        'cross-arb': {
          title: 'Cross-Venue Arbitrage',
          tagline: 'Cross-venue pricing inefficiencies across real-money books.',
          hook: 'Lock the spread, not the direction.',
          description:
            'The same contract is matched across Polymarket, Kalshi and PredictIt (strict matching — no false pairs), and the gap is captured only when it beats round-trip fees. Both legs hedged — your P&L is the price gap itself.',
          specs: [
            { label: 'Venues', value: 'Polymarket ↔ Kalshi ↔ PredictIt' },
            { label: 'Edge threshold', value: '≥ fees, configurable' },
            { label: 'Logging', value: 'Full P&L tracking' },
          ],
        },
        'directional-arb': {
          title: 'Directional Arbitrage',
          tagline: 'Arbitrage base with a directional tilt.',
          hook: 'Start from arbitrage, then lean into the side with more edge.',
          description:
            'Buys both sides when Up + Down can be assembled for under $1, then sizes up the side the model rates undervalued — keeping an arbitrage floor while the net position goes directional. The smaller side works as a partial hedge.',
          specs: [
            { label: 'Entry', value: 'Up + Down < $1 basket' },
            { label: 'Tilt', value: 'Up to 3:1 toward edge' },
            { label: 'Orders', value: 'Limit-only' },
          ],
        },
        'spread-farming': {
          title: 'Spread Farming',
          tagline: 'Systematic, repeatable micro-edges.',
          hook: 'A thousand 0.5¢ wins compound into one big number.',
          description:
            'Disciplined, repeatable, boring in the best way — the kind of edge that survives every market regime. Sits at the spread, waits for fill conditions, executes with consistent sizing.',
          specs: [
            { label: 'Edge', value: 'Bid-ask spread' },
            { label: 'Logging', value: 'Per-trade + session' },
          ],
        },
        sports: {
          title: 'Sports Betting Execution',
          tagline: 'Click-to-bet speed on live sports markets.',
          hook: 'Click. Filled. Done — in under 50ms.',
          description:
            'Beat the line move that costs every other manual bettor their edge before they\'ve even confirmed the order. Real-time odds combined with fast FAK execution.',
          specs: [
            { label: 'Sports', value: 'NBA, NFL, Soccer +' },
            { label: 'Execution', value: '< 50ms' },
          ],
        },
        'resolution-sniper': {
          title: 'Resolution Sniper',
          tagline: 'High win-rate, low-variance plays unique to prediction markets.',
          hook: '95%+ probabilities at 95¢ → ride to the guaranteed $1.00 payout.',
          description:
            'The closest thing to free money any market has ever offered — and it doesn\'t exist outside prediction markets. Scans for near-certainty outcomes and holds to resolution.',
          specs: [
            { label: 'Certainty', value: 'Configurable' },
            { label: 'Payout', value: '$1.00 / share' },
            { label: 'Venues', value: 'PM · Kalshi · Limitless' },
          ],
        },
        'orderbook-imbalance': {
          title: 'Orderbook Imbalance',
          tagline: 'Pure order-flow signal, no external data required.',
          hook: 'No subscriptions, no external feeds, no broken APIs.',
          description:
            'The signal is the order book — self-contained, bulletproof, and impossible to front-run because nobody else sees what you see. Monitors live OBI at 500ms refresh.',
          specs: [
            { label: 'Signal', value: 'Live orderbook only' },
            { label: 'Refresh', value: '500ms' },
            { label: 'Venues', value: 'PM · Kalshi · Limitless' },
          ],
        },
        'market-making': {
          title: 'Market Making',
          tagline: 'Passive spread income on illiquid prediction markets.',
          hook: 'Be the house, not the gambler.',
          description:
            'Quote both sides, earn the spread on every fill — direction-agnostic income that scales with volume, not luck. GTD orders with inventory-aware skew.',
          specs: [
            { label: 'Order mgmt', value: 'Auto-cancel + requote' },
            { label: 'Inventory', value: 'Skew limits' },
            { label: 'Venues', value: 'Polymarket · Kalshi' },
          ],
        },
        'whale-signal': {
          title: 'On-Chain Whale Signal',
          tagline: 'Fastest possible signal — 3–30s ahead of the positions API.',
          hook: '3–30 seconds ahead of every other tracker on the planet.',
          description:
            'Direct from Polygon block data. You see the whale\'s order before the public positions API even acknowledges it exists. ABI calldata decoded the instant blocks land.',
          specs: [
            { label: 'Source', value: 'Polygon blocks' },
            { label: 'Lead time', value: '3–30s' },
            { label: 'Decode', value: 'ABI calldata' },
          ],
        },
      },
    },
    engine: {
      eyebrow: 'Under the hood',
      headlineLine1: 'Engineered in Rust.',
      headlineLine2: 'Tuned for prediction markets.',
      description:
        'Built on the guarantees Rust gives you — and the speed Tokio\'s async runtime makes possible. Every strategy shares the same execution path, the same risk hooks, the same observability surface.',
      features: [
        {
          icon: '🦀',
          title: 'Rust + Tokio',
          body: 'No GC pauses mid-trade. No data races in concurrent execution. No null-pointer surprises. Lean, predictable, fast under pressure.',
        },
        {
          icon: '🔌',
          title: 'Venue-agnostic adapters',
          body: 'One shared API surface across Polymarket, Kalshi, and Limitless. Strategies reference VenueId — not platform-specific types.',
        },
        {
          icon: '🖥️',
          title: 'Real-time TUI',
          body: 'ratatui-powered terminal interface with live log streaming, color-coded severity, and per-bot status views.',
        },
        {
          icon: '⚙️',
          title: 'FAK & GTD orders',
          body: 'Fill-or-Kill and Good-Till-Date order types with automatic market ID resolution. Concurrent execution, rate-limited.',
        },
      ],
      performanceEyebrow: 'Performance',
      performanceHeadline: 'Numbers that matter when milliseconds cost money.',
      metrics: [
        { metric: '< 1ms', label: 'Event processing' },
        { metric: '< 100ms', label: 'Order execution' },
        { metric: '~200ms', label: 'Position polling' },
        { metric: '~50MB', label: 'Memory baseline' },
        { metric: '< 5%', label: 'CPU utilization' },
        { metric: '25 / 10s', label: 'Rate limit (configurable)' },
      ],
    },
    safety: {
      eyebrow: 'Risk-first design',
      headlineLine1: 'Speed without guardrails',
      headlineLine2: 'is just expensive losing.',
      description:
        'Every order flows through a four-layer risk pipeline before it reaches the exchange. Circuit breakers, depth checks, size floors, and full dry-run — wired into the same execution core every bot uses.',
      layers: [
        {
          icon: '🛑',
          title: 'Circuit Breaker',
          body: 'Auto-halts after N consecutive large trades inside a configurable rolling window. Stops cascades before they start.',
          accent: 'text-rose-400',
        },
        {
          icon: '🛡️',
          title: 'Orderbook Depth Guard',
          body: 'Validates liquidity before every order. No fills into thin books — period.',
          accent: 'text-amber-400',
        },
        {
          icon: '🧪',
          title: 'Dry Run Mode',
          body: 'Full execution path runs without placing real orders. Validate signals and sizing with zero capital at risk.',
          accent: 'text-cyan-400',
        },
        {
          icon: '⚖️',
          title: 'Trade Size Floor',
          body: 'Minimum-size enforcement on every order. Filters out negative-EV micro-trades automatically.',
          accent: 'text-emerald-400',
        },
      ],
      ladderTitle: 'Deployment ladder',
      ladderSubtitle: 'A short checklist for going from zero to production.',
      ladder: [
        { stage: 'Setup', action: 'Run with enable_trading: false for one full session.' },
        { stage: 'First trades', action: 'Keep copy_percentage at 5–10% until you trust the signal.' },
        { stage: 'Ongoing', action: 'Watch circuit-breaker trips — they surface execution anomalies.' },
        { stage: 'Production', action: 'Use a dedicated wallet with only the capital you intend to deploy.' },
      ],
    },
    howItWorks: {
      eyebrow: 'How it works',
      headline: 'From repo to live bot in three steps.',
      description:
        'No black box. You run the same Rust engine the screenshots show — on your machine, your keys, your capital.',
      steps: [
        { num: '01', title: 'Pick your edge', body: 'Choose the strategy and venue that fit your thesis. Each bot is a distinct, well-defined market edge on the shared engine.' },
        { num: '02', title: 'Configure & dry-run', body: 'Drop in your keys, set risk limits, and run with enable_trading: false until you trust the signal — zero capital at risk.' },
        { num: '03', title: 'Go live', body: 'Flip to live on a dedicated wallet with the capital you choose. Watch fills, P&L, and circuit-breaker state from the real-time TUI.' },
      ],
      getTitle: 'What you get',
      gets: [
        'Full Rust source — MIT licensed, yours to read and modify',
        'Guided setup — direct help getting your first bot running',
        'The shared risk layer — circuit breaker, depth guard, dry-run, trade floor',
        'Ongoing updates — new venues and strategy upgrades as they ship',
      ],
      note: 'Source-available with hands-on setup. Message on Telegram for access and pricing.',
      cta: 'Get access on Telegram',
    },
    cta: {
      eyebrow: 'Get started',
      headline: 'Ready to put a bot to work?',
      description:
        'Telegram for direct conversation, scope discussion, or paid setup. GitHub for the open-source repo, configuration docs, and the live codebase. Response time on Telegram is typically a few hours.',
      ctaTelegram: '@HarrierOnChain on Telegram',
      ctaGithub: 'Browse the repo',
      pillars: [
        { title: 'Open source', body: 'MIT licensed. Read the code, fork it, build on it.' },
        { title: 'Actively maintained', body: 'The repo ships fixes and strategy upgrades regularly.' },
        { title: 'Direct line', body: 'No support tickets. You talk to the person who wrote the bot.' },
      ],
    },
    footer: {
      productName: 'PnL Profit',
      tagline: 'Polymarket · Kalshi · Limitless',
      disclaimerLabel: 'Disclaimer.',
      disclaimer: ({ flag }) => (
        <>
          {' '}Trading prediction markets involves real financial risk. This software is provided as-is,
          without warranty or guarantee of any outcome. It is not financial advice. Always test with{' '}
          {flag}{' '}before deploying real capital. Ensure compliance with each venue&apos;s terms of service
          and applicable regulations in your jurisdiction.
        </>
      ),
      rights: 'MIT Licensed · Built for the prediction markets community.',
    },
  },

  zh: {
    langName: { en: 'English', zh: '简体中文', ru: 'Русский' },
    nav: {
      strategies: '策略',
      managed: '托管服务',
      venues: '平台',
      engine: '引擎',
      safety: '安全',
      blog: '博客',
      contact: '联系',
      github: 'GitHub',
      telegram: 'Telegram',
      langSwitch: '语言',
    },
    venues: {
      eyebrow: '平台覆盖',
      headline: '一套引擎。覆盖所有平台。',
      description:
        '引擎与平台无关——任何带订单簿或仓位数据的平台都能通过单个适配器接入。今天有七个平台已在生产环境上线，另有两个平台处于测试阶段并已接入实时市场数据；预测市场宇宙的其余部分都是适配器驱动的路线图。每个平台都有自己专属的机器人仓库。',
      statusLive: '已上线',
      statusBeta: '测试中',
      statusRoadmap: '路线图',
      betaNote: '🟡 测试中 = 已接入并验证的实时价格数据，已连入跨平台套利引擎；完整策略执行仍在测试。PredictIt（真钱）与 Manifold（虚拟币共识信号）现已与 Polymarket、Kalshi 一并提供实时价格。',
      groupLive: '🟢 已上线',
      groupTraditional: '传统 / 合规平台',
      groupCrypto: '加密 / 去中心化平台',
      cardCta: '打开仓库 →',
      footnote: '想优先接入某个平台？适配器开发是需求驱动的——如果你交易的平台尚未上线，它可以往队列前面挪。',
      footnoteCta: '申请接入平台 →',
    },
    managed: {
      eyebrow: '托管与跟单交易',
      headline: '不想自己运维基础设施？交给我们。',
      description:
        '把同一套引擎当作服务来用。开一个托管账户，从链上排行榜挑一位已被验证的领投者或一个策略，让托管机器人替你运行——你只需在实时仪表盘上看余额、P&L 和费用。',
      statusNote:
        '🧪 抢先体验测试阶段——纸面交易（模拟资金）。今天就能零风险体验完整产品、排行榜与费用经济模型。使用真实资金的托管实盘交易由候补名单管控、尚未开放——托管、安全审计与合规牌照优先。',
      stats: [
        { value: '359+', label: 'GitHub Star' },
        { value: '7（+2 测试中）', label: '已上线平台' },
        { value: '10', label: '策略' },
        { value: '纸面', label: '测试模式' },
      ],
      featuresTitle: '你能获得什么',
      features: [
        { icon: '📈', title: '链上排行榜', body: '真实的 Polymarket 钱包按可核验的链上 P&L 排名（利润或成交量，1 天 / 7 天 / 30 天 / 全期）。一键跟单已被验证的交易者。' },
        { icon: '🤖', title: '托管策略机器人', body: '同一套十策略引擎，替你运行。无密钥、无服务器、无运维。' },
        { icon: '💰', title: '跨平台套利', body: 'Polymarket ↔ Kalshi ↔ PredictIt 的实时价格，并以 Manifold 作为虚拟币共识信号。' },
        { icon: '🛡️', title: '同一套安全层', body: '熔断器、深度护卫、下单底线——来自开源引擎的护栏，同样应用于每个托管账户。' },
      ],
      plansTitle: '抢先体验方案',
      plans: [
        { name: 'Starter', price: '免费', fee: '无绩效费', forWho: '在纸面模式下零风险学习机器人' },
        { name: 'Pro', price: '$49 / 月', fee: '10%（高水位线）', forWho: '托管机器人 + 更多策略', highlight: true },
        { name: 'Managed', price: '$199 / 月', fee: '20%（高水位线）', forWho: '全策略跟单、彻底放手' },
      ],
      plansNote:
        '绩效费采用高水位线——只对超过历史峰值的新利润收费，绝不对入金或回撤修复收费。所示价格为抢先体验与纸面测试期定价。',
      cta: '加入抢先体验候补名单',
    },
    hero: {
      badge: '托管与跟单交易 · 纸面抢先体验',
      headlineLine1: '跟单已被验证的赢家，',
      headlineLine2: '让盈利自动运行。',
      description: ({ polymarket, kalshi, limitless }) => (
        <>
          PnL Profit 替你运行机器人。从实时链上排行榜挑一位已被验证的钱包——或一个策略——托管机器人便会在 {polymarket}、{kalshi} 与 {limitless} 上为你镜像。
          跟单交易、跨平台套利、做市——同一套风控、同一个仪表盘。纸面交易抢先体验。
        </>
      ),
      ctaTelegram: '打开应用',
      ctaGithub: '查看 GitHub',
      stats: [
        { label: '下单执行', value: '< 100ms', unit: '端到端' },
        { label: '事件处理', value: '< 1ms', unit: '每事件' },
        { label: '内存占用', value: '~50MB', unit: '常驻' },
        { label: 'CPU 占用', value: '< 5%', unit: '现代硬件' },
      ],
    },
    liveSignal: {
      eyebrow: '实时信号',
      headline: 'BTC/USDT — 机器人正在盯的市场',
      sub: '实时现货价格，直接来自订单簿。',
      statusLive: '实时',
      statusOffline: '离线',
      statusConnecting: '连接中',
      pair: 'BTC / USDT',
      sessionLabel: '· 本次会话',
      footnote: ({ source, chainlink }) => (
        <>
          数据源：{source}。Polymarket 的 BTC 涨跌市场以 {chainlink} 结算，
          而 Chainlink 聚合自 Binance、Coinbase、Kraken 等主要交易场所——所以你看到的
          就是机器人交易对手价格的忠实实时近似。
        </>
      ),
      attribution: '图表来自 TradingView',
    },
    bots: {
      eyebrow: '策略阵容',
      headline: '十款策略。一套引擎。',
      description:
        '每款机器人都瞄准一个清晰、独立的市场优势——跟单、套利、做市、链上信号。所有策略共享同一套久经实战的执行核心、风控层与平台无关的适配层。挑一个匹配你判断的优势上场；底层基础设施已经为你搭好了。',
      statusProduction: '生产可用',
      statusDev: '开发中',
      cardCta: '咨询这款机器人',
      cardCtaSuffix: '→ Telegram',
      items: {
        'copy-trading': {
          title: '跟单交易',
          tagline: '自动镜像顶级钱包的交易，仓位规模与风险限制可配置。',
          hook: '把研究外包给已经被证明拥有 alpha 的钱包。',
          description:
            '无需自研、无需盯盘、无需反复纠结——机器人复制，你做复利。近实时跟踪一个或多个高表现钱包，自动镜像其 BUY/SELL 动作。',
          specs: [
            { label: '追踪钱包', value: '多钱包并发' },
            { label: '订单类型', value: 'FAK / GTD' },
            { label: '风控', value: '熔断器 + 深度护卫' },
            { label: '空跑', value: '完整支持' },
          ],
        },
        'btc-arb': {
          title: 'BTC 5 分 / 15 分 / 1 小时套利',
          tagline: '短窗口 BTC 涨跌市场上的速度型策略。',
          hook: '端到端 42ms——你还没读完标题，机器人已经在订单簿里。',
          description:
            '监控 BTC 涨跌窗口。一旦出现定价偏差，机器人会在窗口关闭前以低延迟下达 FAK 订单。人类反应跟不上。',
          specs: [
            { label: '市场', value: 'BTC 涨跌 5m–1hr' },
            { label: '订单类型', value: 'FAK' },
            { label: '执行', value: '~42ms' },
          ],
        },
        'cross-arb': {
          title: '跨平台套利',
          tagline: '真钱订单簿之间的跨平台定价偏差。',
          hook: '锁定的是价差，不是方向。',
          description:
            '在 Polymarket、Kalshi 与 PredictIt 之间严格匹配同一份合约（严格匹配——不制造虚假配对），仅在价差覆盖来回手续费时才捕获。双腿对冲——你的盈亏来自价差本身。',
          specs: [
            { label: '平台', value: 'Polymarket ↔ Kalshi ↔ PredictIt' },
            { label: '价差阈值', value: '≥ 手续费，可配置' },
            { label: '日志', value: '完整盈亏追踪' },
          ],
        },
        'directional-arb': {
          title: '方向性套利',
          tagline: '以套利为底仓，叠加方向性倾斜。',
          hook: '从套利出发，再向更有优势的一侧倾斜。',
          description:
            '当 Up + Down 能以低于 $1 组合时同时买入两侧，再对模型判定被低估的一侧加仓——保留套利底仓的同时让净头寸转为方向性。较小的一侧充当部分对冲。',
          specs: [
            { label: '入场', value: 'Up + Down < $1 组合' },
            { label: '倾斜', value: '最高 3:1 偏向优势侧' },
            { label: '订单', value: '仅限价单' },
          ],
        },
        'spread-farming': {
          title: '价差耕作',
          tagline: '系统化、可重复的微观优势。',
          hook: '一千次 0.5¢ 小胜，复利成一个大数字。',
          description:
            '有纪律、可重复、平淡得恰到好处——穿越所有市场环境的真正优势。挂在价差上，等成交条件齐备，按一致仓位规模执行。',
          specs: [
            { label: '优势', value: '买卖价差' },
            { label: '日志', value: '单笔 + 会话汇总' },
          ],
        },
        sports: {
          title: '体育博彩执行',
          tagline: '实时体育市场上的"点击即下单"速度。',
          hook: '点击。成交。完成——不到 50ms。',
          description:
            '在其他手动玩家还在确认订单时，你已经吃到了让他们破功的盘口移动。实时赔率结合快速 FAK 执行。',
          specs: [
            { label: '运动', value: 'NBA、NFL、足球+' },
            { label: '执行', value: '< 50ms' },
          ],
        },
        'resolution-sniper': {
          title: '结算狙击',
          tagline: '预测市场独有的高胜率、低方差玩法。',
          hook: '95%+ 概率买在 95¢ → 持有到 $1.00 派息。',
          description:
            '任何市场提供过的最接近"白送钱"的玩法——只在预测市场存在。扫描接近确定性的结果，持有至结算。',
          specs: [
            { label: '确定性', value: '可配置' },
            { label: '派息', value: '$1.00 / 股' },
            { label: '平台', value: 'PM · Kalshi · Limitless' },
          ],
        },
        'orderbook-imbalance': {
          title: '订单簿失衡',
          tagline: '纯订单流信号，无需任何外部数据。',
          hook: '不订阅、不接外部源、不依赖会坏的 API。',
          description:
            '信号本身就是订单簿——自给自足、坚不可摧、且无法被抢跑，因为没人能看到和你一样的视角。500ms 刷新的实时 OBI。',
          specs: [
            { label: '信号', value: '仅实时订单簿' },
            { label: '刷新', value: '500ms' },
            { label: '平台', value: 'PM · Kalshi · Limitless' },
          ],
        },
        'market-making': {
          title: '做市商',
          tagline: '在流动性差的预测市场被动赚取价差收入。',
          hook: '当庄家，不当赌客。',
          description:
            '双边挂单，每笔成交都吃价差——与方向无关的收入，随成交量而非运气增长。GTD 订单 + 库存敏感的报价倾斜。',
          specs: [
            { label: '订单管理', value: '成交自动撤 + 重报' },
            { label: '库存', value: '倾斜上限' },
            { label: '平台', value: 'Polymarket · Kalshi' },
          ],
        },
        'whale-signal': {
          title: '链上鲸鱼信号',
          tagline: '最快可能的信号——比仓位 API 快 3–30 秒。',
          hook: '比地球上其他所有跟踪器都快 3–30 秒。',
          description:
            '直接从 Polygon 区块数据获取。你能在公开仓位 API 还没意识到这笔交易存在之前，就看到鲸鱼的下单。区块落地瞬间解码 ABI calldata。',
          specs: [
            { label: '信号源', value: 'Polygon 区块' },
            { label: '领先时间', value: '3–30 秒' },
            { label: '解码', value: 'ABI calldata' },
          ],
        },
      },
    },
    engine: {
      eyebrow: '引擎之下',
      headlineLine1: '用 Rust 构建。',
      headlineLine2: '为预测市场调校。',
      description:
        '建立在 Rust 的保证之上——以及 Tokio 异步运行时所能提供的速度。每个策略共享同一条执行路径、同一套风控钩子、同一个可观测面。',
      features: [
        {
          icon: '🦀',
          title: 'Rust + Tokio',
          body: '交易中没有 GC 停顿。并发执行无数据竞争。没有空指针意外。精简、可预期，压力下稳定。',
        },
        {
          icon: '🔌',
          title: '平台无关适配层',
          body: '一套共享的 API 表面覆盖 Polymarket、Kalshi、Limitless。策略引用 VenueId，不引用平台特有类型。',
        },
        {
          icon: '🖥️',
          title: '实时 TUI',
          body: '基于 ratatui 的终端界面，实时日志流、按级别着色、按机器人状态分屏。',
        },
        {
          icon: '⚙️',
          title: 'FAK 与 GTD 订单',
          body: '即时成交或取消、有效期订单，自动解析市场 ID。并发执行、限速。',
        },
      ],
      performanceEyebrow: '性能',
      performanceHeadline: '当毫秒变成钱时，这些数字就是关键。',
      metrics: [
        { metric: '< 1ms', label: '事件处理' },
        { metric: '< 100ms', label: '下单执行' },
        { metric: '~200ms', label: '仓位轮询' },
        { metric: '~50MB', label: '内存基线' },
        { metric: '< 5%', label: 'CPU 占用' },
        { metric: '25 / 10s', label: '限速（可配置）' },
      ],
    },
    safety: {
      eyebrow: '风控优先',
      headlineLine1: '没有护栏的速度',
      headlineLine2: '只是更贵的亏损。',
      description:
        '每一笔订单在送达交易所之前都要经过四层风控管道。熔断器、深度检查、最小下单额、完整空跑——全部接入每个机器人共享的执行核心。',
      layers: [
        {
          icon: '🛑',
          title: '熔断器',
          body: '在配置窗口内出现 N 笔连续大额成交后自动暂停。从源头阻断连锁反应。',
          accent: 'text-rose-400',
        },
        {
          icon: '🛡️',
          title: '订单簿深度护卫',
          body: '每一笔订单前校验流动性。绝不在薄盘里成交。',
          accent: 'text-amber-400',
        },
        {
          icon: '🧪',
          title: '空跑模式',
          body: '完整执行链路运行但不真正下单。零资金风险下验证信号与仓位。',
          accent: 'text-cyan-400',
        },
        {
          icon: '⚖️',
          title: '最小下单额',
          body: '每一笔订单都强制最小规模。自动过滤负 EV 的微交易。',
          accent: 'text-emerald-400',
        },
      ],
      ladderTitle: '部署阶梯',
      ladderSubtitle: '从零到生产的简短清单。',
      ladder: [
        { stage: '初始部署', action: '用 enable_trading: false 跑完一整轮。' },
        { stage: '首次实盘', action: '信任信号前，copy_percentage 保持在 5–10%。' },
        { stage: '长期运行', action: '关注熔断触发事件——它们会暴露执行异常。' },
        { stage: '生产环境', action: '使用专用钱包，只放你打算部署的资金。' },
      ],
    },
    howItWorks: {
      eyebrow: '工作流程',
      headline: '三步，从仓库到实盘机器人。',
      description:
        '没有黑箱。你运行的就是截图里那套 Rust 引擎——在你自己的机器、你的密钥、你的资金上。',
      steps: [
        { num: '01', title: '挑选你的优势', body: '选择匹配你判断的策略与平台。每款机器人都是共享引擎之上一个清晰、独立的市场优势。' },
        { num: '02', title: '配置并空跑', body: '填入密钥、设置风险上限，用 enable_trading: false 运行，直到你信任信号——零资金风险。' },
        { num: '03', title: '上线实盘', body: '切换到实盘，使用专用钱包和你决定的资金。在实时 TUI 中查看成交、盈亏与熔断状态。' },
      ],
      getTitle: '你将获得',
      gets: [
        '完整 Rust 源代码——MIT 许可，可自由阅读与修改',
        '引导式部署——直接协助你跑通第一个机器人',
        '共享风控层——熔断器、深度护卫、空跑、最小交易额',
        '持续更新——新平台与策略升级随发布同步',
      ],
      note: '源码可得，并提供动手部署支持。访问与报价请在 Telegram 联系。',
      cta: '在 Telegram 获取访问',
    },
    cta: {
      eyebrow: '开始使用',
      headline: '准备好让机器人开始工作了吗？',
      description:
        'Telegram 用于直接对话、需求讨论、或付费部署。GitHub 用于查看开源代码、配置文档、最新提交。Telegram 通常几小时内回复。',
      ctaTelegram: 'Telegram：@HarrierOnChain',
      ctaGithub: '查看代码仓库',
      pillars: [
        { title: '开源', body: 'MIT 许可。读它、Fork 它、在它之上构建。' },
        { title: '持续维护', body: '仓库会定期提交修复与策略升级。' },
        { title: '直接对话', body: '没有工单系统。你直接和写这段代码的人对话。' },
      ],
    },
    footer: {
      productName: 'PnL Profit',
      tagline: 'Polymarket · Kalshi · Limitless',
      disclaimerLabel: '免责声明。',
      disclaimer: ({ flag }) => (
        <>
          {' '}预测市场交易涉及真实的财务风险。本软件按"原样"提供，不附带任何形式的担保或对结果的保证，且不构成投资建议。
          投入真实资金前请务必先以 {flag} 进行测试。请确保遵守各平台的服务条款以及你所在司法管辖区的相关法规。
        </>
      ),
      rights: 'MIT 许可 · 为预测市场社区而构建。',
    },
  },

  ru: {
    langName: { en: 'English', zh: '简体中文', ru: 'Русский' },
    nav: {
      strategies: 'Стратегии',
      managed: 'Сервис',
      venues: 'Площадки',
      engine: 'Движок',
      safety: 'Безопасность',
      blog: 'Блог',
      contact: 'Контакты',
      github: 'GitHub',
      telegram: 'Telegram',
      langSwitch: 'Язык',
    },
    venues: {
      eyebrow: 'Покрытие площадок',
      headline: 'Один движок. Все площадки.',
      description:
        'Движок не зависит от площадки — любая платформа со стаканом заявок или фидом позиций подключается через один адаптер. Семь площадок уже работают в продакшене, ещё две — в бете с живыми рыночными данными; остальная вселенная рынков предсказаний — план, управляемый адаптерами. У каждой площадки свой отдельный репозиторий бота.',
      statusLive: 'Активна',
      statusBeta: 'Бета',
      statusRoadmap: 'В плане',
      betaNote: '🟡 Бета = живые, проверенные ценовые данные, подключённые к движку межплощадочного арбитража; полное исполнение стратегий ещё в тестировании. PredictIt (реальные деньги) и Manifold (сигнал консенсуса на игровые деньги) теперь дают живые цены наряду с Polymarket и Kalshi.',
      groupLive: '🟢 Активны сегодня',
      groupTraditional: 'Традиционные / регулируемые',
      groupCrypto: 'Крипто / децентрализованные',
      cardCta: 'Открыть репозиторий →',
      footnote: 'Хотите приоритет для площадки? Работа над адаптерами определяется спросом — если вы торгуете на платформе, которой ещё нет, она может подняться в очереди.',
      footnoteCta: 'Запросить площадку →',
    },
    managed: {
      eyebrow: 'Управляемый сервис и копи-трейдинг',
      headline: 'Не хотите держать инфраструктуру? Доверьте нам.',
      description:
        'Торгуйте на том же движке как на сервисе. Откройте управляемый счёт, выберите проверенного лидера из ончейн-рейтинга или стратегию, и пусть боты на хостинге работают за вас — вы следите за балансом, P&L и комиссиями на живой панели.',
      statusNote:
        '🧪 Ранний доступ, бета — бумажная торговля (симулированные средства). Уже сегодня можно изучить весь продукт, рейтинг и экономику без риска капитала. Управляемая реальная торговля с настоящими деньгами закрыта списком ожидания и пока не открыта — сначала кастодиан, аудит безопасности и лицензирование.',
      stats: [
        { value: '359+', label: 'звёзд GitHub' },
        { value: '7 (+2 бета)', label: 'активных площадок' },
        { value: '10', label: 'стратегий' },
        { value: 'Бумага', label: 'режим беты' },
      ],
      featuresTitle: 'Что вы получаете',
      features: [
        { icon: '📈', title: 'Ончейн-рейтинг', body: 'Реальные кошельки Polymarket, ранжированные по проверяемому ончейн P&L (прибыль или объём, 1д/7д/30д/всё время). Копирование проверенного трейдера в один клик.' },
        { icon: '🤖', title: 'Управляемые боты стратегий', body: 'Тот же движок из 10 стратегий, запущенный за вас. Без ключей, серверов и эксплуатации.' },
        { icon: '💰', title: 'Межплощадочный арбитраж', body: 'Живые цены на Polymarket ↔ Kalshi ↔ PredictIt, с Manifold как сигналом консенсуса на игровые деньги.' },
        { icon: '🛡️', title: 'Тот же слой безопасности', body: 'Предохранитель, защита глубины, минимум сделки — гардрейлы из открытого движка, применённые к каждому управляемому счёту.' },
      ],
      plansTitle: 'Планы раннего доступа',
      plans: [
        { name: 'Starter', price: 'Бесплатно', fee: 'Без комиссии за результат', forWho: 'Освоить ботов в бумажном режиме, без риска' },
        { name: 'Pro', price: '$49 / мес', fee: '10% (high-water mark)', forWho: 'Боты на хостинге + больше стратегий', highlight: true },
        { name: 'Managed', price: '$199 / мес', fee: '20% (high-water mark)', forWho: 'Полный копи-трейдинг, без рук' },
      ],
      plansNote:
        'Комиссия за результат считается по high-water mark — берётся только с новой прибыли выше прежнего пика, никогда с депозитов или с восстановления просадки. Указанные цены — для раннего доступа и бумажной беты.',
      cta: 'Встать в список раннего доступа',
    },
    hero: {
      badge: 'Управляемый сервис и копи-трейдинг · ранний доступ (бумага)',
      headlineLine1: 'Копируйте тех, кто выигрывает,',
      headlineLine2: 'прибыль на автопилоте.',
      description: ({ polymarket, kalshi, limitless }) => (
        <>
          PnL Profit запускает ботов за вас. Выберите проверенный кошелёк из живого ончейн-рейтинга — или стратегию — и хостинговые боты зеркалят его на {polymarket}, {kalshi} и {limitless}.
          {' '}Копи-трейдинг, межплощадочный арбитраж, маркет-мейкинг — один слой риска, одна панель. Ранний доступ на бумаге.
        </>
      ),
      ctaTelegram: 'Открыть приложение',
      ctaGithub: 'Открыть на GitHub',
      stats: [
        { label: 'Исполнение ордеров', value: '< 100ms', unit: 'end-to-end' },
        { label: 'Обработка событий', value: '< 1ms', unit: 'на событие' },
        { label: 'Базовая память', value: '~50MB', unit: 'резидентно' },
        { label: 'CPU под нагрузкой', value: '< 5%', unit: 'совр. железо' },
      ],
    },
    liveSignal: {
      eyebrow: 'Живой сигнал',
      headline: 'BTC/USDT — рынок, за которым следят боты',
      sub: 'Цена спота в реальном времени, прямо из стакана заявок.',
      statusLive: 'В эфире',
      statusOffline: 'Офлайн',
      statusConnecting: 'Подключение',
      pair: 'BTC / USDT',
      sessionLabel: '· сессия',
      footnote: ({ source, chainlink }) => (
        <>
          Источник: {source}. Рынки BTC Up/Down на Polymarket разрешаются по {chainlink},
          которые агрегируют данные с Binance, Coinbase, Kraken и других крупных площадок — так что
          здесь вы видите достоверное реальное приближение к цене, против которой торгуют боты.
        </>
      ),
      attribution: 'Графики от TradingView',
    },
    bots: {
      eyebrow: 'Состав',
      headline: 'Десять стратегий. Один движок.',
      description:
        'Каждый бот нацелен на отдельное, чётко определённое рыночное преимущество — копи-трейдинг, арбитраж, маркет-мейкинг, ончейн-сигналы. Все используют одно проверенное ядро исполнения, слой риска и стек адаптеров, не зависящий от площадки. Выберите преимущество под свою гипотезу; инфраструктура уже построена.',
      statusProduction: 'Продакшен',
      statusDev: 'В разработке',
      cardCta: 'Обсудить этот бот',
      cardCtaSuffix: '→ Telegram',
      items: {
        'copy-trading': {
          title: 'Копи-трейдинг',
          tagline: 'Автоматически зеркальте топовые кошельки с настраиваемым размером и риск-лимитами.',
          hook: 'Передайте поиск альфы кошелькам, которые уже доказали, что она у них есть.',
          description:
            'Ноль исследований, ноль слежки за графиками, ноль сомнений — бот копирует, вы наращиваете капитал. Отслеживает один или несколько результативных кошельков и зеркалит действия BUY/SELL почти в реальном времени.',
          specs: [
            { label: 'Отслеживаемые кошельки', value: 'Несколько' },
            { label: 'Типы ордеров', value: 'FAK / GTD' },
            { label: 'Риск', value: 'Предохранитель + глубина' },
            { label: 'Dry run', value: 'Полная поддержка' },
          ],
        },
        'btc-arb': {
          title: 'BTC арбитраж 5м / 15м / 1ч',
          tagline: 'Скорость на коротких рынках BTC Up/Down.',
          hook: '42 мс end-to-end — в стакане раньше, чем вы дочитаете заголовок.',
          description:
            'Следит за окнами BTC Up/Down. Как только возникает ценовая неэффективность, бот выставляет низколатентный FAK до закрытия окна. Человеческая реакция тут не конкурент.',
          specs: [
            { label: 'Рынки', value: 'BTC Up/Down 5м–1ч' },
            { label: 'Тип ордера', value: 'FAK' },
            { label: 'Исполнение', value: '~42 мс' },
          ],
        },
        'cross-arb': {
          title: 'Межплощадочный арбитраж',
          tagline: 'Ценовые неэффективности между реально-денежными стаканами.',
          hook: 'Фиксируйте спред, а не направление.',
          description:
            'Один и тот же контракт сопоставляется между Polymarket, Kalshi и PredictIt (строгое сопоставление — без ложных пар), и разрыв захватывается только когда он превышает комиссии на оба конца. Обе ноги хеджированы — ваш P&L и есть ценовой разрыв.',
          specs: [
            { label: 'Площадки', value: 'Polymarket ↔ Kalshi ↔ PredictIt' },
            { label: 'Порог преимущества', value: '≥ комиссий, настраиваемо' },
            { label: 'Логи', value: 'Полный учёт P&L' },
          ],
        },
        'directional-arb': {
          title: 'Направленный арбитраж',
          tagline: 'Арбитражная база с направленным перекосом.',
          hook: 'Начните с арбитража, затем перекос в сторону большего эджа.',
          description:
            'Покупает обе стороны, когда Up + Down собираются дешевле $1, затем наращивает сторону, которую модель считает недооценённой — сохраняя арбитражный пол, пока чистая позиция становится направленной. Меньшая сторона работает как частичный хедж.',
          specs: [
            { label: 'Вход', value: 'Корзина Up + Down < $1' },
            { label: 'Перекос', value: 'До 3:1 в сторону эджа' },
            { label: 'Ордера', value: 'Только лимитные' },
          ],
        },
        'spread-farming': {
          title: 'Сбор спреда',
          tagline: 'Системные, повторяемые микропреимущества.',
          hook: 'Тысяча выигрышей по 0,5¢ складываются в одно большое число.',
          description:
            'Дисциплинированно, повторяемо, скучно в лучшем смысле — преимущество, которое переживает любой рыночный режим. Стоит на спреде, ждёт условий исполнения, торгует с постоянным размером.',
          specs: [
            { label: 'Преимущество', value: 'Спред бид-аск' },
            { label: 'Логи', value: 'По сделке + сессия' },
          ],
        },
        sports: {
          title: 'Исполнение спортивных ставок',
          tagline: 'Скорость «клик-в-ставку» на живых спортивных рынках.',
          hook: 'Клик. Исполнено. Готово — менее 50 мс.',
          description:
            'Опередите движение линии, которое лишает преимущества любого ручного беттера, не успевшего даже подтвердить ордер. Котировки в реальном времени плюс быстрое исполнение FAK.',
          specs: [
            { label: 'Спорт', value: 'NBA, NFL, футбол +' },
            { label: 'Исполнение', value: '< 50 мс' },
          ],
        },
        'resolution-sniper': {
          title: 'Снайпер разрешения',
          tagline: 'Высокий винрейт, низкая дисперсия — уникально для рынков предсказаний.',
          hook: 'Вероятности 95%+ по 95¢ → держите до гарантированной выплаты $1.00.',
          description:
            'Самое близкое к «бесплатным деньгам», что когда-либо предлагал рынок — и этого нет за пределами рынков предсказаний. Сканирует исходы, близкие к определённости, и держит до разрешения.',
          specs: [
            { label: 'Уверенность', value: 'Настраиваемо' },
            { label: 'Выплата', value: '$1.00 / доля' },
            { label: 'Площадки', value: 'PM · Kalshi · Limitless' },
          ],
        },
        'orderbook-imbalance': {
          title: 'Дисбаланс стакана',
          tagline: 'Чистый сигнал потока ордеров, без внешних данных.',
          hook: 'Никаких подписок, внешних фидов и сломанных API.',
          description:
            'Сигнал и есть стакан заявок — самодостаточный, пуленепробиваемый и неперехватываемый, потому что больше никто не видит того, что видите вы. Следит за живым OBI с обновлением 500 мс.',
          specs: [
            { label: 'Сигнал', value: 'Только живой стакан' },
            { label: 'Обновление', value: '500 мс' },
            { label: 'Площадки', value: 'PM · Kalshi · Limitless' },
          ],
        },
        'market-making': {
          title: 'Маркет-мейкинг',
          tagline: 'Пассивный доход со спреда на неликвидных рынках предсказаний.',
          hook: 'Будьте казино, а не игроком.',
          description:
            'Котируйте обе стороны, зарабатывайте спред на каждом исполнении — доход вне зависимости от направления, который растёт с объёмом, а не с удачей. Ордера GTD с перекосом по инвентарю.',
          specs: [
            { label: 'Управление ордерами', value: 'Автоотмена + перекотировка' },
            { label: 'Инвентарь', value: 'Лимиты перекоса' },
            { label: 'Площадки', value: 'Polymarket · Kalshi' },
          ],
        },
        'whale-signal': {
          title: 'Ончейн-сигнал китов',
          tagline: 'Самый быстрый возможный сигнал — на 3–30 с раньше API позиций.',
          hook: 'На 3–30 секунд раньше любого другого трекера на планете.',
          description:
            'Напрямую из блоков Polygon. Вы видите ордер кита раньше, чем публичный API позиций вообще признаёт его существование. ABI calldata декодируется в момент попадания блоков.',
          specs: [
            { label: 'Источник', value: 'Блоки Polygon' },
            { label: 'Опережение', value: '3–30 с' },
            { label: 'Декодирование', value: 'ABI calldata' },
          ],
        },
      },
    },
    engine: {
      eyebrow: 'Под капотом',
      headlineLine1: 'Спроектировано на Rust.',
      headlineLine2: 'Настроено под рынки предсказаний.',
      description:
        'Построено на гарантиях, которые даёт Rust — и скорости, которую делает возможной асинхронный рантайм Tokio. Каждая стратегия использует один путь исполнения, одни риск-хуки, одну поверхность наблюдаемости.',
      features: [
        {
          icon: '🦀',
          title: 'Rust + Tokio',
          body: 'Никаких пауз GC посреди сделки. Никаких гонок данных в параллельном исполнении. Никаких сюрпризов с null. Компактно, предсказуемо, быстро под нагрузкой.',
        },
        {
          icon: '🔌',
          title: 'Адаптеры, не зависящие от площадки',
          body: 'Одна общая поверхность API для Polymarket, Kalshi и Limitless. Стратегии ссылаются на VenueId — а не на типы конкретной платформы.',
        },
        {
          icon: '🖥️',
          title: 'TUI в реальном времени',
          body: 'Терминальный интерфейс на ratatui с живым потоком логов, цветовой кодировкой по уровню и видами статуса по каждому боту.',
        },
        {
          icon: '⚙️',
          title: 'Ордера FAK и GTD',
          body: 'Типы ордеров Fill-or-Kill и Good-Till-Date с автоматическим разрешением ID рынка. Параллельное исполнение с ограничением частоты.',
        },
      ],
      performanceEyebrow: 'Производительность',
      performanceHeadline: 'Числа, которые важны, когда миллисекунды стоят денег.',
      metrics: [
        { metric: '< 1ms', label: 'Обработка событий' },
        { metric: '< 100ms', label: 'Исполнение ордеров' },
        { metric: '~200ms', label: 'Опрос позиций' },
        { metric: '~50MB', label: 'Базовая память' },
        { metric: '< 5%', label: 'Загрузка CPU' },
        { metric: '25 / 10s', label: 'Лимит частоты (настраиваемо)' },
      ],
    },
    safety: {
      eyebrow: 'Дизайн с приоритетом риска',
      headlineLine1: 'Скорость без ограждений —',
      headlineLine2: 'это просто дорогой проигрыш.',
      description:
        'Каждый ордер проходит через четырёхслойный риск-конвейер прежде, чем попасть на биржу. Предохранители, проверки глубины, минимальные размеры и полный dry-run — встроены в то же ядро исполнения, что использует каждый бот.',
      layers: [
        {
          icon: '🛑',
          title: 'Предохранитель',
          body: 'Автостоп после N подряд крупных сделок в настраиваемом скользящем окне. Останавливает каскады до их начала.',
          accent: 'text-rose-400',
        },
        {
          icon: '🛡️',
          title: 'Защита глубины стакана',
          body: 'Проверяет ликвидность перед каждым ордером. Никаких исполнений в тонкий стакан — точка.',
          accent: 'text-amber-400',
        },
        {
          icon: '🧪',
          title: 'Режим Dry Run',
          body: 'Полный путь исполнения работает без реальных ордеров. Проверяйте сигналы и размеры с нулевым капиталом под риском.',
          accent: 'text-cyan-400',
        },
        {
          icon: '⚖️',
          title: 'Минимальный размер сделки',
          body: 'Контроль минимального размера на каждом ордере. Автоматически отсеивает микросделки с отрицательным EV.',
          accent: 'text-emerald-400',
        },
      ],
      ladderTitle: 'Лестница развёртывания',
      ladderSubtitle: 'Короткий чек-лист от нуля до продакшена.',
      ladder: [
        { stage: 'Настройка', action: 'Запустите с enable_trading: false на одну полную сессию.' },
        { stage: 'Первые сделки', action: 'Держите copy_percentage на 5–10%, пока не доверитесь сигналу.' },
        { stage: 'Постоянно', action: 'Следите за срабатываниями предохранителя — они вскрывают аномалии исполнения.' },
        { stage: 'Продакшен', action: 'Используйте выделенный кошелёк только с тем капиталом, который собираетесь задействовать.' },
      ],
    },
    howItWorks: {
      eyebrow: 'Как это работает',
      headline: 'От репозитория до живого бота за три шага.',
      description:
        'Никакого чёрного ящика. Вы запускаете тот же движок на Rust, что на скриншотах — на своей машине, со своими ключами и капиталом.',
      steps: [
        { num: '01', title: 'Выберите преимущество', body: 'Выберите стратегию и площадку под свою гипотезу. Каждый бот — отдельное, чётко определённое рыночное преимущество на общем движке.' },
        { num: '02', title: 'Настройте и dry-run', body: 'Введите ключи, задайте лимиты риска и запустите с enable_trading: false, пока не доверитесь сигналу — ноль капитала под риском.' },
        { num: '03', title: 'Запуск вживую', body: 'Переключитесь на живую торговлю с выделенного кошелька и выбранным капиталом. Следите за исполнениями, P&L и предохранителем в реальном TUI.' },
      ],
      getTitle: 'Что вы получаете',
      gets: [
        'Полный исходный код на Rust — лицензия MIT, читайте и меняйте',
        'Сопровождаемая настройка — прямая помощь с запуском первого бота',
        'Общий слой риска — предохранитель, защита глубины, dry-run, минимум сделки',
        'Постоянные обновления — новые площадки и апгрейды стратегий по мере выхода',
      ],
      note: 'Исходный код доступен, настройка — с поддержкой. Доступ и цены — напишите в Telegram.',
      cta: 'Получить доступ в Telegram',
    },
    cta: {
      eyebrow: 'Начать',
      headline: 'Готовы запустить бота в работу?',
      description:
        'Telegram — для прямого разговора, обсуждения задачи или платной настройки. GitHub — для открытого репозитория, документации по конфигурации и живой кодовой базы. Время ответа в Telegram обычно несколько часов.',
      ctaTelegram: '@HarrierOnChain в Telegram',
      ctaGithub: 'Открыть репозиторий',
      pillars: [
        { title: 'Открытый код', body: 'Лицензия MIT. Читайте код, форкайте, стройте на нём.' },
        { title: 'Активная поддержка', body: 'Репозиторий регулярно выпускает фиксы и апгрейды стратегий.' },
        { title: 'Прямая связь', body: 'Никаких тикетов поддержки. Вы говорите с тем, кто написал бота.' },
      ],
    },
    footer: {
      productName: 'PnL Profit',
      tagline: 'Polymarket · Kalshi · Limitless',
      disclaimerLabel: 'Отказ от ответственности.',
      disclaimer: ({ flag }) => (
        <>
          {' '}Торговля на рынках предсказаний сопряжена с реальным финансовым риском. ПО предоставляется «как есть»,
          без гарантий или обещания какого-либо результата. Это не финансовая консультация. Всегда тестируйте с{' '}
          {flag}{' '}перед вводом реального капитала. Соблюдайте условия использования каждой площадки
          и применимые нормы вашей юрисдикции.
        </>
      ),
      rights: 'Лицензия MIT · Создано для сообщества рынков предсказаний.',
    },
  },
};

// ── Fallback architecture ────────────────────────────────────────────────────
// English is the source of truth. Every other locale is deep-merged over English,
// so any key a translation hasn't filled in yet gracefully shows English rather
// than breaking. Functions (interpolated strings) are never overridden.
const kindOf = (v: unknown) => (Array.isArray(v) ? 'array' : v === null ? 'null' : typeof v);
// Type-guarded deep merge: an override value is only used if it's the SAME shape
// as the English base (same primitive type, or an array of equal length, or an
// object). Any structural drift in a (machine) translation safely falls back to
// English rather than rendering something broken.
function deepMerge<T>(base: T, over: unknown): T {
  if (over === undefined) return base;
  const kb = kindOf(base);
  const ko = kindOf(over);
  if (kb === 'function') return base; // never override interpolated functions
  if (kb !== 'object' && kb !== 'array') return ko === kb ? (over as T) : base;
  if (kb === 'array') {
    const a = base as unknown[];
    const b = over as unknown[];
    if (ko !== 'array' || b.length !== a.length) return base;
    return a.map((x, i) => deepMerge(x, b[i])) as unknown as T;
  }
  if (ko !== 'object') return base;
  const out: Record<string, unknown> = { ...(base as Record<string, unknown>) };
  const o = over as Record<string, unknown>;
  for (const k of Object.keys(out)) if (o[k] !== undefined) out[k] = deepMerge(out[k], o[k]);
  return out as T;
}

// Translation overrides for the additional locales (assembled by the translation
// workflow). Anything omitted or shape-mismatched falls back to English.
const overrides: Partial<Record<Lang, unknown>> = {
  es: {"langName":{"en":"English","zh":"简体中文","ru":"Русский"},"nav":{"strategies":"Estrategias","managed":"Gestionado","venues":"Plataformas","engine":"Motor","safety":"Seguridad","blog":"Blog","contact":"Contacto","github":"GitHub","telegram":"Telegram","langSwitch":"Idioma"},"venues":{"eyebrow":"Cobertura de plataformas","headline":"Un motor. Todas las plataformas.","description":"El motor es agnóstico a la plataforma: cualquier plataforma con libro de órdenes o feed de posiciones se conecta mediante un único adaptador. Hoy hay siete plataformas activas en producción, dos más en beta con datos de mercado en directo, y el resto del universo de los mercados de predicción es una hoja de ruta impulsada por adaptadores. Cada plataforma tiene su propio repositorio de bot dedicado.","statusLive":"Activo","statusBeta":"Beta","statusRoadmap":"Hoja de ruta","betaNote":"🟡 Beta = datos de precios verificados y en directo conectados al motor de arbitraje entre plataformas; la ejecución completa de estrategias aún está en pruebas. PredictIt (dinero real) y Manifold (señal de consenso con dinero ficticio) ya aportan precios en directo junto a Polymarket y Kalshi.","groupLive":"🟢 Activas hoy","groupTraditional":"Tradicionales / Reguladas","groupCrypto":"Cripto / Descentralizadas","cardCta":"Abrir repositorio →","footnote":"¿Quieres que prioricemos una plataforma? El trabajo de adaptadores lo marca la demanda: si operas en una plataforma que aún no está activa, puede subir en la cola.","footnoteCta":"Solicitar una plataforma →"},"managed":{"eyebrow":"Gestionado y copy-trading","headline":"¿No quieres gestionar infraestructura? Lo hacemos nosotros.","description":"Opera con el mismo motor como servicio. Abre una cuenta gestionada, elige a un líder probado del ranking on-chain o una estrategia, y deja que los bots alojados hagan el trabajo: tú vigilas el saldo, el P&L y las comisiones en un panel en directo.","statusNote":"🧪 Beta de acceso anticipado: paper trading (fondos simulados). Explora hoy todo el producto, el ranking y la economía sin arriesgar capital. La operativa gestionada en real con fondos reales requiere lista de espera y aún no está abierta: primero van la custodia, la auditoría de seguridad y las licencias.","stats":[{"value":"359+","label":"Estrellas en GitHub"},{"value":"7 (+2 beta)","label":"Plataformas activas"},{"value":"10","label":"Estrategias"},{"value":"Paper","label":"Modo beta"}],"featuresTitle":"Lo que obtienes","features":[{"icon":"📈","title":"Ranking on-chain","body":"Carteras reales de Polymarket ordenadas por P&L verificable on-chain (beneficio o volumen, 1d/7d/30d/histórico). Copia a un trader probado con un clic."},{"icon":"🤖","title":"Bots de estrategia alojados","body":"El mismo motor de 10 estrategias, ejecutado por ti. Sin claves, sin servidores, sin operaciones."},{"icon":"💰","title":"Arbitraje entre plataformas","body":"Precios en directo entre Polymarket ↔ Kalshi ↔ PredictIt, con Manifold como señal de consenso con dinero ficticio."},{"icon":"🛡️","title":"La misma capa de seguridad","body":"Cortacircuitos, control de profundidad, mínimo de operación: las salvaguardas del motor open source, aplicadas a cada cuenta gestionada."}],"plansTitle":"Planes de acceso anticipado","plans":[{"name":"Starter","price":"Gratis","fee":"Sin comisión de rendimiento","forWho":"Aprende con los bots en modo paper, sin riesgo"},{"name":"Pro","price":"$49 / mes","fee":"10 % (high-water mark)","forWho":"Bots alojados + más estrategias","highlight":true},{"name":"Managed","price":"$199 / mes","fee":"20 % (high-water mark)","forWho":"Copy-trading completo, sin intervención"}],"plansNote":"Las comisiones de rendimiento usan un high-water mark: solo se cobran sobre el beneficio nuevo por encima de tu máximo anterior, nunca sobre depósitos ni al recuperar una caída. Los precios mostrados son de acceso anticipado y beta en paper.","cta":"Únete a la lista de espera de acceso anticipado"},"hero":{"badge":"Gestionado y copy-trading · acceso anticipado en paper","headlineLine1":"Copia a traders probados.","headlineLine2":"Beneficios en piloto automático.","ctaTelegram":"Abrir la app","ctaGithub":"Ver en GitHub","stats":[{"label":"Ejecución de órdenes","value":"< 100ms","unit":"de extremo a extremo"},{"label":"Procesamiento de eventos","value":"< 1ms","unit":"por evento"},{"label":"Memoria base","value":"~50MB","unit":"residente"},{"label":"CPU bajo carga","value":"< 5%","unit":"hardware moderno"}]},"liveSignal":{"eyebrow":"Señal en directo","headline":"BTC/USDT — el mercado que vigilan los bots","sub":"Precio spot en tiempo real, transmitido directamente desde el libro de órdenes.","statusLive":"En directo","statusOffline":"Desconectado","statusConnecting":"Conectando","pair":"BTC / USDT","sessionLabel":"· sesión","attribution":"Gráficos de TradingView"},"bots":{"eyebrow":"El elenco","headline":"Diez estrategias. Un motor.","description":"Cada bot ataca una ventaja de mercado distinta y bien definida: copy-trading, arbitraje, market making, señales on-chain. Todos comparten el mismo núcleo de ejecución probado en combate, la misma capa de riesgo y el mismo stack de adaptadores agnóstico a la plataforma. Elige la ventaja que encaje con tu tesis; la infraestructura ya está construida.","statusProduction":"Producción","statusDev":"En desarrollo","cardCta":"Hablar sobre este bot","cardCtaSuffix":"→ Telegram","items":{"copy-trading":{"title":"Copy Trading","tagline":"Replica las mejores carteras automáticamente con tamaño y límites de riesgo configurables.","hook":"Delega el alfa en carteras que ya demostraron tenerlo.","description":"Cero investigación, cero mirar gráficos, cero dudas: el bot copia, tú capitalizas. Sigue una o varias carteras de alto rendimiento y replica las acciones de COMPRA/VENTA casi en tiempo real.","specs":[{"label":"Carteras seguidas","value":"Múltiples"},{"label":"Tipos de orden","value":"FAK / GTD"},{"label":"Riesgo","value":"Cortacircuitos + profundidad"},{"label":"Simulación","value":"Totalmente compatible"}]},"btc-arb":{"title":"Arbitraje BTC 5m / 15m / 1h","tagline":"Velocidad en mercados BTC Up/Down de ventana corta.","hook":"42ms de extremo a extremo: en el libro de órdenes antes de que termines de leer el título.","description":"Vigila las ventanas BTC Up/Down. Cuando aparece una ineficiencia de precio, el bot coloca una FAK de baja latencia antes de que se cierre la ventana. Los reflejos humanos no compiten aquí.","specs":[{"label":"Mercados","value":"BTC Up/Down 5m–1h"},{"label":"Tipo de orden","value":"FAK"},{"label":"Ejecución","value":"~42ms"}]},"cross-arb":{"title":"Arbitraje entre plataformas","tagline":"Ineficiencias de precio entre plataformas en libros con dinero real.","hook":"Asegura el spread, no la dirección.","description":"El mismo contrato se empareja entre Polymarket, Kalshi y PredictIt (emparejamiento estricto, sin falsos pares), y el diferencial se captura solo cuando supera las comisiones de ida y vuelta. Ambas patas cubiertas: tu P&L es el propio diferencial de precio.","specs":[{"label":"Plataformas","value":"Polymarket ↔ Kalshi ↔ PredictIt"},{"label":"Umbral de ventaja","value":"≥ comisiones, configurable"},{"label":"Registro","value":"Seguimiento completo de P&L"}]},"directional-arb":{"title":"Arbitraje direccional","tagline":"Base de arbitraje con sesgo direccional.","hook":"Parte del arbitraje y luego inclínate hacia el lado con más ventaja.","description":"Compra ambos lados cuando Up + Down se pueden montar por menos de $1, y luego aumenta el lado que el modelo considera infravalorado, manteniendo un suelo de arbitraje mientras la posición neta se vuelve direccional. El lado menor actúa como cobertura parcial.","specs":[{"label":"Entrada","value":"Cesta Up + Down < $1"},{"label":"Sesgo","value":"Hasta 3:1 hacia la ventaja"},{"label":"Órdenes","value":"Solo límite"}]},"spread-farming":{"title":"Spread Farming","tagline":"Micro-ventajas sistemáticas y repetibles.","hook":"Mil victorias de 0,5¢ se capitalizan en una cifra enorme.","description":"Disciplinado, repetible, aburrido en el mejor sentido: el tipo de ventaja que sobrevive a cualquier régimen de mercado. Se sitúa en el spread, espera las condiciones de ejecución y opera con un tamaño constante.","specs":[{"label":"Ventaja","value":"Spread bid-ask"},{"label":"Registro","value":"Por operación + sesión"}]},"sports":{"title":"Ejecución de apuestas deportivas","tagline":"Velocidad de clic a apuesta en mercados deportivos en directo.","hook":"Clic. Ejecutado. Listo, en menos de 50ms.","description":"Adelántate al movimiento de la línea que le cuesta la ventaja a todo apostador manual antes incluso de confirmar la orden. Cuotas en tiempo real combinadas con ejecución FAK rápida.","specs":[{"label":"Deportes","value":"NBA, NFL, fútbol +"},{"label":"Ejecución","value":"< 50ms"}]},"resolution-sniper":{"title":"Resolution Sniper","tagline":"Jugadas de alta tasa de acierto y baja varianza, únicas de los mercados de predicción.","hook":"Probabilidades del 95%+ a 95¢ → aguanta hasta el pago garantizado de $1,00.","description":"Lo más parecido a dinero gratis que jamás haya ofrecido un mercado, y no existe fuera de los mercados de predicción. Rastrea resultados de casi total certeza y los mantiene hasta la resolución.","specs":[{"label":"Certeza","value":"Configurable"},{"label":"Pago","value":"$1,00 / participación"},{"label":"Plataformas","value":"PM · Kalshi · Limitless"}]},"orderbook-imbalance":{"title":"Desequilibrio del libro de órdenes","tagline":"Señal de flujo de órdenes pura, sin datos externos.","hook":"Sin suscripciones, sin feeds externos, sin APIs rotas.","description":"La señal es el libro de órdenes: autónoma, a prueba de balas e imposible de anticipar porque nadie más ve lo que tú ves. Monitoriza el OBI en directo con refresco de 500ms.","specs":[{"label":"Señal","value":"Solo libro de órdenes en directo"},{"label":"Refresco","value":"500ms"},{"label":"Plataformas","value":"PM · Kalshi · Limitless"}]},"market-making":{"title":"Market Making","tagline":"Ingresos pasivos por spread en mercados de predicción poco líquidos.","hook":"Sé la banca, no el apostador.","description":"Cotiza ambos lados y gana el spread en cada ejecución: ingresos agnósticos a la dirección que escalan con el volumen, no con la suerte. Órdenes GTD con sesgo consciente del inventario.","specs":[{"label":"Gestión de órdenes","value":"Autocancelación + recotización"},{"label":"Inventario","value":"Límites de sesgo"},{"label":"Plataformas","value":"Polymarket · Kalshi"}]},"whale-signal":{"title":"Señal on-chain de ballenas","tagline":"La señal más rápida posible: 3–30s por delante de la API de posiciones.","hook":"3–30 segundos por delante de cualquier otro rastreador del planeta.","description":"Directo desde los datos de bloques de Polygon. Ves la orden de la ballena antes de que la API pública de posiciones reconozca siquiera que existe. Calldata ABI decodificada en el instante en que llegan los bloques.","specs":[{"label":"Fuente","value":"Bloques de Polygon"},{"label":"Anticipación","value":"3–30s"},{"label":"Decodificación","value":"Calldata ABI"}]}}},"engine":{"eyebrow":"Bajo el capó","headlineLine1":"Diseñado en Rust.","headlineLine2":"Ajustado para mercados de predicción.","description":"Construido sobre las garantías que te da Rust, y la velocidad que hace posible el runtime asíncrono de Tokio. Cada estrategia comparte la misma ruta de ejecución, los mismos hooks de riesgo y la misma superficie de observabilidad.","features":[{"icon":"🦀","title":"Rust + Tokio","body":"Sin pausas de GC a mitad de operación. Sin condiciones de carrera en la ejecución concurrente. Sin sorpresas de punteros nulos. Ligero, predecible y rápido bajo presión."},{"icon":"🔌","title":"Adaptadores agnósticos a la plataforma","body":"Una superficie de API compartida entre Polymarket, Kalshi y Limitless. Las estrategias referencian VenueId, no tipos específicos de cada plataforma."},{"icon":"🖥️","title":"TUI en tiempo real","body":"Interfaz de terminal impulsada por ratatui con streaming de logs en directo, severidad codificada por colores y vistas de estado por bot."},{"icon":"⚙️","title":"Órdenes FAK y GTD","body":"Tipos de orden Fill-or-Kill y Good-Till-Date con resolución automática del ID de mercado. Ejecución concurrente y con límite de tasa."}],"performanceEyebrow":"Rendimiento","performanceHeadline":"Cifras que importan cuando los milisegundos cuestan dinero.","metrics":[{"metric":"< 1ms","label":"Procesamiento de eventos"},{"metric":"< 100ms","label":"Ejecución de órdenes"},{"metric":"~200ms","label":"Sondeo de posiciones"},{"metric":"~50MB","label":"Memoria base"},{"metric":"< 5%","label":"Uso de CPU"},{"metric":"25 / 10s","label":"Límite de tasa (configurable)"}]},"safety":{"eyebrow":"Diseño con el riesgo primero","headlineLine1":"Velocidad sin salvaguardas","headlineLine2":"es solo perder caro.","description":"Cada orden pasa por una canalización de riesgo de cuatro capas antes de llegar al exchange. Cortacircuitos, comprobaciones de profundidad, mínimos de tamaño y simulación completa, integrados en el mismo núcleo de ejecución que usa cada bot.","layers":[{"icon":"🛑","title":"Cortacircuitos","body":"Se detiene automáticamente tras N operaciones grandes consecutivas dentro de una ventana móvil configurable. Frena las cascadas antes de que empiecen.","accent":"text-rose-400"},{"icon":"🛡️","title":"Control de profundidad del libro","body":"Valida la liquidez antes de cada orden. Nada de ejecutar contra libros finos, punto.","accent":"text-amber-400"},{"icon":"🧪","title":"Modo simulación","body":"La ruta de ejecución completa corre sin colocar órdenes reales. Valida señales y tamaño sin arriesgar capital.","accent":"text-cyan-400"},{"icon":"⚖️","title":"Mínimo de tamaño de operación","body":"Exigencia de tamaño mínimo en cada orden. Filtra automáticamente las micro-operaciones de EV negativo.","accent":"text-emerald-400"}],"ladderTitle":"Escalera de despliegue","ladderSubtitle":"Una breve lista de comprobación para pasar de cero a producción.","ladder":[{"stage":"Configuración","action":"Ejecuta con enable_trading: false durante una sesión completa."},{"stage":"Primeras operaciones","action":"Mantén copy_percentage al 5–10 % hasta que confíes en la señal."},{"stage":"En marcha","action":"Vigila los saltos del cortacircuitos: revelan anomalías de ejecución."},{"stage":"Producción","action":"Usa una cartera dedicada solo con el capital que pretendas desplegar."}]},"howItWorks":{"eyebrow":"Cómo funciona","headline":"Del repositorio a un bot en directo en tres pasos.","description":"Sin caja negra. Ejecutas el mismo motor de Rust que muestran las capturas: en tu máquina, con tus claves, tu capital.","steps":[{"num":"01","title":"Elige tu ventaja","body":"Escoge la estrategia y la plataforma que encajen con tu tesis. Cada bot es una ventaja de mercado distinta y bien definida sobre el motor compartido."},{"num":"02","title":"Configura y simula","body":"Introduce tus claves, define límites de riesgo y ejecuta con enable_trading: false hasta que confíes en la señal, sin arriesgar capital."},{"num":"03","title":"Ponlo en directo","body":"Pasa a real en una cartera dedicada con el capital que elijas. Vigila ejecuciones, P&L y el estado del cortacircuitos desde la TUI en tiempo real."}],"getTitle":"Lo que obtienes","gets":["Código fuente completo en Rust: con licencia MIT, tuyo para leer y modificar","Configuración guiada: ayuda directa para poner en marcha tu primer bot","La capa de riesgo compartida: cortacircuitos, control de profundidad, simulación y mínimo de operación","Actualizaciones continuas: nuevas plataformas y mejoras de estrategia a medida que se publican"],"note":"Código disponible con configuración práctica. Escribe por Telegram para acceso y precios.","cta":"Consigue acceso en Telegram"},"cta":{"eyebrow":"Empieza ya","headline":"¿Listo para poner un bot a trabajar?","description":"Telegram para conversación directa, análisis de alcance o configuración de pago. GitHub para el repositorio open source, la documentación de configuración y el código en vivo. El tiempo de respuesta en Telegram suele ser de unas pocas horas.","ctaTelegram":"@HarrierOnChain en Telegram","ctaGithub":"Explorar el repositorio","pillars":[{"title":"Open source","body":"Con licencia MIT. Lee el código, haz un fork, construye sobre él."},{"title":"Mantenimiento activo","body":"El repositorio publica correcciones y mejoras de estrategia con regularidad."},{"title":"Línea directa","body":"Sin tickets de soporte. Hablas con la persona que escribió el bot."}]},"footer":{"productName":"PnL Profit","tagline":"Polymarket · Kalshi · Limitless","disclaimerLabel":"Aviso legal.","rights":"Con licencia MIT · Creado para la comunidad de los mercados de predicción."}},
  pt: {"langName":{"en":"English","zh":"简体中文","ru":"Русский"},"nav":{"strategies":"Estratégias","managed":"Gerenciado","venues":"Plataformas","engine":"Motor","safety":"Segurança","blog":"Blog","contact":"Contato","github":"GitHub","telegram":"Telegram","langSwitch":"Idioma"},"venues":{"eyebrow":"Cobertura de plataformas","headline":"Um motor. Todas as plataformas.","description":"O motor é agnóstico de plataforma — qualquer plataforma com livro de ofertas ou feed de posições se conecta por um único adaptador. Sete plataformas já estão em produção hoje, mais duas em beta com dados de mercado ao vivo, e o restante do universo de mercados de previsão faz parte do roadmap orientado por adaptadores. Cada plataforma tem seu próprio repositório de bot dedicado.","statusLive":"Ao vivo","statusBeta":"Beta","statusRoadmap":"Roadmap","betaNote":"🟡 Beta = dados de preço ao vivo e verificados conectados ao motor de arbitragem entre plataformas; a execução completa das estratégias ainda está em testes. PredictIt (dinheiro real) e Manifold (sinal de consenso com dinheiro fictício) agora alimentam preços ao vivo junto com Polymarket e Kalshi.","groupLive":"🟢 Ao vivo hoje","groupTraditional":"Tradicional / Regulado","groupCrypto":"Cripto / Descentralizado","cardCta":"Abrir repositório →","footnote":"Quer priorizar uma plataforma? O trabalho de adaptação é guiado pela demanda — se você opera em uma plataforma ainda não disponível, ela pode subir na fila.","footnoteCta":"Solicitar uma plataforma →"},"managed":{"eyebrow":"Gerenciado & Copy-Trading","headline":"Não quer manter infraestrutura? Deixe com a gente.","description":"Opere com o mesmo motor como serviço. Abra uma conta gerenciada, escolha um líder comprovado no ranking on-chain ou uma estratégia, e deixe os bots hospedados operarem — você acompanha saldo, P&L e taxas em um painel ao vivo.","statusNote":"🧪 Beta de acesso antecipado — paper trading (fundos simulados). Explore o produto completo, o ranking e a economia hoje, sem nenhum capital em risco. A operação gerenciada ao vivo com fundos reais está por trás da lista de espera e ainda não está aberta — custódia, auditoria de segurança e licenciamento vêm primeiro.","stats":[{"value":"359+","label":"Estrelas no GitHub"},{"value":"7 (+2 beta)","label":"Plataformas ao vivo"},{"value":"10","label":"Estratégias"},{"value":"Paper","label":"Modo beta"}],"featuresTitle":"O que você ganha","features":[{"icon":"📈","title":"Ranking on-chain","body":"Carteiras reais da Polymarket ranqueadas por P&L on-chain verificável (lucro ou volume, 1d/7d/30d/todo o período). Um clique para copiar um trader comprovado."},{"icon":"🤖","title":"Bots de estratégia hospedados","body":"O mesmo motor de 10 estratégias, operado por você. Sem chaves, sem servidores, sem operação."},{"icon":"💰","title":"Arbitragem entre plataformas","body":"Preços ao vivo entre Polymarket ↔ Kalshi ↔ PredictIt, com Manifold como sinal de consenso em dinheiro fictício."},{"icon":"🛡️","title":"A mesma camada de segurança","body":"Circuit breaker, guarda de profundidade, piso de trade — as proteções do motor open source, aplicadas a cada conta gerenciada."}],"plansTitle":"Planos de acesso antecipado","plans":[{"name":"Starter","price":"Grátis","fee":"Sem taxa de performance","forWho":"Aprenda os bots em modo paper, risco zero"},{"name":"Pro","price":"$49 / mês","fee":"10% (high-water mark)","forWho":"Bots hospedados + mais estratégias","highlight":true},{"name":"Managed","price":"$199 / mês","fee":"20% (high-water mark)","forWho":"Copy-trading completo, sem esforço"}],"plansNote":"As taxas de performance usam high-water mark — cobradas apenas sobre lucro novo acima do seu pico anterior, nunca sobre depósitos ou na recuperação de uma queda. Os preços exibidos são de acesso antecipado e beta em modo paper.","cta":"Entre na lista de espera de acesso antecipado"},"hero":{"badge":"Gerenciado & copy-trading · acesso antecipado em modo paper","headlineLine1":"Copie traders comprovados.","headlineLine2":"Lucro no piloto automático.","ctaTelegram":"Abrir o app","ctaGithub":"Ver no GitHub","stats":[{"label":"Execução de ordens","value":"< 100ms","unit":"ponta a ponta"},{"label":"Processamento de eventos","value":"< 1ms","unit":"por evento"},{"label":"Base de memória","value":"~50MB","unit":"residente"},{"label":"CPU sob carga","value":"< 5%","unit":"hardware moderno"}]},"liveSignal":{"eyebrow":"Sinal ao vivo","headline":"BTC/USDT — o mercado que os bots observam","sub":"Preço spot em tempo real, transmitido direto do livro de ofertas.","statusLive":"Ao vivo","statusOffline":"Offline","statusConnecting":"Conectando","pair":"BTC / USDT","sessionLabel":"· sessão","attribution":"Gráficos por TradingView"},"bots":{"eyebrow":"A seleção","headline":"Dez estratégias. Um motor.","description":"Cada bot mira uma vantagem de mercado distinta e bem definida — copy-trading, arbitragem, market making, sinais on-chain. Todos compartilham o mesmo núcleo de execução testado em batalha, a mesma camada de risco e a mesma stack de adaptadores agnóstica de plataforma. Escolha a vantagem que combina com sua tese; a infraestrutura já está pronta.","statusProduction":"Produção","statusDev":"Em desenvolvimento","cardCta":"Falar sobre este bot","cardCtaSuffix":"→ Telegram","items":{"copy-trading":{"title":"Copy Trading","tagline":"Espelhe as melhores carteiras automaticamente, com sizing e limites de risco configuráveis.","hook":"Terceirize o alpha para carteiras que já provaram tê-lo.","description":"Zero pesquisa, zero acompanhamento de gráficos, zero hesitação — o bot copia, você compõe. Acompanha uma ou mais carteiras de alto desempenho e espelha ações de COMPRA/VENDA em quase tempo real.","specs":[{"label":"Carteiras acompanhadas","value":"Múltiplas"},{"label":"Tipos de ordem","value":"FAK / GTD"},{"label":"Risco","value":"Circuit breaker + profundidade"},{"label":"Dry run","value":"Totalmente suportado"}]},"btc-arb":{"title":"Arbitragem de BTC 5m / 15m / 1h","tagline":"Velocidade em mercados BTC Up/Down de janela curta.","hook":"42ms ponta a ponta — no livro de ofertas antes de você terminar de ler o título.","description":"Observa as janelas BTC Up/Down. Quando surge uma ineficiência de preço, o bot coloca uma FAK de baixa latência antes do fechamento da janela. Reflexos humanos não competem aqui.","specs":[{"label":"Mercados","value":"BTC Up/Down 5m–1h"},{"label":"Tipo de ordem","value":"FAK"},{"label":"Execução","value":"~42ms"}]},"cross-arb":{"title":"Arbitragem entre plataformas","tagline":"Ineficiências de preço entre livros de dinheiro real de diferentes plataformas.","hook":"Trave o spread, não a direção.","description":"O mesmo contrato é pareado entre Polymarket, Kalshi e PredictIt (pareamento estrito — sem pares falsos), e a diferença é capturada apenas quando supera as taxas de ida e volta. Ambas as pernas são hedgeadas — seu P&L é a própria diferença de preço.","specs":[{"label":"Plataformas","value":"Polymarket ↔ Kalshi ↔ PredictIt"},{"label":"Limite de vantagem","value":"≥ taxas, configurável"},{"label":"Registro","value":"Rastreamento completo de P&L"}]},"directional-arb":{"title":"Arbitragem direcional","tagline":"Base de arbitragem com uma inclinação direcional.","hook":"Comece pela arbitragem e depois pese o lado com mais vantagem.","description":"Compra os dois lados quando Up + Down podem ser montados por menos de $1, depois aumenta o lado que o modelo considera subvalorizado — mantendo um piso de arbitragem enquanto a posição líquida fica direcional. O lado menor funciona como hedge parcial.","specs":[{"label":"Entrada","value":"Cesta Up + Down < $1"},{"label":"Inclinação","value":"Até 3:1 rumo à vantagem"},{"label":"Ordens","value":"Somente limit"}]},"spread-farming":{"title":"Spread Farming","tagline":"Micro-vantagens sistemáticas e repetíveis.","hook":"Mil ganhos de 0,5¢ se compõem em um número grande.","description":"Disciplinado, repetível, entediante no melhor sentido — o tipo de vantagem que sobrevive a todo regime de mercado. Fica no spread, espera as condições de execução e opera com sizing consistente.","specs":[{"label":"Vantagem","value":"Spread bid-ask"},{"label":"Registro","value":"Por trade + sessão"}]},"sports":{"title":"Execução de apostas esportivas","tagline":"Velocidade de clique-para-apostar em mercados esportivos ao vivo.","hook":"Clique. Executado. Pronto — em menos de 50ms.","description":"Vença o movimento da linha que custa a vantagem de todo apostador manual antes mesmo de ele confirmar a ordem. Odds em tempo real combinadas com execução FAK rápida.","specs":[{"label":"Esportes","value":"NBA, NFL, Futebol +"},{"label":"Execução","value":"< 50ms"}]},"resolution-sniper":{"title":"Resolution Sniper","tagline":"Jogadas de alta taxa de acerto e baixa variância, exclusivas dos mercados de previsão.","hook":"Probabilidades de 95%+ a 95¢ → siga até o pagamento garantido de $1,00.","description":"O mais próximo de dinheiro de graça que qualquer mercado já ofereceu — e que não existe fora dos mercados de previsão. Busca resultados de quase certeza e mantém até a resolução.","specs":[{"label":"Certeza","value":"Configurável"},{"label":"Pagamento","value":"$1,00 / cota"},{"label":"Plataformas","value":"PM · Kalshi · Limitless"}]},"orderbook-imbalance":{"title":"Desequilíbrio do livro de ofertas","tagline":"Sinal puro de fluxo de ordens, sem necessidade de dados externos.","hook":"Sem assinaturas, sem feeds externos, sem APIs quebradas.","description":"O sinal é o livro de ofertas — autossuficiente, à prova de balas e impossível de antecipar porque ninguém mais vê o que você vê. Monitora o OBI ao vivo com atualização a cada 500ms.","specs":[{"label":"Sinal","value":"Somente livro de ofertas ao vivo"},{"label":"Atualização","value":"500ms"},{"label":"Plataformas","value":"PM · Kalshi · Limitless"}]},"market-making":{"title":"Market Making","tagline":"Renda passiva de spread em mercados de previsão ilíquidos.","hook":"Seja a banca, não o apostador.","description":"Cote os dois lados, ganhe o spread em cada execução — renda agnóstica de direção que escala com o volume, não com a sorte. Ordens GTD com skew consciente de inventário.","specs":[{"label":"Gestão de ordens","value":"Auto-cancelamento + recotação"},{"label":"Inventário","value":"Limites de skew"},{"label":"Plataformas","value":"Polymarket · Kalshi"}]},"whale-signal":{"title":"Sinal de baleias on-chain","tagline":"O sinal mais rápido possível — 3–30s à frente da API de posições.","hook":"3–30 segundos à frente de qualquer outro rastreador do planeta.","description":"Direto dos dados de bloco da Polygon. Você vê a ordem da baleia antes de a API pública de posições sequer reconhecer que ela existe. Calldata da ABI decodificado no instante em que os blocos chegam.","specs":[{"label":"Fonte","value":"Blocos da Polygon"},{"label":"Antecedência","value":"3–30s"},{"label":"Decodificação","value":"Calldata da ABI"}]}}},"engine":{"eyebrow":"Sob o capô","headlineLine1":"Projetado em Rust.","headlineLine2":"Afinado para mercados de previsão.","description":"Construído sobre as garantias que o Rust oferece — e a velocidade que o runtime assíncrono do Tokio torna possível. Toda estratégia compartilha o mesmo caminho de execução, os mesmos hooks de risco, a mesma superfície de observabilidade.","features":[{"icon":"🦀","title":"Rust + Tokio","body":"Sem pausas de GC no meio do trade. Sem data races na execução concorrente. Sem surpresas de ponteiro nulo. Enxuto, previsível, rápido sob pressão."},{"icon":"🔌","title":"Adaptadores agnósticos de plataforma","body":"Uma superfície de API compartilhada entre Polymarket, Kalshi e Limitless. As estratégias referenciam VenueId — não tipos específicos de plataforma."},{"icon":"🖥️","title":"TUI em tempo real","body":"Interface de terminal com ratatui, com streaming de logs ao vivo, severidade codificada por cor e visões de status por bot."},{"icon":"⚙️","title":"Ordens FAK & GTD","body":"Tipos de ordem Fill-or-Kill e Good-Till-Date com resolução automática de ID de mercado. Execução concorrente, com limite de taxa."}],"performanceEyebrow":"Performance","performanceHeadline":"Números que importam quando milissegundos custam dinheiro.","metrics":[{"metric":"< 1ms","label":"Processamento de eventos"},{"metric":"< 100ms","label":"Execução de ordens"},{"metric":"~200ms","label":"Polling de posições"},{"metric":"~50MB","label":"Base de memória"},{"metric":"< 5%","label":"Uso de CPU"},{"metric":"25 / 10s","label":"Limite de taxa (configurável)"}]},"safety":{"eyebrow":"Design com risco em primeiro lugar","headlineLine1":"Velocidade sem proteções","headlineLine2":"é só perder dinheiro caro.","description":"Toda ordem passa por um pipeline de risco de quatro camadas antes de chegar à corretora. Circuit breakers, checagens de profundidade, pisos de tamanho e dry-run completo — integrados ao mesmo núcleo de execução que todo bot usa.","layers":[{"icon":"🛑","title":"Circuit Breaker","body":"Interrompe automaticamente após N trades grandes consecutivos dentro de uma janela móvel configurável. Freia cascatas antes que comecem.","accent":"text-rose-400"},{"icon":"🛡️","title":"Guarda de profundidade do livro","body":"Valida a liquidez antes de cada ordem. Nada de execuções em livros rasos — ponto final.","accent":"text-amber-400"},{"icon":"🧪","title":"Modo Dry Run","body":"O caminho de execução completo roda sem colocar ordens reais. Valide sinais e sizing com zero capital em risco.","accent":"text-cyan-400"},{"icon":"⚖️","title":"Piso de tamanho de trade","body":"Imposição de tamanho mínimo em cada ordem. Filtra automaticamente micro-trades de EV negativo.","accent":"text-emerald-400"}],"ladderTitle":"Escada de implantação","ladderSubtitle":"Um checklist curto para ir do zero à produção.","ladder":[{"stage":"Configuração","action":"Rode com enable_trading: false por uma sessão completa."},{"stage":"Primeiros trades","action":"Mantenha copy_percentage em 5–10% até confiar no sinal."},{"stage":"Contínuo","action":"Observe os disparos do circuit breaker — eles revelam anomalias de execução."},{"stage":"Produção","action":"Use uma carteira dedicada com apenas o capital que você pretende usar."}]},"howItWorks":{"eyebrow":"Como funciona","headline":"Do repositório ao bot ao vivo em três passos.","description":"Sem caixa-preta. Você roda o mesmo motor Rust que aparece nas capturas de tela — na sua máquina, suas chaves, seu capital.","steps":[{"num":"01","title":"Escolha sua vantagem","body":"Escolha a estratégia e a plataforma que combinam com sua tese. Cada bot é uma vantagem de mercado distinta e bem definida sobre o motor compartilhado."},{"num":"02","title":"Configure & dry-run","body":"Insira suas chaves, defina limites de risco e rode com enable_trading: false até confiar no sinal — zero capital em risco."},{"num":"03","title":"Vá ao vivo","body":"Mude para o modo ao vivo em uma carteira dedicada com o capital que você escolher. Acompanhe execuções, P&L e o estado do circuit breaker na TUI em tempo real."}],"getTitle":"O que você ganha","gets":["Código-fonte Rust completo — licença MIT, seu para ler e modificar","Configuração guiada — ajuda direta para colocar seu primeiro bot para rodar","A camada de risco compartilhada — circuit breaker, guarda de profundidade, dry-run, piso de trade","Atualizações contínuas — novas plataformas e melhorias de estratégia conforme são lançadas"],"note":"Código disponível com configuração assistida. Mande mensagem no Telegram para acesso e preços.","cta":"Obtenha acesso no Telegram"},"cta":{"eyebrow":"Comece agora","headline":"Pronto para colocar um bot para trabalhar?","description":"Telegram para conversa direta, discussão de escopo ou configuração paga. GitHub para o repositório open source, a documentação de configuração e o código ao vivo. O tempo de resposta no Telegram costuma ser de algumas horas.","ctaTelegram":"@HarrierOnChain no Telegram","ctaGithub":"Explorar o repositório","pillars":[{"title":"Open source","body":"Licença MIT. Leia o código, faça fork, construa sobre ele."},{"title":"Ativamente mantido","body":"O repositório lança correções e melhorias de estratégia regularmente."},{"title":"Linha direta","body":"Sem tickets de suporte. Você fala com quem escreveu o bot."}]},"footer":{"productName":"PnL Profit","tagline":"Polymarket · Kalshi · Limitless","disclaimerLabel":"Aviso legal.","rights":"Licença MIT · Feito para a comunidade de mercados de previsão."}},
  fr: {"langName":{"en":"English","zh":"简体中文","ru":"Русский"},"nav":{"strategies":"Stratégies","managed":"Géré","venues":"Plateformes","engine":"Moteur","safety":"Sécurité","blog":"Blog","contact":"Contact","github":"GitHub","telegram":"Telegram","langSwitch":"Langue"},"venues":{"eyebrow":"Couverture des plateformes","headline":"Un seul moteur. Toutes les plateformes.","description":"Le moteur est agnostique : toute plateforme dotée d'un carnet d'ordres ou d'un flux de positions se connecte via un adaptateur unique. Sept plateformes sont en production aujourd'hui, deux autres en bêta avec données de marché en direct, et le reste de l'univers des marchés prédictifs constitue une feuille de route pilotée par adaptateurs. Chaque plateforme dispose de son propre dépôt de bot dédié.","statusLive":"En ligne","statusBeta":"Bêta","statusRoadmap":"Feuille de route","betaNote":"🟡 Bêta = données de prix en direct, vérifiées et connectées au moteur d'arbitrage inter-plateformes ; l'exécution complète des stratégies est encore en test. PredictIt (argent réel) et Manifold (signal de consensus en argent fictif) alimentent désormais des prix en direct aux côtés de Polymarket et Kalshi.","groupLive":"🟢 En ligne aujourd'hui","groupTraditional":"Traditionnel / Régulé","groupCrypto":"Crypto / Décentralisé","cardCta":"Ouvrir le dépôt →","footnote":"Vous voulez prioriser une plateforme ? Le travail d'adaptation suit la demande : si vous tradez sur une plateforme pas encore disponible, elle peut remonter dans la file.","footnoteCta":"Demander une plateforme →"},"managed":{"eyebrow":"Gestion & Copy-Trading","headline":"Pas envie de gérer l'infrastructure ? Laissez-nous faire.","description":"Tradez avec le même moteur, en mode service. Ouvrez un compte géré, choisissez un leader éprouvé du classement on-chain ou une stratégie, et laissez tourner les bots hébergés : vous suivez solde, P&L et frais sur un tableau de bord en direct.","statusNote":"🧪 Bêta en accès anticipé — trading sur papier (fonds simulés). Explorez tout le produit, le classement et l'économie dès aujourd'hui, sans aucun capital à risque. Le trading géré en réel avec de vrais fonds est réservé à la liste d'attente et pas encore ouvert : custody, audit de sécurité et conformité d'abord.","stats":[{"value":"359+","label":"Étoiles GitHub"},{"value":"7 (+2 beta)","label":"Plateformes en ligne"},{"value":"10","label":"Stratégies"},{"value":"Paper","label":"Mode bêta"}],"featuresTitle":"Ce que vous obtenez","features":[{"icon":"📈","title":"Classement on-chain","body":"De vrais wallets Polymarket classés selon un P&L on-chain vérifiable (profit ou volume, 1j/7j/30j/all-time). Un clic pour copier un trader éprouvé."},{"icon":"🤖","title":"Bots de stratégie hébergés","body":"Le même moteur à 10 stratégies, exécuté pour vous. Pas de clés, pas de serveurs, pas d'ops."},{"icon":"💰","title":"Arbitrage inter-plateformes","body":"Prix en direct sur Polymarket ↔ Kalshi ↔ PredictIt, avec Manifold comme signal de consensus en argent fictif."},{"icon":"🛡️","title":"La même couche de sécurité","body":"Coupe-circuit, garde de profondeur, plancher de trade — les garde-fous du moteur open source, appliqués à chaque compte géré."}],"plansTitle":"Offres en accès anticipé","plans":[{"name":"Starter","price":"Free","fee":"Aucune commission de performance","forWho":"Apprivoisez les bots en mode papier, sans risque"},{"name":"Pro","price":"$49 / mo","fee":"10 % (high-water mark)","forWho":"Bots hébergés + plus de stratégies","highlight":true},{"name":"Managed","price":"$199 / mo","fee":"20 % (high-water mark)","forWho":"Copy-trading complet, sans intervention"}],"plansNote":"Les commissions de performance reposent sur un high-water mark : prélevées uniquement sur les nouveaux profits au-dessus de votre pic précédent, jamais sur les dépôts ni sur la récupération d'une perte. Les tarifs affichés sont ceux de l'accès anticipé et de la bêta papier.","cta":"Rejoindre la liste d'attente en accès anticipé"},"hero":{"badge":"Gestion & copy-trading · accès anticipé papier","headlineLine1":"Copiez des traders éprouvés.","headlineLine2":"Le profit en pilote automatique.","ctaTelegram":"Ouvrir l'application","ctaGithub":"Voir sur GitHub","stats":[{"label":"Exécution des ordres","value":"< 100ms","unit":"bout en bout"},{"label":"Traitement des événements","value":"< 1ms","unit":"par événement"},{"label":"Empreinte mémoire","value":"~50MB","unit":"résident"},{"label":"CPU en charge","value":"< 5%","unit":"matériel récent"}]},"liveSignal":{"eyebrow":"Signal en direct","headline":"BTC/USDT — le marché que les bots surveillent","sub":"Prix spot en temps réel, diffusé directement depuis le carnet d'ordres.","statusLive":"En ligne","statusOffline":"Hors ligne","statusConnecting":"Connexion","pair":"BTC / USDT","sessionLabel":"· session","attribution":"Graphiques par TradingView"},"bots":{"eyebrow":"L'alignement","headline":"Dix stratégies. Un seul moteur.","description":"Chaque bot vise un avantage de marché distinct et bien défini — copy-trading, arbitrage, market making, signaux on-chain. Tous partagent le même cœur d'exécution éprouvé, la même couche de risque et la même pile d'adaptateurs agnostiques. Choisissez l'avantage qui colle à votre thèse ; l'infrastructure est déjà en place.","statusProduction":"Production","statusDev":"En dev","cardCta":"Discuter de ce bot","cardCtaSuffix":"→ Telegram","items":{"copy-trading":{"title":"Copy Trading","tagline":"Reproduisez automatiquement les meilleurs wallets, avec dimensionnement et limites de risque configurables.","hook":"Déléguez l'alpha à des wallets qui ont déjà prouvé qu'ils en avaient.","description":"Zéro recherche, zéro surveillance de graphiques, zéro hésitation — le bot copie, vous capitalisez. Il suit un ou plusieurs wallets performants et reproduit les actions ACHAT/VENTE en quasi temps réel.","specs":[{"label":"Wallets suivis","value":"Plusieurs"},{"label":"Types d'ordre","value":"FAK / GTD"},{"label":"Risque","value":"Coupe-circuit + profondeur"},{"label":"Dry run","value":"Entièrement pris en charge"}]},"btc-arb":{"title":"BTC 5m / 15m / 1hr Arbitrage","tagline":"La vitesse sur les marchés BTC Up/Down à courte fenêtre.","hook":"42ms bout en bout — dans le carnet d'ordres avant même d'avoir fini de lire le titre.","description":"Surveille les fenêtres BTC Up/Down. Dès qu'une inefficience de prix apparaît, le bot place un FAK à faible latence avant la clôture de la fenêtre. Les réflexes humains ne font pas le poids.","specs":[{"label":"Marchés","value":"BTC Up/Down 5m–1hr"},{"label":"Type d'ordre","value":"FAK"},{"label":"Exécution","value":"~42ms"}]},"cross-arb":{"title":"Cross-Venue Arbitrage","tagline":"Inefficiences de prix inter-plateformes sur les carnets en argent réel.","hook":"Verrouillez le spread, pas la direction.","description":"Le même contrat est apparié entre Polymarket, Kalshi et PredictIt (appariement strict — aucune fausse paire), et l'écart n'est capté que lorsqu'il dépasse les frais aller-retour. Les deux jambes sont couvertes — votre P&L, c'est l'écart de prix lui-même.","specs":[{"label":"Plateformes","value":"Polymarket ↔ Kalshi ↔ PredictIt"},{"label":"Seuil d'avantage","value":"≥ frais, configurable"},{"label":"Journalisation","value":"Suivi complet du P&L"}]},"directional-arb":{"title":"Directional Arbitrage","tagline":"Une base d'arbitrage avec un biais directionnel.","hook":"Partez de l'arbitrage, puis penchez vers le côté qui a le plus d'avantage.","description":"Achète les deux côtés quand Up + Down peuvent être assemblés pour moins de 1 $, puis renforce le côté que le modèle juge sous-évalué — en gardant un plancher d'arbitrage tandis que la position nette devient directionnelle. Le côté plus petit sert de couverture partielle.","specs":[{"label":"Entrée","value":"Panier Up + Down < $1"},{"label":"Inclinaison","value":"Jusqu'à 3:1 vers l'avantage"},{"label":"Ordres","value":"Ordres limités uniquement"}]},"spread-farming":{"title":"Spread Farming","tagline":"Des micro-avantages systématiques et répétables.","hook":"Mille gains de 0,5¢ finissent par composer un grand nombre.","description":"Discipliné, répétable, ennuyeux dans le bon sens — le type d'avantage qui survit à tous les régimes de marché. Se poste sur le spread, attend les conditions de remplissage, exécute avec un dimensionnement constant.","specs":[{"label":"Avantage","value":"Spread bid-ask"},{"label":"Journalisation","value":"Par trade + session"}]},"sports":{"title":"Sports Betting Execution","tagline":"Vitesse click-to-bet sur les marchés sportifs en direct.","hook":"Clic. Rempli. Terminé — en moins de 50ms.","description":"Devancez le mouvement de cote qui fait perdre son avantage à tout parieur manuel avant même qu'il n'ait confirmé l'ordre. Cotes en temps réel combinées à une exécution FAK rapide.","specs":[{"label":"Sports","value":"NBA, NFL, Soccer +"},{"label":"Exécution","value":"< 50ms"}]},"resolution-sniper":{"title":"Resolution Sniper","tagline":"Des paris à fort taux de réussite et faible variance, propres aux marchés prédictifs.","hook":"Probabilités de 95 %+ à 95¢ → jusqu'au paiement garanti de 1,00 $.","description":"Ce qui se rapproche le plus de l'argent gratuit qu'un marché ait jamais offert — et cela n'existe nulle part ailleurs que sur les marchés prédictifs. Repère les issues quasi certaines et les conserve jusqu'à résolution.","specs":[{"label":"Certitude","value":"Configurable"},{"label":"Paiement","value":"$1.00 / part"},{"label":"Plateformes","value":"PM · Kalshi · Limitless"}]},"orderbook-imbalance":{"title":"Orderbook Imbalance","tagline":"Signal de flux d'ordres pur, aucune donnée externe requise.","hook":"Pas d'abonnements, pas de flux externes, pas d'API cassées.","description":"Le signal, c'est le carnet d'ordres — autonome, à toute épreuve et impossible à devancer puisque personne d'autre ne voit ce que vous voyez. Surveille l'OBI en direct avec un rafraîchissement de 500ms.","specs":[{"label":"Signal","value":"Carnet d'ordres en direct uniquement"},{"label":"Rafraîchissement","value":"500ms"},{"label":"Plateformes","value":"PM · Kalshi · Limitless"}]},"market-making":{"title":"Market Making","tagline":"Revenu passif de spread sur les marchés prédictifs peu liquides.","hook":"Soyez la banque, pas le joueur.","description":"Cotez les deux côtés, gagnez le spread à chaque remplissage — un revenu agnostique à la direction qui grandit avec le volume, pas avec la chance. Ordres GTD avec skew tenant compte de l'inventaire.","specs":[{"label":"Gestion d'ordres","value":"Annulation auto + recotation"},{"label":"Inventaire","value":"Limites de skew"},{"label":"Plateformes","value":"Polymarket · Kalshi"}]},"whale-signal":{"title":"On-Chain Whale Signal","tagline":"Le signal le plus rapide possible — 3 à 30s d'avance sur l'API des positions.","hook":"3 à 30 secondes d'avance sur tous les autres trackers de la planète.","description":"Directement depuis les données de blocs Polygon. Vous voyez l'ordre de la baleine avant même que l'API publique des positions n'en reconnaisse l'existence. Calldata ABI décodé à l'instant où les blocs arrivent.","specs":[{"label":"Source","value":"Blocs Polygon"},{"label":"Délai d'avance","value":"3–30s"},{"label":"Décodage","value":"Calldata ABI"}]}}},"engine":{"eyebrow":"Sous le capot","headlineLine1":"Conçu en Rust.","headlineLine2":"Réglé pour les marchés prédictifs.","description":"Bâti sur les garanties qu'offre Rust — et la vitesse que rend possible le runtime asynchrone de Tokio. Chaque stratégie partage le même chemin d'exécution, les mêmes hooks de risque, la même surface d'observabilité.","features":[{"icon":"🦀","title":"Rust + Tokio","body":"Pas de pauses GC en plein trade. Pas de data races en exécution concurrente. Pas de surprises de pointeur nul. Léger, prévisible, rapide sous pression."},{"icon":"🔌","title":"Adaptateurs agnostiques","body":"Une surface d'API commune à Polymarket, Kalshi et Limitless. Les stratégies référencent VenueId — pas des types propres à chaque plateforme."},{"icon":"🖥️","title":"TUI en temps réel","body":"Interface terminal propulsée par ratatui, avec streaming des logs en direct, gravité codée par couleur et vues d'état par bot."},{"icon":"⚙️","title":"Ordres FAK & GTD","body":"Types d'ordre Fill-or-Kill et Good-Till-Date avec résolution automatique de l'ID de marché. Exécution concurrente, à débit limité."}],"performanceEyebrow":"Performance","performanceHeadline":"Des chiffres qui comptent quand la milliseconde coûte de l'argent.","metrics":[{"metric":"< 1ms","label":"Traitement des événements"},{"metric":"< 100ms","label":"Exécution des ordres"},{"metric":"~200ms","label":"Polling des positions"},{"metric":"~50MB","label":"Empreinte mémoire"},{"metric":"< 5%","label":"Utilisation CPU"},{"metric":"25 / 10s","label":"Limite de débit (configurable)"}]},"safety":{"eyebrow":"Conception axée risque","headlineLine1":"La vitesse sans garde-fous,","headlineLine2":"ce n'est que perdre cher.","description":"Chaque ordre traverse un pipeline de risque à quatre couches avant d'atteindre l'exchange. Coupe-circuits, contrôles de profondeur, planchers de taille et dry-run complet — câblés dans le même cœur d'exécution qu'utilise chaque bot.","layers":[{"icon":"🛑","title":"Coupe-circuit","body":"Arrêt automatique après N gros trades consécutifs dans une fenêtre glissante configurable. Stoppe les cascades avant qu'elles ne démarrent.","accent":"text-rose-400"},{"icon":"🛡️","title":"Garde de profondeur du carnet","body":"Valide la liquidité avant chaque ordre. Aucun remplissage dans un carnet peu profond — point.","accent":"text-amber-400"},{"icon":"🧪","title":"Mode Dry Run","body":"Le chemin d'exécution complet tourne sans passer de vrais ordres. Validez signaux et dimensionnement sans aucun capital à risque.","accent":"text-cyan-400"},{"icon":"⚖️","title":"Plancher de taille de trade","body":"Taille minimale imposée à chaque ordre. Filtre automatiquement les micro-trades à EV négative.","accent":"text-emerald-400"}],"ladderTitle":"Échelle de déploiement","ladderSubtitle":"Une courte checklist pour passer de zéro à la production.","ladder":[{"stage":"Installation","action":"Lancez avec enable_trading: false pendant une session complète."},{"stage":"Premiers trades","action":"Gardez copy_percentage entre 5 et 10 % jusqu'à ce que vous ayez confiance dans le signal."},{"stage":"En continu","action":"Surveillez les déclenchements du coupe-circuit — ils révèlent les anomalies d'exécution."},{"stage":"Production","action":"Utilisez un wallet dédié, avec uniquement le capital que vous comptez déployer."}]},"howItWorks":{"eyebrow":"Comment ça marche","headline":"Du dépôt au bot en direct, en trois étapes.","description":"Aucune boîte noire. Vous exécutez le même moteur Rust que montrent les captures — sur votre machine, avec vos clés, votre capital.","steps":[{"num":"01","title":"Choisissez votre avantage","body":"Sélectionnez la stratégie et la plateforme qui collent à votre thèse. Chaque bot est un avantage de marché distinct et bien défini sur le moteur commun."},{"num":"02","title":"Configurez & testez en dry-run","body":"Insérez vos clés, fixez les limites de risque et lancez avec enable_trading: false jusqu'à ce que vous ayez confiance dans le signal — sans aucun capital à risque."},{"num":"03","title":"Passez en direct","body":"Basculez en réel sur un wallet dédié avec le capital de votre choix. Suivez remplissages, P&L et état du coupe-circuit depuis la TUI en temps réel."}],"getTitle":"Ce que vous obtenez","gets":["Le code source Rust complet — sous licence MIT, à lire et modifier à volonté","Une installation guidée — une aide directe pour lancer votre premier bot","La couche de risque partagée — coupe-circuit, garde de profondeur, dry-run, plancher de trade","Des mises à jour continues — nouvelles plateformes et améliorations de stratégies au fil des livraisons"],"note":"Source disponible avec installation accompagnée. Écrivez sur Telegram pour l'accès et les tarifs.","cta":"Obtenir l'accès sur Telegram"},"cta":{"eyebrow":"Commencer","headline":"Prêt à mettre un bot au travail ?","description":"Telegram pour un échange direct, discuter du périmètre ou une installation payante. GitHub pour le dépôt open source, la documentation de configuration et le code en direct. Le temps de réponse sur Telegram est généralement de quelques heures.","ctaTelegram":"@HarrierOnChain sur Telegram","ctaGithub":"Parcourir le dépôt","pillars":[{"title":"Open source","body":"Sous licence MIT. Lisez le code, forkez-le, construisez dessus."},{"title":"Activement maintenu","body":"Le dépôt livre régulièrement correctifs et améliorations de stratégies."},{"title":"Ligne directe","body":"Pas de tickets de support. Vous parlez à la personne qui a écrit le bot."}]},"footer":{"productName":"PnL Profit","tagline":"Polymarket · Kalshi · Limitless","disclaimerLabel":"Avertissement.","rights":"Sous licence MIT · Conçu pour la communauté des marchés prédictifs."}},
  de: {"langName":{"en":"English","zh":"简体中文","ru":"Русский"},"nav":{"strategies":"Strategien","managed":"Verwaltet","venues":"Handelsplätze","engine":"Engine","safety":"Sicherheit","blog":"Blog","contact":"Kontakt","github":"GitHub","telegram":"Telegram","langSwitch":"Sprache"},"venues":{"eyebrow":"Handelsplatz-Abdeckung","headline":"Eine Engine. Jeder Handelsplatz.","description":"Die Engine ist plattformunabhängig — jede Plattform mit Orderbuch oder Positions-Feed wird über einen einzigen Adapter angebunden. Sieben Handelsplätze laufen heute produktiv, zwei weitere sind in der Beta mit Live-Marktdaten, und der Rest des Prognosemarkt-Universums ist adaptergetriebene Roadmap. Jeder Handelsplatz hat sein eigenes dediziertes Bot-Repo.","statusLive":"Live","statusBeta":"Beta","statusRoadmap":"Roadmap","betaNote":"🟡 Beta = live, verifizierte Preisdaten sind in die venueübergreifende Arbitrage-Engine eingebunden; die vollständige Strategieausführung wird noch getestet. PredictIt (Echtgeld) und Manifold (Spielgeld-Konsenssignal) liefern jetzt Live-Preise neben Polymarket und Kalshi.","groupLive":"🟢 Heute live","groupTraditional":"Traditionell / Reguliert","groupCrypto":"Krypto / Dezentralisiert","cardCta":"Repo öffnen →","footnote":"Einen Handelsplatz priorisieren? Adapter-Arbeit richtet sich nach der Nachfrage — wenn du auf einer noch nicht live geschalteten Plattform handelst, kann sie in der Warteschlange nach vorn rücken.","footnoteCta":"Handelsplatz anfragen →"},"managed":{"eyebrow":"Verwaltet & Copy-Trading","headline":"Keine Lust, Infrastruktur zu betreiben? Überlass es uns.","description":"Handle mit derselben Engine als Service. Eröffne ein verwaltetes Konto, wähle einen bewährten Leader aus dem On-Chain-Leaderboard oder eine Strategie, und lass die gehosteten Bots laufen — du beobachtest Kontostand, P&L und Gebühren auf einem Live-Dashboard.","statusNote":"🧪 Early-Access-Beta — Paper-Trading (simulierte Mittel). Erkunde heute das gesamte Produkt, das Leaderboard und die Ökonomie ohne jedes Kapitalrisiko. Verwaltetes Live-Trading mit echten Mitteln ist über die Warteliste gesperrt und noch nicht offen — Verwahrung, Sicherheitsaudit und Lizenzierung kommen zuerst.","stats":[{"value":"359+","label":"GitHub-Sterne"},{"value":"7 (+2 beta)","label":"Live-Handelsplätze"},{"value":"10","label":"Strategien"},{"value":"Paper","label":"Beta-Modus"}],"featuresTitle":"Das bekommst du","features":[{"icon":"📈","title":"On-Chain-Leaderboard","body":"Echte Polymarket-Wallets, gerankt nach verifizierbarem On-Chain-P&L (Profit oder Volumen, 1T/7T/30T/gesamt). Ein Klick, um einem bewährten Trader zu folgen."},{"icon":"🤖","title":"Gehostete Strategie-Bots","body":"Dieselbe 10-Strategien-Engine, für dich betrieben. Keine Keys, keine Server, kein Betrieb."},{"icon":"💰","title":"Venueübergreifende Arbitrage","body":"Live-Preise über Polymarket ↔ Kalshi ↔ PredictIt, mit Manifold als Spielgeld-Konsenssignal."},{"icon":"🛡️","title":"Dieselbe Sicherheitsschicht","body":"Circuit Breaker, Tiefen-Guard, Trade-Floor — die Schutzmechanismen der Open-Source-Engine, angewandt auf jedes verwaltete Konto."}],"plansTitle":"Early-Access-Tarife","plans":[{"name":"Starter","price":"Free","fee":"Keine Performance-Gebühr","forWho":"Lerne die Bots im Paper-Modus kennen, ohne Risiko"},{"name":"Pro","price":"$49 / mo","fee":"10 % (High-Water-Mark)","forWho":"Gehostete Bots + mehr Strategien","highlight":true},{"name":"Managed","price":"$199 / mo","fee":"20 % (High-Water-Mark)","forWho":"Vollständiges Copy-Trading, ohne Aufwand"}],"plansNote":"Performance-Gebühren nutzen eine High-Water-Mark — sie fallen nur auf neuen Gewinn über deinem bisherigen Höchststand an, niemals auf Einzahlungen oder das Aufholen eines Verlusts. Die gezeigten Preise gelten für Early-Access und Paper-Beta.","cta":"Der Early-Access-Warteliste beitreten"},"hero":{"badge":"Verwaltet & Copy-Trading · Paper Early Access","headlineLine1":"Kopiere bewährte Trader.","headlineLine2":"Profit auf Autopilot.","ctaTelegram":"App öffnen","ctaGithub":"Auf GitHub ansehen","stats":[{"label":"Orderausführung","value":"< 100ms","unit":"end-to-end"},{"label":"Event-Verarbeitung","value":"< 1ms","unit":"pro Event"},{"label":"Speicher-Baseline","value":"~50MB","unit":"resident"},{"label":"CPU unter Last","value":"< 5%","unit":"moderne Hardware"}]},"liveSignal":{"eyebrow":"Live-Signal","headline":"BTC/USDT — der Markt, den die Bots beobachten","sub":"Echtzeit-Spot-Preis, direkt aus dem Orderbuch gestreamt.","statusLive":"Live","statusOffline":"Offline","statusConnecting":"Verbinde","pair":"BTC / USDT","sessionLabel":"· Session","attribution":"Charts von TradingView"},"bots":{"eyebrow":"Das Aufgebot","headline":"Zehn Strategien. Eine Engine.","description":"Jeder Bot zielt auf einen eigenen, klar definierten Marktvorteil — Copy-Trading, Arbitrage, Market Making, On-Chain-Signale. Alle teilen denselben praxiserprobten Ausführungskern, dieselbe Risikoschicht und denselben plattformunabhängigen Adapter-Stack. Wähle den Vorteil, der zu deiner These passt; die Infrastruktur steht bereits.","statusProduction":"Produktion","statusDev":"In Entwicklung","cardCta":"Diesen Bot besprechen","cardCtaSuffix":"→ Telegram","items":{"copy-trading":{"title":"Copy Trading","tagline":"Spiegle Top-Wallets automatisch mit konfigurierbarer Positionsgröße und Risikolimits.","hook":"Lagere Alpha an Wallets aus, die es bereits bewiesen haben.","description":"Keine Recherche, kein Chart-Starren, kein Zweifeln — der Bot kopiert, du lässt es wachsen. Verfolgt eine oder mehrere leistungsstarke Wallets und spiegelt BUY/SELL-Aktionen nahezu in Echtzeit.","specs":[{"label":"Verfolgte Wallets","value":"Mehrere"},{"label":"Order-Typen","value":"FAK / GTD"},{"label":"Risiko","value":"Circuit Breaker + Tiefe"},{"label":"Dry Run","value":"Voll unterstützt"}]},"btc-arb":{"title":"BTC 5m / 15m / 1hr Arbitrage","tagline":"Tempo auf BTC-Up/Down-Märkten mit kurzem Fenster.","hook":"42ms end-to-end — im Orderbuch, bevor du den Titel zu Ende gelesen hast.","description":"Beobachtet BTC-Up/Down-Fenster. Sobald eine Preisineffizienz auftaucht, platziert der Bot eine latenzarme FAK, bevor das Fenster schließt. Menschliche Reflexe haben hier keine Chance.","specs":[{"label":"Märkte","value":"BTC Up/Down 5m–1hr"},{"label":"Order-Typ","value":"FAK"},{"label":"Ausführung","value":"~42ms"}]},"cross-arb":{"title":"Cross-Venue Arbitrage","tagline":"Venueübergreifende Preisineffizienzen über Echtgeld-Orderbücher.","hook":"Sichere den Spread, nicht die Richtung.","description":"Derselbe Kontrakt wird über Polymarket, Kalshi und PredictIt abgeglichen (striktes Matching — keine falschen Paare), und die Lücke wird nur dann vereinnahmt, wenn sie die Round-Trip-Gebühren übertrifft. Beide Legs gehedgt — dein P&L ist die Preislücke selbst.","specs":[{"label":"Handelsplätze","value":"Polymarket ↔ Kalshi ↔ PredictIt"},{"label":"Vorteilsschwelle","value":"≥ Gebühren, konfigurierbar"},{"label":"Logging","value":"Vollständiges P&L-Tracking"}]},"directional-arb":{"title":"Directional Arbitrage","tagline":"Arbitrage-Basis mit direktionaler Neigung.","hook":"Starte mit Arbitrage, lehne dich dann in die Seite mit mehr Vorteil.","description":"Kauft beide Seiten, wenn Up + Down für unter $1 zusammengestellt werden können, und stockt dann die Seite auf, die das Modell als unterbewertet einschätzt — mit einem Arbitrage-Floor als Basis, während die Nettoposition direktional wird. Die kleinere Seite wirkt als Teil-Hedge.","specs":[{"label":"Einstieg","value":"Up + Down < $1 Korb"},{"label":"Neigung","value":"Bis zu 3:1 zum Vorteil"},{"label":"Orders","value":"Nur Limit"}]},"spread-farming":{"title":"Spread Farming","tagline":"Systematische, wiederholbare Mikro-Vorteile.","hook":"Tausend 0,5¢-Gewinne summieren sich zu einer großen Zahl.","description":"Diszipliniert, wiederholbar, langweilig im besten Sinne — die Art von Vorteil, die jedes Marktregime übersteht. Sitzt am Spread, wartet auf Fill-Bedingungen und führt mit konsistenter Positionsgröße aus.","specs":[{"label":"Vorteil","value":"Bid-Ask-Spread"},{"label":"Logging","value":"Pro Trade + Session"}]},"sports":{"title":"Sports Betting Execution","tagline":"Click-to-Bet-Tempo auf Live-Sportmärkten.","hook":"Klick. Gefüllt. Fertig — in unter 50ms.","description":"Schlage die Kursbewegung, die jedem anderen manuellen Wetter seinen Vorteil kostet, bevor er die Order überhaupt bestätigt hat. Echtzeit-Quoten kombiniert mit schneller FAK-Ausführung.","specs":[{"label":"Sportarten","value":"NBA, NFL, Fußball +"},{"label":"Ausführung","value":"< 50ms"}]},"resolution-sniper":{"title":"Resolution Sniper","tagline":"Trades mit hoher Trefferquote und geringer Varianz, einzigartig für Prognosemärkte.","hook":"95 %+ Wahrscheinlichkeiten bei 95¢ → reite bis zur garantierten $1,00-Auszahlung.","description":"Das Nächste an freiem Geld, das je ein Markt geboten hat — und das es außerhalb von Prognosemärkten nicht gibt. Scannt nach Beinahe-Gewissheiten und hält bis zur Auflösung.","specs":[{"label":"Gewissheit","value":"Konfigurierbar"},{"label":"Auszahlung","value":"$1.00 / Share"},{"label":"Handelsplätze","value":"PM · Kalshi · Limitless"}]},"orderbook-imbalance":{"title":"Orderbook Imbalance","tagline":"Reines Order-Flow-Signal, keine externen Daten nötig.","hook":"Keine Abos, keine externen Feeds, keine kaputten APIs.","description":"Das Signal ist das Orderbuch — in sich geschlossen, kugelsicher und unmöglich zu front-runnen, weil niemand sonst sieht, was du siehst. Überwacht Live-OBI mit 500ms-Aktualisierung.","specs":[{"label":"Signal","value":"Nur Live-Orderbuch"},{"label":"Aktualisierung","value":"500ms"},{"label":"Handelsplätze","value":"PM · Kalshi · Limitless"}]},"market-making":{"title":"Market Making","tagline":"Passives Spread-Einkommen auf illiquiden Prognosemärkten.","hook":"Sei das Haus, nicht der Spieler.","description":"Quote beide Seiten, verdiene den Spread bei jedem Fill — richtungsunabhängiges Einkommen, das mit Volumen skaliert, nicht mit Glück. GTD-Orders mit inventarbewusstem Skew.","specs":[{"label":"Order-Management","value":"Auto-Cancel + Requote"},{"label":"Inventar","value":"Skew-Limits"},{"label":"Handelsplätze","value":"Polymarket · Kalshi"}]},"whale-signal":{"title":"On-Chain Whale Signal","tagline":"Schnellstmögliches Signal — 3–30s vor der Positions-API.","hook":"3–30 Sekunden vor jedem anderen Tracker auf dem Planeten.","description":"Direkt aus den Polygon-Blockdaten. Du siehst die Order des Wals, bevor die öffentliche Positions-API überhaupt anerkennt, dass sie existiert. ABI-Calldata dekodiert in dem Moment, in dem Blöcke landen.","specs":[{"label":"Quelle","value":"Polygon-Blöcke"},{"label":"Vorlaufzeit","value":"3–30s"},{"label":"Dekodierung","value":"ABI-Calldata"}]}}},"engine":{"eyebrow":"Unter der Haube","headlineLine1":"In Rust entwickelt.","headlineLine2":"Auf Prognosemärkte abgestimmt.","description":"Aufgebaut auf den Garantien, die Rust dir gibt — und der Geschwindigkeit, die Tokios Async-Runtime möglich macht. Jede Strategie teilt denselben Ausführungspfad, dieselben Risiko-Hooks, dieselbe Observability-Oberfläche.","features":[{"icon":"🦀","title":"Rust + Tokio","body":"Keine GC-Pausen mitten im Trade. Keine Data Races bei nebenläufiger Ausführung. Keine Null-Pointer-Überraschungen. Schlank, vorhersehbar, schnell unter Druck."},{"icon":"🔌","title":"Plattformunabhängige Adapter","body":"Eine gemeinsame API-Oberfläche über Polymarket, Kalshi und Limitless. Strategien referenzieren VenueId — keine plattformspezifischen Typen."},{"icon":"🖥️","title":"Echtzeit-TUI","body":"ratatui-basierte Terminal-Oberfläche mit Live-Log-Streaming, farbcodierter Schweregrad-Anzeige und Statusansichten pro Bot."},{"icon":"⚙️","title":"FAK- & GTD-Orders","body":"Fill-or-Kill- und Good-Till-Date-Order-Typen mit automatischer Market-ID-Auflösung. Nebenläufige Ausführung, ratenbegrenzt."}],"performanceEyebrow":"Performance","performanceHeadline":"Zahlen, die zählen, wenn Millisekunden Geld kosten.","metrics":[{"metric":"< 1ms","label":"Event-Verarbeitung"},{"metric":"< 100ms","label":"Orderausführung"},{"metric":"~200ms","label":"Positions-Polling"},{"metric":"~50MB","label":"Speicher-Baseline"},{"metric":"< 5%","label":"CPU-Auslastung"},{"metric":"25 / 10s","label":"Rate-Limit (konfigurierbar)"}]},"safety":{"eyebrow":"Risk-First-Design","headlineLine1":"Tempo ohne Schutzmechanismen","headlineLine2":"ist nur teures Verlieren.","description":"Jede Order durchläuft eine vierstufige Risiko-Pipeline, bevor sie die Börse erreicht. Circuit Breaker, Tiefenprüfungen, Größen-Floors und vollständiger Dry-Run — eingebettet in denselben Ausführungskern, den jeder Bot nutzt.","layers":[{"icon":"🛑","title":"Circuit Breaker","body":"Stoppt automatisch nach N aufeinanderfolgenden großen Trades innerhalb eines konfigurierbaren gleitenden Fensters. Stoppt Kaskaden, bevor sie beginnen.","accent":"text-rose-400"},{"icon":"🛡️","title":"Orderbuch-Tiefen-Guard","body":"Prüft die Liquidität vor jeder Order. Keine Fills in dünne Orderbücher — Punkt.","accent":"text-amber-400"},{"icon":"🧪","title":"Dry-Run-Modus","body":"Der vollständige Ausführungspfad läuft, ohne echte Orders zu platzieren. Validiere Signale und Positionsgrößen ohne jedes Kapitalrisiko.","accent":"text-cyan-400"},{"icon":"⚖️","title":"Trade-Größen-Floor","body":"Mindestgrößen-Durchsetzung bei jeder Order. Filtert Mikro-Trades mit negativem EV automatisch heraus.","accent":"text-emerald-400"}],"ladderTitle":"Deployment-Leiter","ladderSubtitle":"Eine kurze Checkliste für den Weg von null zur Produktion.","ladder":[{"stage":"Einrichtung","action":"Laufe mit enable_trading: false für eine volle Session."},{"stage":"Erste Trades","action":"Halte copy_percentage bei 5–10 %, bis du dem Signal vertraust."},{"stage":"Laufend","action":"Beobachte Circuit-Breaker-Auslösungen — sie decken Ausführungsanomalien auf."},{"stage":"Produktion","action":"Nutze eine dedizierte Wallet mit nur dem Kapital, das du einsetzen willst."}]},"howItWorks":{"eyebrow":"So funktioniert's","headline":"Vom Repo zum Live-Bot in drei Schritten.","description":"Keine Blackbox. Du betreibst dieselbe Rust-Engine, die die Screenshots zeigen — auf deiner Maschine, deinen Keys, deinem Kapital.","steps":[{"num":"01","title":"Wähle deinen Vorteil","body":"Wähle die Strategie und den Handelsplatz, die zu deiner These passen. Jeder Bot ist ein eigener, klar definierter Marktvorteil auf der gemeinsamen Engine."},{"num":"02","title":"Konfigurieren & Dry-Run","body":"Trage deine Keys ein, setze Risikolimits und laufe mit enable_trading: false, bis du dem Signal vertraust — ohne Kapitalrisiko."},{"num":"03","title":"Live gehen","body":"Schalte auf einer dedizierten Wallet mit dem Kapital deiner Wahl auf Live. Beobachte Fills, P&L und den Circuit-Breaker-Status im Echtzeit-TUI."}],"getTitle":"Das bekommst du","gets":["Vollständiger Rust-Quellcode — MIT-lizenziert, deiner zum Lesen und Anpassen","Geführte Einrichtung — direkte Hilfe, um deinen ersten Bot zum Laufen zu bringen","Die gemeinsame Risikoschicht — Circuit Breaker, Tiefen-Guard, Dry-Run, Trade-Floor","Laufende Updates — neue Handelsplätze und Strategie-Upgrades, sobald sie erscheinen"],"note":"Source-available mit praktischer Einrichtung. Schreib auf Telegram für Zugang und Preise.","cta":"Zugang auf Telegram erhalten"},"cta":{"eyebrow":"Loslegen","headline":"Bereit, einen Bot arbeiten zu lassen?","description":"Telegram für direktes Gespräch, Scope-Klärung oder bezahlte Einrichtung. GitHub für das Open-Source-Repo, die Konfigurationsdocs und die Live-Codebasis. Die Antwortzeit auf Telegram beträgt typischerweise wenige Stunden.","ctaTelegram":"@HarrierOnChain auf Telegram","ctaGithub":"Repo durchstöbern","pillars":[{"title":"Open Source","body":"MIT-lizenziert. Lies den Code, forke ihn, bau darauf auf."},{"title":"Aktiv gepflegt","body":"Das Repo liefert regelmäßig Fixes und Strategie-Upgrades."},{"title":"Direkter Draht","body":"Keine Support-Tickets. Du sprichst mit der Person, die den Bot geschrieben hat."}]},"footer":{"productName":"PnL Profit","tagline":"Polymarket · Kalshi · Limitless","disclaimerLabel":"Haftungsausschluss.","rights":"MIT-lizenziert · Gebaut für die Prognosemarkt-Community."}},
  it: {"langName":{"en":"English","zh":"简体中文","ru":"Русский"},"nav":{"strategies":"Strategie","managed":"Gestito","venues":"Piattaforme","engine":"Engine","safety":"Sicurezza","blog":"Blog","contact":"Contatti","github":"GitHub","telegram":"Telegram","langSwitch":"Lingua"},"venues":{"eyebrow":"Copertura piattaforme","headline":"Un solo engine. Ogni piattaforma.","description":"L'engine è indipendente dalla piattaforma: qualsiasi mercato con order book o feed di posizioni si collega tramite un unico adapter. Oggi sette piattaforme sono attive in produzione, altre due in beta con dati di mercato live, e il resto dell'universo dei prediction market è una roadmap guidata dagli adapter. Ogni piattaforma ha il proprio repository bot dedicato.","statusLive":"Live","statusBeta":"Beta","statusRoadmap":"Roadmap","betaNote":"🟡 Beta = dati di prezzo live e verificati, collegati all'engine di arbitraggio cross-venue; l'esecuzione completa delle strategie è ancora in test. PredictIt (denaro reale) e Manifold (segnale di consenso a denaro virtuale) ora forniscono prezzi live insieme a Polymarket e Kalshi.","groupLive":"🟢 Attive oggi","groupTraditional":"Tradizionali / Regolamentate","groupCrypto":"Crypto / Decentralizzate","cardCta":"Apri repo →","footnote":"Vuoi dare priorità a una piattaforma? Il lavoro sugli adapter segue la domanda: se operi su un mercato non ancora attivo, può salire in coda.","footnoteCta":"Richiedi una piattaforma →"},"managed":{"eyebrow":"Gestito & Copy-Trading","headline":"Non vuoi gestire l'infrastruttura? Ci pensiamo noi.","description":"Opera con lo stesso engine, ma come servizio. Apri un account gestito, scegli un leader comprovato dalla leaderboard on-chain o una strategia, e lascia lavorare i bot in hosting: monitori saldo, P&L e commissioni su una dashboard live.","statusNote":"🧪 Beta ad accesso anticipato — paper trading (fondi simulati). Esplora oggi l'intero prodotto, la leaderboard e i numeri con zero capitale a rischio. Il trading live gestito con fondi reali è riservato alla waitlist e non ancora aperto: prima vengono custodia, audit di sicurezza e licenze.","stats":[{"value":"359+","label":"Stelle GitHub"},{"value":"7 (+2 beta)","label":"Piattaforme live"},{"value":"10","label":"Strategie"},{"value":"Paper","label":"Modalità beta"}],"featuresTitle":"Cosa ottieni","features":[{"icon":"📈","title":"Leaderboard on-chain","body":"Wallet Polymarket reali ordinati per P&L on-chain verificabile (profitto o volume, 1g/7g/30g/all-time). Un clic per copiare un trader comprovato."},{"icon":"🤖","title":"Bot di strategia in hosting","body":"Lo stesso engine da 10 strategie, gestito per te. Niente chiavi, niente server, niente operatività."},{"icon":"💰","title":"Arbitraggio cross-venue","body":"Prezzi live su Polymarket ↔ Kalshi ↔ PredictIt, con Manifold come segnale di consenso a denaro virtuale."},{"icon":"🛡️","title":"Stesso livello di sicurezza","body":"Circuit breaker, depth guard, trade floor — le protezioni dell'engine open source, applicate a ogni account gestito."}],"plansTitle":"Piani ad accesso anticipato","plans":[{"name":"Starter","price":"Gratis","fee":"Nessuna commissione di performance","forWho":"Impara i bot in modalità paper, rischio zero"},{"name":"Pro","price":"$49 / mese","fee":"10% (high-water mark)","forWho":"Bot in hosting + più strategie","highlight":true},{"name":"Managed","price":"$199 / mese","fee":"20% (high-water mark)","forWho":"Copy-trading completo, senza pensieri"}],"plansNote":"Le commissioni di performance usano un high-water mark: addebitate solo sul nuovo profitto oltre il tuo picco precedente, mai sui depositi né sul recupero di un drawdown. I prezzi mostrati sono relativi all'accesso anticipato e alla beta paper.","cta":"Iscriviti alla waitlist ad accesso anticipato"},"hero":{"badge":"Gestito & copy-trading · accesso anticipato paper","headlineLine1":"Copia trader comprovati.","headlineLine2":"Profitti in automatico.","ctaTelegram":"Apri l'App","ctaGithub":"Vedi su GitHub","stats":[{"label":"Esecuzione ordini","value":"< 100ms","unit":"end-to-end"},{"label":"Elaborazione eventi","value":"< 1ms","unit":"per evento"},{"label":"Baseline memoria","value":"~50MB","unit":"residente"},{"label":"CPU sotto carico","value":"< 5%","unit":"hardware moderno"}]},"liveSignal":{"eyebrow":"Segnale live","headline":"BTC/USDT — il mercato che i bot osservano","sub":"Prezzo spot in tempo reale, in streaming diretto dall'order book.","statusLive":"Live","statusOffline":"Offline","statusConnecting":"Connessione","pair":"BTC / USDT","sessionLabel":"· sessione","attribution":"Grafici di TradingView"},"bots":{"eyebrow":"La formazione","headline":"Dieci strategie. Un solo engine.","description":"Ogni bot punta a un edge di mercato distinto e ben definito — copy trading, arbitraggio, market making, segnali on-chain. Tutti condividono lo stesso core di esecuzione collaudato, lo stesso livello di rischio e lo stesso stack di adapter indipendente dalla piattaforma. Scegli l'edge adatto alla tua tesi; l'infrastruttura è già pronta.","statusProduction":"Produzione","statusDev":"In sviluppo","cardCta":"Parla di questo bot","cardCtaSuffix":"→ Telegram","items":{"copy-trading":{"title":"Copy Trading","tagline":"Replica automaticamente i migliori wallet con sizing e limiti di rischio configurabili.","hook":"Delega l'alpha ai wallet che hanno già dimostrato di averlo.","description":"Zero ricerca, zero chart da guardare, zero ripensamenti — il bot copia, tu componi i profitti. Segue uno o più wallet ad alte performance e replica le azioni BUY/SELL quasi in tempo reale.","specs":[{"label":"Wallet tracciati","value":"Multipli"},{"label":"Tipi di ordine","value":"FAK / GTD"},{"label":"Rischio","value":"Circuit breaker + depth"},{"label":"Dry run","value":"Pienamente supportato"}]},"btc-arb":{"title":"Arbitraggio BTC 5m / 15m / 1h","tagline":"Velocità sui mercati BTC Up/Down a finestra breve.","hook":"42ms end-to-end — nell'order book prima che tu finisca di leggere il titolo.","description":"Osserva le finestre BTC Up/Down. Quando emerge un'inefficienza di prezzo, il bot piazza un FAK a bassa latenza prima che la finestra si chiuda. I riflessi umani qui non competono.","specs":[{"label":"Mercati","value":"BTC Up/Down 5m–1h"},{"label":"Tipo di ordine","value":"FAK"},{"label":"Esecuzione","value":"~42ms"}]},"cross-arb":{"title":"Arbitraggio Cross-Venue","tagline":"Inefficienze di prezzo tra book a denaro reale su più piattaforme.","hook":"Blocca lo spread, non la direzione.","description":"Lo stesso contratto viene abbinato tra Polymarket, Kalshi e PredictIt (matching rigoroso — nessun falso abbinamento), e il gap viene catturato solo quando supera le commissioni di andata e ritorno. Entrambe le gambe coperte — il tuo P&L è il gap di prezzo stesso.","specs":[{"label":"Piattaforme","value":"Polymarket ↔ Kalshi ↔ PredictIt"},{"label":"Soglia di edge","value":"≥ commissioni, configurabile"},{"label":"Logging","value":"Tracciamento P&L completo"}]},"directional-arb":{"title":"Arbitraggio Direzionale","tagline":"Base di arbitraggio con inclinazione direzionale.","hook":"Parti dall'arbitraggio, poi pendi verso il lato con più edge.","description":"Compra entrambi i lati quando Up + Down si possono assemblare per meno di $1, poi aumenta il lato che il modello ritiene sottovalutato — mantenendo una base di arbitraggio mentre la posizione netta diventa direzionale. Il lato più piccolo funge da hedge parziale.","specs":[{"label":"Ingresso","value":"Basket Up + Down < $1"},{"label":"Inclinazione","value":"Fino a 3:1 verso l'edge"},{"label":"Ordini","value":"Solo limit"}]},"spread-farming":{"title":"Spread Farming","tagline":"Micro-edge sistematici e ripetibili.","hook":"Mille vincite da 0,5¢ si compongono in un grande numero.","description":"Disciplinato, ripetibile, noioso nel senso migliore — il tipo di edge che sopravvive a ogni regime di mercato. Si posiziona sullo spread, attende le condizioni di fill, esegue con sizing costante.","specs":[{"label":"Edge","value":"Spread bid-ask"},{"label":"Logging","value":"Per trade + sessione"}]},"sports":{"title":"Esecuzione Scommesse Sportive","tagline":"Velocità click-to-bet sui mercati sportivi live.","hook":"Clic. Eseguito. Fatto — in meno di 50ms.","description":"Batti il movimento della linea che toglie l'edge a ogni altro scommettitore manuale prima ancora che confermi l'ordine. Quote in tempo reale unite a esecuzione FAK rapida.","specs":[{"label":"Sport","value":"NBA, NFL, Calcio +"},{"label":"Esecuzione","value":"< 50ms"}]},"resolution-sniper":{"title":"Resolution Sniper","tagline":"Giocate ad alto win-rate e bassa varianza, uniche dei prediction market.","hook":"Probabilità 95%+ a 95¢ → cavalca fino al payout garantito di $1.00.","description":"La cosa più vicina al denaro gratis che un mercato abbia mai offerto — e non esiste al di fuori dei prediction market. Cerca esiti quasi certi e mantiene fino alla risoluzione.","specs":[{"label":"Certezza","value":"Configurabile"},{"label":"Payout","value":"$1.00 / share"},{"label":"Piattaforme","value":"PM · Kalshi · Limitless"}]},"orderbook-imbalance":{"title":"Orderbook Imbalance","tagline":"Segnale puro di order flow, nessun dato esterno richiesto.","hook":"Nessun abbonamento, nessun feed esterno, nessuna API rotta.","description":"Il segnale è l'order book — autosufficiente, a prova di bomba e impossibile da anticipare perché nessun altro vede ciò che vedi tu. Monitora l'OBI live con refresh a 500ms.","specs":[{"label":"Segnale","value":"Solo orderbook live"},{"label":"Refresh","value":"500ms"},{"label":"Piattaforme","value":"PM · Kalshi · Limitless"}]},"market-making":{"title":"Market Making","tagline":"Reddito passivo dallo spread su prediction market illiquidi.","hook":"Sii il banco, non il giocatore.","description":"Quota entrambi i lati, guadagna lo spread su ogni fill — reddito indipendente dalla direzione che scala col volume, non con la fortuna. Ordini GTD con skew basato sull'inventario.","specs":[{"label":"Gestione ordini","value":"Auto-cancel + requote"},{"label":"Inventario","value":"Limiti di skew"},{"label":"Piattaforme","value":"Polymarket · Kalshi"}]},"whale-signal":{"title":"Segnale Whale On-Chain","tagline":"Il segnale più rapido possibile — 3–30s prima dell'API delle posizioni.","hook":"3–30 secondi prima di ogni altro tracker sul pianeta.","description":"Direttamente dai dati dei blocchi Polygon. Vedi l'ordine della whale prima ancora che l'API pubblica delle posizioni ne riconosca l'esistenza. Calldata ABI decodificati nell'istante in cui atterrano i blocchi.","specs":[{"label":"Fonte","value":"Blocchi Polygon"},{"label":"Anticipo","value":"3–30s"},{"label":"Decodifica","value":"Calldata ABI"}]}}},"engine":{"eyebrow":"Sotto il cofano","headlineLine1":"Ingegnerizzato in Rust.","headlineLine2":"Ottimizzato per i prediction market.","description":"Costruito sulle garanzie che Rust ti dà — e sulla velocità che il runtime async di Tokio rende possibile. Ogni strategia condivide lo stesso percorso di esecuzione, gli stessi hook di rischio, la stessa superficie di osservabilità.","features":[{"icon":"🦀","title":"Rust + Tokio","body":"Nessuna pausa GC durante un trade. Nessuna data race nell'esecuzione concorrente. Nessuna sorpresa da null pointer. Snello, prevedibile, veloce sotto pressione."},{"icon":"🔌","title":"Adapter indipendenti dalla piattaforma","body":"Un'unica superficie API condivisa tra Polymarket, Kalshi e Limitless. Le strategie fanno riferimento a VenueId — non a tipi specifici della piattaforma."},{"icon":"🖥️","title":"TUI in tempo reale","body":"Interfaccia terminale basata su ratatui con streaming dei log live, severità a colori e viste di stato per ogni bot."},{"icon":"⚙️","title":"Ordini FAK & GTD","body":"Tipi di ordine Fill-or-Kill e Good-Till-Date con risoluzione automatica del market ID. Esecuzione concorrente, con rate limiting."}],"performanceEyebrow":"Performance","performanceHeadline":"Numeri che contano quando i millisecondi costano.","metrics":[{"metric":"< 1ms","label":"Elaborazione eventi"},{"metric":"< 100ms","label":"Esecuzione ordini"},{"metric":"~200ms","label":"Polling posizioni"},{"metric":"~50MB","label":"Baseline memoria"},{"metric":"< 5%","label":"Utilizzo CPU"},{"metric":"25 / 10s","label":"Rate limit (configurabile)"}]},"safety":{"eyebrow":"Design risk-first","headlineLine1":"Velocità senza protezioni","headlineLine2":"è solo perdere a caro prezzo.","description":"Ogni ordine passa attraverso una pipeline di rischio a quattro livelli prima di raggiungere l'exchange. Circuit breaker, controlli di profondità, soglie di dimensione e dry-run completo — integrati nello stesso core di esecuzione usato da ogni bot.","layers":[{"icon":"🛑","title":"Circuit Breaker","body":"Si arresta automaticamente dopo N grandi trade consecutivi entro una finestra scorrevole configurabile. Ferma le cascate prima che inizino.","accent":"text-rose-400"},{"icon":"🛡️","title":"Depth Guard dell'Orderbook","body":"Valida la liquidità prima di ogni ordine. Nessun fill su book sottili — punto.","accent":"text-amber-400"},{"icon":"🧪","title":"Modalità Dry Run","body":"L'intero percorso di esecuzione gira senza piazzare ordini reali. Valida segnali e sizing con zero capitale a rischio.","accent":"text-cyan-400"},{"icon":"⚖️","title":"Soglia di Dimensione","body":"Applicazione della dimensione minima su ogni ordine. Filtra automaticamente i micro-trade a EV negativo.","accent":"text-emerald-400"}],"ladderTitle":"Scala di deployment","ladderSubtitle":"Una breve checklist per passare da zero alla produzione.","ladder":[{"stage":"Setup","action":"Esegui con enable_trading: false per una sessione completa."},{"stage":"Primi trade","action":"Mantieni copy_percentage al 5–10% finché non ti fidi del segnale."},{"stage":"In corso","action":"Osserva gli scatti del circuit breaker — segnalano anomalie di esecuzione."},{"stage":"Produzione","action":"Usa un wallet dedicato con solo il capitale che intendi impiegare."}]},"howItWorks":{"eyebrow":"Come funziona","headline":"Dal repo al bot live in tre passi.","description":"Nessuna scatola nera. Esegui lo stesso engine Rust che vedi negli screenshot — sulla tua macchina, le tue chiavi, il tuo capitale.","steps":[{"num":"01","title":"Scegli il tuo edge","body":"Scegli la strategia e la piattaforma adatte alla tua tesi. Ogni bot è un edge di mercato distinto e ben definito sull'engine condiviso."},{"num":"02","title":"Configura & dry-run","body":"Inserisci le tue chiavi, imposta i limiti di rischio ed esegui con enable_trading: false finché non ti fidi del segnale — zero capitale a rischio."},{"num":"03","title":"Vai live","body":"Passa al live su un wallet dedicato con il capitale che scegli. Monitora fill, P&L e stato del circuit breaker dalla TUI in tempo reale."}],"getTitle":"Cosa ottieni","gets":["Sorgente Rust completo — licenza MIT, tuo da leggere e modificare","Setup guidato — aiuto diretto per avviare il tuo primo bot","Il livello di rischio condiviso — circuit breaker, depth guard, dry-run, trade floor","Aggiornamenti continui — nuove piattaforme e upgrade di strategia man mano che escono"],"note":"Source-available con setup assistito. Scrivi su Telegram per accesso e prezzi.","cta":"Ottieni l'accesso su Telegram"},"cta":{"eyebrow":"Inizia","headline":"Pronto a mettere un bot al lavoro?","description":"Telegram per un dialogo diretto, per discutere lo scope o per il setup a pagamento. GitHub per il repo open source, la documentazione di configurazione e il codebase live. I tempi di risposta su Telegram sono in genere di poche ore.","ctaTelegram":"@HarrierOnChain su Telegram","ctaGithub":"Sfoglia il repo","pillars":[{"title":"Open source","body":"Licenza MIT. Leggi il codice, forkalo, costruiscici sopra."},{"title":"Attivamente mantenuto","body":"Il repo rilascia fix e upgrade di strategia regolarmente."},{"title":"Linea diretta","body":"Niente ticket di supporto. Parli con chi ha scritto il bot."}]},"footer":{"productName":"PnL Profit","tagline":"Polymarket · Kalshi · Limitless","disclaimerLabel":"Disclaimer.","rights":"Licenza MIT · Creato per la community dei prediction market."}},
  tr: {"langName":{"en":"English","zh":"简体中文","ru":"Русский"},"nav":{"strategies":"Stratejiler","managed":"Yönetilen","venues":"Platformlar","engine":"Motor","safety":"Güvenlik","blog":"Blog","contact":"İletişim","github":"GitHub","telegram":"Telegram","langSwitch":"Dil"},"venues":{"eyebrow":"Platform Kapsamı","headline":"Tek motor. Her platform.","description":"Motor platform bağımsızdır — emir defteri veya pozisyon akışı olan her platform tek bir adaptörle bağlanır. Bugün üretimde yedi platform canlı, ikisi daha canlı piyasa verisiyle beta aşamasında; tahmin piyasası evreninin geri kalanı ise adaptör odaklı yol haritasında. Her platformun kendine özel bot deposu var.","statusLive":"Canlı","statusBeta":"Beta","statusRoadmap":"Yol Haritası","betaNote":"🟡 Beta = platformlar arası arbitraj motoruna bağlı canlı, doğrulanmış fiyat verisi; tam strateji yürütmesi hâlâ test aşamasında. PredictIt (gerçek para) ve Manifold (oyun parası konsensüs sinyali) artık Polymarket ve Kalshi ile birlikte canlı fiyat besliyor.","groupLive":"🟢 Bugün canlı","groupTraditional":"Geleneksel / Regüle","groupCrypto":"Kripto / Merkeziyetsiz","cardCta":"Depoyu aç →","footnote":"Bir platformun önceliklendirilmesini mi istiyorsunuz? Adaptör çalışması talep odaklıdır — henüz canlı olmayan bir platformda işlem yapıyorsanız sıraya öne geçebilir.","footnoteCta":"Platform talep et →"},"managed":{"eyebrow":"Yönetilen ve Kopya İşlem","headline":"Altyapı yönetmek istemiyor musunuz? Bizi bırakın.","description":"Aynı motoru bir hizmet olarak kullanın. Yönetilen bir hesap açın, on-chain lider tablosundan kanıtlanmış bir lider ya da bir strateji seçin ve barındırılan botlar çalışsın — siz bakiyeyi, P&L'i ve ücretleri canlı bir panelden izleyin.","statusNote":"🧪 Erken erişim betası — kağıt üzerinde işlem (simüle fonlar). Tüm ürünü, lider tablosunu ve ekonomiyi bugün sıfır sermaye riskiyle keşfedin. Gerçek fonlarla yönetilen canlı işlem bekleme listesinin ardında ve henüz açık değil — önce saklama, güvenlik denetimi ve lisanslama geliyor.","stats":[{"value":"359+","label":"GitHub yıldızı"},{"value":"7 (+2 beta)","label":"Canlı platform"},{"value":"10","label":"Strateji"},{"value":"Paper","label":"Beta modu"}],"featuresTitle":"Neler elde edersiniz","features":[{"icon":"📈","title":"On-chain lider tablosu","body":"Doğrulanabilir on-chain P&L'e göre sıralanmış gerçek Polymarket cüzdanları (kâr veya hacim, 1g/7g/30g/tüm zamanlar). Kanıtlanmış bir yatırımcıyı kopyalamak için tek tıklama."},{"icon":"🤖","title":"Barındırılan strateji botları","body":"Aynı 10 stratejilik motor, sizin için çalıştırılıyor. Anahtar yok, sunucu yok, operasyon yok."},{"icon":"💰","title":"Platformlar arası arbitraj","body":"Polymarket ↔ Kalshi ↔ PredictIt genelinde canlı fiyatlama, oyun parası konsensüs sinyali olarak Manifold ile."},{"icon":"🛡️","title":"Aynı güvenlik katmanı","body":"Devre kesici, derinlik koruması, işlem tabanı — açık kaynak motorun koruma bariyerleri, her yönetilen hesaba uygulanır."}],"plansTitle":"Erken erişim planları","plans":[{"name":"Starter","price":"Ücretsiz","fee":"Performans ücreti yok","forWho":"Botları kağıt modunda sıfır riskle öğrenin"},{"name":"Pro","price":"$49 / ay","fee":"%10 (yüksek su işareti)","forWho":"Barındırılan botlar + daha fazla strateji","highlight":true},{"name":"Managed","price":"$199 / ay","fee":"%20 (yüksek su işareti)","forWho":"Tam kopya işlem, tamamen elinizi çekin"}],"plansNote":"Performans ücretleri yüksek su işareti kullanır — yalnızca önceki zirvenizin üzerindeki yeni kârdan alınır, asla mevduattan ya da bir düşüşü telafi etmekten değil. Gösterilen fiyatlar erken erişim ve kağıt betasına aittir.","cta":"Erken erişim bekleme listesine katılın"},"hero":{"badge":"Yönetilen ve kopya işlem · kağıt erken erişim","headlineLine1":"Kanıtlanmış yatırımcıları kopyalayın.","headlineLine2":"Otomatik pilotta kâr edin.","ctaTelegram":"Uygulamayı Aç","ctaGithub":"GitHub'da Görüntüle","stats":[{"label":"Emir yürütme","value":"< 100ms","unit":"uçtan uca"},{"label":"Olay işleme","value":"< 1ms","unit":"olay başına"},{"label":"Bellek tabanı","value":"~50MB","unit":"yerleşik"},{"label":"Yük altında CPU","value":"< 5%","unit":"modern donanım"}]},"liveSignal":{"eyebrow":"Canlı sinyal","headline":"BTC/USDT — botların izlediği piyasa","sub":"Doğrudan emir defterinden akan gerçek zamanlı spot fiyat.","statusLive":"Canlı","statusOffline":"Çevrimdışı","statusConnecting":"Bağlanıyor","pair":"BTC / USDT","sessionLabel":"· oturum","attribution":"Grafikler TradingView tarafından"},"bots":{"eyebrow":"Kadro","headline":"On strateji. Tek motor.","description":"Her bot belirgin, iyi tanımlanmış bir piyasa avantajını hedefler — kopya işlem, arbitraj, piyasa yapıcılık, on-chain sinyaller. Hepsi aynı savaşta sınanmış yürütme çekirdeğini, risk katmanını ve platform bağımsız adaptör yığınını paylaşır. Tezinize uyan avantajı seçin; altyapı çoktan hazır.","statusProduction":"Üretim","statusDev":"Geliştirmede","cardCta":"Bu botu görüşün","cardCtaSuffix":"→ Telegram","items":{"copy-trading":{"title":"Kopya İşlem","tagline":"Yapılandırılabilir boyutlandırma ve risk limitleriyle en iyi cüzdanları otomatik yansıtın.","hook":"Alfayı, sahip olduğunu zaten kanıtlamış cüzdanlara devredin.","description":"Sıfır araştırma, sıfır grafik izleme, sıfır ikircim — bot kopyalar, siz kazandırırsınız. Bir veya daha fazla yüksek performanslı cüzdanı takip eder ve ALIŞ/SATIŞ işlemlerini neredeyse gerçek zamanlı yansıtır.","specs":[{"label":"Takip edilen cüzdanlar","value":"Birden fazla"},{"label":"Emir tipleri","value":"FAK / GTD"},{"label":"Risk","value":"Devre kesici + derinlik"},{"label":"Kuru çalıştırma","value":"Tam destekli"}]},"btc-arb":{"title":"BTC 5dk / 15dk / 1sa Arbitraj","tagline":"Kısa pencereli BTC Up/Down piyasalarında hız.","hook":"Uçtan uca 42ms — siz başlığı okumayı bitirmeden emir defterinde.","description":"BTC Up/Down pencerelerini izler. Bir fiyatlama verimsizliği ortaya çıktığında bot, pencere kapanmadan önce düşük gecikmeli bir FAK yerleştirir. İnsan refleksleri burada yarışamaz.","specs":[{"label":"Piyasalar","value":"BTC Up/Down 5dk–1sa"},{"label":"Emir tipi","value":"FAK"},{"label":"Yürütme","value":"~42ms"}]},"cross-arb":{"title":"Platformlar Arası Arbitraj","tagline":"Gerçek para defterlerinde platformlar arası fiyatlama verimsizlikleri.","hook":"Yönü değil, spread'i kilitleyin.","description":"Aynı sözleşme Polymarket, Kalshi ve PredictIt arasında eşleştirilir (katı eşleştirme — yanlış çift yok) ve fark yalnızca gidiş-dönüş ücretlerini aştığında yakalanır. Her iki bacak da hedge edilir — P&L'iniz fiyat farkının kendisidir.","specs":[{"label":"Platformlar","value":"Polymarket ↔ Kalshi ↔ PredictIt"},{"label":"Avantaj eşiği","value":"≥ ücretler, yapılandırılabilir"},{"label":"Kayıt","value":"Tam P&L takibi"}]},"directional-arb":{"title":"Yönlü Arbitraj","tagline":"Yönlü bir eğilimle arbitraj tabanı.","hook":"Arbitrajdan başlayın, ardından daha fazla avantajı olan tarafa yaslanın.","description":"Up + Down 1 doların altında toplanabildiğinde her iki tarafı da alır, sonra modelin değerinin altında gördüğü tarafı büyütür — net pozisyon yönlüleşirken bir arbitraj tabanı korunur. Küçük taraf kısmi hedge görevi görür.","specs":[{"label":"Giriş","value":"Up + Down < $1 sepeti"},{"label":"Eğilim","value":"Avantaja doğru 3:1'e kadar"},{"label":"Emirler","value":"Yalnızca limit"}]},"spread-farming":{"title":"Spread Çiftçiliği","tagline":"Sistematik, tekrarlanabilir mikro avantajlar.","hook":"Bin adet 0,5¢'lik kazanç, tek bir büyük rakama katlanır.","description":"Disiplinli, tekrarlanabilir, en iyi anlamda sıkıcı — her piyasa rejiminde hayatta kalan türden bir avantaj. Spread'e oturur, doldurma koşullarını bekler, tutarlı boyutlandırmayla yürütür.","specs":[{"label":"Avantaj","value":"Alış-satış spread'i"},{"label":"Kayıt","value":"İşlem başına + oturum"}]},"sports":{"title":"Spor Bahsi Yürütme","tagline":"Canlı spor piyasalarında tıkla-bahis yap hızı.","hook":"Tıkla. Doldu. Tamam — 50ms'nin altında.","description":"Diğer her manuel bahisçinin, emri onaylamadan bile avantajını yitirmesine yol açan çizgi hareketini geçin. Gerçek zamanlı oranlar hızlı FAK yürütmesiyle birleşir.","specs":[{"label":"Sporlar","value":"NBA, NFL, Futbol +"},{"label":"Yürütme","value":"< 50ms"}]},"resolution-sniper":{"title":"Sonuçlanma Keskin Nişancısı","tagline":"Tahmin piyasalarına özgü yüksek kazanma oranlı, düşük varyanslı oyunlar.","hook":"95¢'te %95+ olasılıklar → garantili $1,00 ödemeye kadar taşıyın.","description":"Herhangi bir piyasanın sunduğu bedava paraya en yakın şey — ve tahmin piyasaları dışında var olmuyor. Neredeyse kesin sonuçları tarar ve sonuçlanmaya kadar tutar.","specs":[{"label":"Kesinlik","value":"Yapılandırılabilir"},{"label":"Ödeme","value":"$1,00 / pay"},{"label":"Platformlar","value":"PM · Kalshi · Limitless"}]},"orderbook-imbalance":{"title":"Emir Defteri Dengesizliği","tagline":"Saf emir akışı sinyali, harici veri gerektirmez.","hook":"Abonelik yok, harici besleme yok, bozuk API yok.","description":"Sinyalin kendisi emir defteri — kendi kendine yeten, kurşun geçirmez ve önüne geçilmesi imkânsız, çünkü sizin gördüğünüzü başka kimse görmüyor. Canlı OBI'yi 500ms yenilemeyle izler.","specs":[{"label":"Sinyal","value":"Yalnızca canlı emir defteri"},{"label":"Yenileme","value":"500ms"},{"label":"Platformlar","value":"PM · Kalshi · Limitless"}]},"market-making":{"title":"Piyasa Yapıcılık","tagline":"Likit olmayan tahmin piyasalarında pasif spread geliri.","hook":"Kumarbaz değil, kasa olun.","description":"Her iki tarafa da kotasyon verin, her doldurmada spread'i kazanın — şansa değil hacme göre ölçeklenen, yön bağımsız gelir. Envanter farkındalıklı eğimle GTD emirleri.","specs":[{"label":"Emir yönetimi","value":"Otomatik iptal + yeniden kota"},{"label":"Envanter","value":"Eğim limitleri"},{"label":"Platformlar","value":"Polymarket · Kalshi"}]},"whale-signal":{"title":"On-Chain Balina Sinyali","tagline":"Mümkün olan en hızlı sinyal — pozisyon API'sinden 3–30sn önde.","hook":"Gezegendeki diğer her takipçiden 3–30 saniye önde.","description":"Doğrudan Polygon blok verisinden. Balinanın emrini, halka açık pozisyon API'si var olduğunu kabul etmeden bile görürsünüz. Bloklar düşer düşmez ABI calldata çözülür.","specs":[{"label":"Kaynak","value":"Polygon blokları"},{"label":"Öncelik süresi","value":"3–30sn"},{"label":"Çözümleme","value":"ABI calldata"}]}}},"engine":{"eyebrow":"Kaputun altında","headlineLine1":"Rust ile inşa edildi.","headlineLine2":"Tahmin piyasaları için ayarlandı.","description":"Rust'ın sunduğu garantiler — ve Tokio'nun async çalışma zamanının mümkün kıldığı hız üzerine kurulu. Her strateji aynı yürütme yolunu, aynı risk kancalarını, aynı gözlemlenebilirlik yüzeyini paylaşır.","features":[{"icon":"🦀","title":"Rust + Tokio","body":"İşlem ortasında GC duraklaması yok. Eşzamanlı yürütmede veri yarışı yok. Null-pointer sürprizleri yok. Yalın, öngörülebilir, baskı altında hızlı."},{"icon":"🔌","title":"Platform bağımsız adaptörler","body":"Polymarket, Kalshi ve Limitless genelinde tek bir ortak API yüzeyi. Stratejiler platforma özel tipleri değil, VenueId'yi referans alır."},{"icon":"🖥️","title":"Gerçek zamanlı TUI","body":"Canlı log akışı, renk kodlu önem düzeyi ve bot başına durum görünümleriyle ratatui destekli terminal arayüzü."},{"icon":"⚙️","title":"FAK ve GTD emirleri","body":"Otomatik piyasa ID çözümlemeli Fill-or-Kill ve Good-Till-Date emir tipleri. Eşzamanlı yürütme, hız sınırlı."}],"performanceEyebrow":"Performans","performanceHeadline":"Milisaniyelerin paraya mal olduğu yerde önemli olan rakamlar.","metrics":[{"metric":"< 1ms","label":"Olay işleme"},{"metric":"< 100ms","label":"Emir yürütme"},{"metric":"~200ms","label":"Pozisyon yoklama"},{"metric":"~50MB","label":"Bellek tabanı"},{"metric":"< 5%","label":"CPU kullanımı"},{"metric":"25 / 10s","label":"Hız limiti (yapılandırılabilir)"}]},"safety":{"eyebrow":"Önce risk tasarımı","headlineLine1":"Koruma bariyeri olmayan hız,","headlineLine2":"yalnızca pahalı bir kayıptır.","description":"Her emir, borsaya ulaşmadan önce dört katmanlı bir risk hattından geçer. Devre kesiciler, derinlik kontrolleri, boyut tabanları ve tam kuru çalıştırma — her botun kullandığı aynı yürütme çekirdeğine bağlı.","layers":[{"icon":"🛑","title":"Devre Kesici","body":"Yapılandırılabilir bir kayan pencere içinde N ardışık büyük işlemden sonra otomatik durur. Zincirleme etkileri başlamadan durdurur.","accent":"text-rose-400"},{"icon":"🛡️","title":"Emir Defteri Derinlik Koruması","body":"Her emirden önce likiditeyi doğrular. İnce defterlere doldurma yok — nokta.","accent":"text-amber-400"},{"icon":"🧪","title":"Kuru Çalıştırma Modu","body":"Tam yürütme yolu, gerçek emir vermeden çalışır. Sinyalleri ve boyutlandırmayı sıfır sermaye riskiyle doğrulayın.","accent":"text-cyan-400"},{"icon":"⚖️","title":"İşlem Boyutu Tabanı","body":"Her emirde minimum boyut zorunluluğu. Negatif EV'li mikro işlemleri otomatik olarak eler.","accent":"text-emerald-400"}],"ladderTitle":"Devreye alma merdiveni","ladderSubtitle":"Sıfırdan üretime geçmek için kısa bir kontrol listesi.","ladder":[{"stage":"Kurulum","action":"Tam bir oturum boyunca enable_trading: false ile çalıştırın."},{"stage":"İlk işlemler","action":"Sinyale güvenene kadar copy_percentage değerini %5–10'da tutun."},{"stage":"Süregelen","action":"Devre kesici tetiklemelerini izleyin — yürütme anormalliklerini yüzeye çıkarırlar."},{"stage":"Üretim","action":"Yalnızca kullanmayı düşündüğünüz sermayeyle özel bir cüzdan kullanın."}]},"howItWorks":{"eyebrow":"Nasıl çalışır","headline":"Depodan canlı bota üç adımda.","description":"Kara kutu yok. Ekran görüntülerinde gördüğünüz aynı Rust motorunu siz çalıştırırsınız — kendi makinenizde, kendi anahtarlarınızla, kendi sermayenizle.","steps":[{"num":"01","title":"Avantajınızı seçin","body":"Tezinize uyan strateji ve platformu seçin. Her bot, ortak motor üzerinde belirgin, iyi tanımlanmış bir piyasa avantajıdır."},{"num":"02","title":"Yapılandırın ve kuru çalıştırın","body":"Anahtarlarınızı girin, risk limitlerini ayarlayın ve sinyale güvenene kadar enable_trading: false ile çalıştırın — sıfır sermaye riski."},{"num":"03","title":"Canlıya geçin","body":"Seçtiğiniz sermayeyle özel bir cüzdanda canlıya geçin. Doldurmaları, P&L'i ve devre kesici durumunu gerçek zamanlı TUI'den izleyin."}],"getTitle":"Neler elde edersiniz","gets":["Tam Rust kaynağı — MIT lisanslı, okumanız ve değiştirmeniz için sizin","Rehberli kurulum — ilk botunuzu çalıştırmada doğrudan yardım","Ortak risk katmanı — devre kesici, derinlik koruması, kuru çalıştırma, işlem tabanı","Süregelen güncellemeler — çıktıkça yeni platformlar ve strateji yükseltmeleri"],"note":"Uygulamalı kurulumla kaynağı erişilebilir. Erişim ve fiyatlandırma için Telegram'dan yazın.","cta":"Telegram'dan erişim alın"},"cta":{"eyebrow":"Başlayın","headline":"Bir botu işe koşmaya hazır mısınız?","description":"Doğrudan görüşme, kapsam tartışması veya ücretli kurulum için Telegram. Açık kaynak depo, yapılandırma dokümanları ve canlı kod tabanı için GitHub. Telegram'da yanıt süresi genellikle birkaç saattir.","ctaTelegram":"Telegram'da @HarrierOnChain","ctaGithub":"Depoya göz atın","pillars":[{"title":"Açık kaynak","body":"MIT lisanslı. Kodu okuyun, çatallayın, üzerine inşa edin."},{"title":"Aktif olarak bakım yapılıyor","body":"Depo düzenli olarak düzeltmeler ve strateji yükseltmeleri yayınlıyor."},{"title":"Doğrudan hat","body":"Destek talebi yok. Botu yazan kişiyle konuşuyorsunuz."}]},"footer":{"productName":"PnL Profit","tagline":"Polymarket · Kalshi · Limitless","disclaimerLabel":"Sorumluluk reddi.","rights":"MIT Lisanslı · Tahmin piyasaları topluluğu için inşa edildi."}},
  vi: {"langName":{"en":"English","zh":"简体中文","ru":"Русский"},"nav":{"strategies":"Chiến lược","managed":"Quản lý hộ","venues":"Sàn giao dịch","engine":"Bộ máy","safety":"An toàn","blog":"Blog","contact":"Liên hệ","github":"GitHub","telegram":"Telegram","langSwitch":"Ngôn ngữ"},"venues":{"eyebrow":"Phạm vi sàn giao dịch","headline":"Một bộ máy. Mọi sàn giao dịch.","description":"Bộ máy độc lập với sàn — bất kỳ nền tảng nào có sổ lệnh hoặc luồng vị thế đều kết nối qua một adapter duy nhất. Bảy sàn đang chạy thực tế hôm nay, hai sàn nữa đang ở giai đoạn beta với dữ liệu thị trường trực tiếp, và phần còn lại của vũ trụ prediction market nằm trong lộ trình mở rộng theo adapter. Mỗi sàn có repo bot riêng chuyên biệt.","statusLive":"Trực tiếp","statusBeta":"Beta","statusRoadmap":"Lộ trình","betaNote":"🟡 Beta = dữ liệu giá thực, đã xác minh, được đấu nối vào bộ máy chênh lệch giá liên sàn; thực thi chiến lược đầy đủ vẫn đang thử nghiệm. PredictIt (tiền thật) và Manifold (tín hiệu đồng thuận tiền ảo) nay cung cấp giá trực tiếp bên cạnh Polymarket và Kalshi.","groupLive":"🟢 Đang chạy hôm nay","groupTraditional":"Truyền thống / Được quản lý","groupCrypto":"Crypto / Phi tập trung","cardCta":"Mở repo →","footnote":"Muốn ưu tiên một sàn? Việc phát triển adapter dựa theo nhu cầu — nếu bạn giao dịch trên nền tảng chưa lên sóng, nó có thể được đẩy lên đầu hàng đợi.","footnoteCta":"Yêu cầu thêm sàn →"},"managed":{"eyebrow":"Quản lý hộ & Copy-Trading","headline":"Không muốn tự vận hành hạ tầng? Cứ để chúng tôi.","description":"Giao dịch với cùng bộ máy dưới dạng dịch vụ. Mở tài khoản quản lý hộ, chọn một leader đã được kiểm chứng từ bảng xếp hạng on-chain hoặc một chiến lược, rồi để các bot được lưu trữ tự chạy — bạn chỉ việc theo dõi số dư, P&L và phí trên bảng điều khiển trực tiếp.","statusNote":"🧪 Beta truy cập sớm — giao dịch giấy (vốn mô phỏng). Khám phá toàn bộ sản phẩm, bảng xếp hạng và mô hình kinh tế ngay hôm nay mà không cần bỏ vốn. Giao dịch thật có quản lý bằng tiền thật đang được kiểm soát qua danh sách chờ và chưa mở — lưu ký, kiểm toán bảo mật và cấp phép là ưu tiên hàng đầu.","stats":[{"value":"359+","label":"Sao GitHub"},{"value":"7 (+2 beta)","label":"Sàn đang chạy"},{"value":"10","label":"Chiến lược"},{"value":"Paper","label":"Chế độ beta"}],"featuresTitle":"Bạn nhận được gì","features":[{"icon":"📈","title":"Bảng xếp hạng on-chain","body":"Ví Polymarket thật được xếp hạng theo P&L on-chain có thể kiểm chứng (lợi nhuận hoặc khối lượng, 1 ngày/7 ngày/30 ngày/toàn thời gian). Một cú nhấp để copy trader đã được kiểm chứng."},{"icon":"🤖","title":"Bot chiến lược được lưu trữ","body":"Cùng bộ máy 10 chiến lược, chạy hộ bạn. Không cần key, không server, không vận hành."},{"icon":"💰","title":"Chênh lệch giá liên sàn","body":"Giá trực tiếp trên Polymarket ↔ Kalshi ↔ PredictIt, cùng Manifold làm tín hiệu đồng thuận tiền ảo."},{"icon":"🛡️","title":"Cùng lớp an toàn","body":"Cầu dao ngắt mạch, bảo vệ độ sâu, sàn khối lượng — các hàng rào bảo vệ từ bộ máy mã nguồn mở, áp dụng cho mọi tài khoản quản lý hộ."}],"plansTitle":"Gói truy cập sớm","plans":[{"name":"Starter","price":"Miễn phí","fee":"Không phí hiệu suất","forWho":"Học cách dùng bot ở chế độ paper, không rủi ro"},{"name":"Pro","price":"$49 / tháng","fee":"10% (mốc đỉnh vốn)","forWho":"Bot được lưu trữ + nhiều chiến lược hơn","highlight":true},{"name":"Managed","price":"$199 / tháng","fee":"20% (mốc đỉnh vốn)","forWho":"Copy-trading trọn gói, rảnh tay hoàn toàn"}],"plansNote":"Phí hiệu suất áp dụng mốc đỉnh vốn — chỉ tính trên lợi nhuận mới vượt đỉnh trước đó của bạn, không bao giờ tính trên tiền nạp hay khi hồi phục sau sụt giảm. Giá hiển thị là truy cập sớm và paper-beta.","cta":"Tham gia danh sách chờ truy cập sớm"},"hero":{"badge":"Quản lý hộ & copy-trading · truy cập sớm chế độ paper","headlineLine1":"Copy trader đã được kiểm chứng.","headlineLine2":"Lợi nhuận tự động.","ctaTelegram":"Mở ứng dụng","ctaGithub":"Xem trên GitHub","stats":[{"label":"Thực thi lệnh","value":"< 100ms","unit":"đầu cuối"},{"label":"Xử lý sự kiện","value":"< 1ms","unit":"mỗi sự kiện"},{"label":"Bộ nhớ nền","value":"~50MB","unit":"thường trú"},{"label":"CPU khi tải","value":"< 5%","unit":"phần cứng hiện đại"}]},"liveSignal":{"eyebrow":"Tín hiệu trực tiếp","headline":"BTC/USDT — thị trường mà các bot theo dõi","sub":"Giá spot thời gian thực, truyền trực tiếp từ sổ lệnh.","statusLive":"Trực tiếp","statusOffline":"Ngoại tuyến","statusConnecting":"Đang kết nối","pair":"BTC / USDT","sessionLabel":"· phiên","attribution":"Biểu đồ bởi TradingView"},"bots":{"eyebrow":"Đội hình","headline":"Mười chiến lược. Một bộ máy.","description":"Mỗi bot nhắm tới một lợi thế thị trường riêng biệt, được xác định rõ — copy trading, chênh lệch giá, tạo lập thị trường, tín hiệu on-chain. Tất cả dùng chung lõi thực thi đã được kiểm chứng thực chiến, lớp rủi ro và bộ adapter độc lập với sàn. Chọn lợi thế phù hợp với luận điểm của bạn; hạ tầng đã được dựng sẵn.","statusProduction":"Vận hành thật","statusDev":"Đang phát triển","cardCta":"Trao đổi về bot này","cardCtaSuffix":"→ Telegram","items":{"copy-trading":{"title":"Copy Trading","tagline":"Tự động sao chép các ví hàng đầu với kích thước lệnh và giới hạn rủi ro tùy chỉnh.","hook":"Giao phó alpha cho những ví đã chứng minh họ có nó.","description":"Không nghiên cứu, không canh biểu đồ, không đắn đo — bot sao chép, bạn gộp lãi. Theo dõi một hoặc nhiều ví hiệu suất cao và sao chép các lệnh MUA/BÁN gần như tức thời.","specs":[{"label":"Ví theo dõi","value":"Nhiều ví"},{"label":"Loại lệnh","value":"FAK / GTD"},{"label":"Rủi ro","value":"Cầu dao ngắt + độ sâu"},{"label":"Chạy thử","value":"Hỗ trợ đầy đủ"}]},"btc-arb":{"title":"Chênh lệch giá BTC 5m / 15m / 1hr","tagline":"Tốc độ trên các thị trường BTC Up/Down khung ngắn.","hook":"42ms đầu cuối — đã vào sổ lệnh trước khi bạn đọc xong tiêu đề.","description":"Theo dõi các cửa sổ BTC Up/Down. Khi xuất hiện định giá không hiệu quả, bot đặt lệnh FAK độ trễ thấp trước khi cửa sổ đóng. Phản xạ con người không thể cạnh tranh ở đây.","specs":[{"label":"Thị trường","value":"BTC Up/Down 5m–1hr"},{"label":"Loại lệnh","value":"FAK"},{"label":"Thực thi","value":"~42ms"}]},"cross-arb":{"title":"Chênh lệch giá liên sàn","tagline":"Định giá không hiệu quả giữa các sổ lệnh tiền thật liên sàn.","hook":"Khóa chênh lệch, không phải hướng đi.","description":"Cùng một hợp đồng được khớp trên Polymarket, Kalshi và PredictIt (khớp nghiêm ngặt — không cặp giả), và khoảng chênh chỉ được chốt khi nó vượt phí khứ hồi. Cả hai chân đều được phòng hộ — P&L của bạn chính là khoảng chênh giá.","specs":[{"label":"Sàn","value":"Polymarket ↔ Kalshi ↔ PredictIt"},{"label":"Ngưỡng lợi thế","value":"≥ phí, tùy chỉnh"},{"label":"Ghi log","value":"Theo dõi P&L đầy đủ"}]},"directional-arb":{"title":"Chênh lệch giá có định hướng","tagline":"Nền tảng arbitrage với độ nghiêng theo hướng.","hook":"Khởi đầu từ arbitrage, rồi nghiêng về phía có nhiều lợi thế hơn.","description":"Mua cả hai chiều khi Up + Down có thể gom dưới $1, sau đó tăng khối lượng ở phía mà mô hình đánh giá bị định giá thấp — giữ một sàn arbitrage trong khi vị thế ròng đi theo hướng. Phía nhỏ hơn đóng vai trò phòng hộ một phần.","specs":[{"label":"Điểm vào","value":"Rổ Up + Down < $1"},{"label":"Độ nghiêng","value":"Tối đa 3:1 về phía lợi thế"},{"label":"Lệnh","value":"Chỉ lệnh giới hạn"}]},"spread-farming":{"title":"Spread Farming","tagline":"Các lợi thế nhỏ, có hệ thống và lặp lại.","hook":"Một nghìn chiến thắng 0.5¢ gộp lại thành một con số lớn.","description":"Kỷ luật, lặp lại, buồn tẻ theo nghĩa tốt nhất — loại lợi thế sống sót qua mọi trạng thái thị trường. Đứng ở khoảng chênh, chờ điều kiện khớp lệnh, thực thi với kích thước nhất quán.","specs":[{"label":"Lợi thế","value":"Chênh lệch mua-bán"},{"label":"Ghi log","value":"Theo lệnh + theo phiên"}]},"sports":{"title":"Thực thi cá cược thể thao","tagline":"Tốc độ nhấp-để-cược trên các thị trường thể thao trực tiếp.","hook":"Nhấp. Khớp. Xong — trong chưa đầy 50ms.","description":"Đón đầu bước dịch chuyển tỷ lệ vốn cướp mất lợi thế của mọi người cược thủ công trước cả khi họ kịp xác nhận lệnh. Tỷ lệ thời gian thực kết hợp thực thi FAK nhanh.","specs":[{"label":"Thể thao","value":"NBA, NFL, Bóng đá +"},{"label":"Thực thi","value":"< 50ms"}]},"resolution-sniper":{"title":"Resolution Sniper","tagline":"Các kèo tỷ lệ thắng cao, biến động thấp, đặc trưng của prediction market.","hook":"Xác suất 95%+ ở mức 95¢ → giữ tới khi nhận khoản chi trả $1.00 chắc chắn.","description":"Thứ gần với tiền miễn phí nhất mà bất kỳ thị trường nào từng mang lại — và nó không tồn tại ngoài prediction market. Quét các kết quả gần như chắc chắn và giữ tới khi thị trường tất toán.","specs":[{"label":"Độ chắc chắn","value":"Tùy chỉnh"},{"label":"Chi trả","value":"$1.00 / cổ phần"},{"label":"Sàn","value":"PM · Kalshi · Limitless"}]},"orderbook-imbalance":{"title":"Mất cân bằng sổ lệnh","tagline":"Tín hiệu thuần từ luồng lệnh, không cần dữ liệu bên ngoài.","hook":"Không đăng ký, không luồng ngoài, không API hỏng.","description":"Tín hiệu chính là sổ lệnh — tự chủ, bền bỉ, và không thể bị chạy trước vì không ai khác thấy được điều bạn thấy. Giám sát OBI trực tiếp với tần suất làm mới 500ms.","specs":[{"label":"Tín hiệu","value":"Chỉ sổ lệnh trực tiếp"},{"label":"Làm mới","value":"500ms"},{"label":"Sàn","value":"PM · Kalshi · Limitless"}]},"market-making":{"title":"Tạo lập thị trường","tagline":"Thu nhập thụ động từ chênh lệch trên các prediction market kém thanh khoản.","hook":"Làm nhà cái, đừng làm con bạc.","description":"Yết giá cả hai chiều, kiếm chênh lệch trên mỗi lần khớp — thu nhập độc lập với hướng, tăng theo khối lượng chứ không theo may rủi. Lệnh GTD với độ nghiêng theo tồn kho.","specs":[{"label":"Quản lý lệnh","value":"Tự hủy + yết lại"},{"label":"Tồn kho","value":"Giới hạn độ nghiêng"},{"label":"Sàn","value":"Polymarket · Kalshi"}]},"whale-signal":{"title":"Tín hiệu cá voi on-chain","tagline":"Tín hiệu nhanh nhất có thể — sớm hơn 3–30 giây so với API vị thế.","hook":"Sớm hơn 3–30 giây so với mọi tracker khác trên hành tinh.","description":"Trực tiếp từ dữ liệu block Polygon. Bạn thấy lệnh của cá voi trước cả khi API vị thế công khai thừa nhận nó tồn tại. Calldata ABI được giải mã ngay khi block xuất hiện.","specs":[{"label":"Nguồn","value":"Block Polygon"},{"label":"Thời gian dẫn trước","value":"3–30s"},{"label":"Giải mã","value":"ABI calldata"}]}}},"engine":{"eyebrow":"Bên trong bộ máy","headlineLine1":"Được xây bằng Rust.","headlineLine2":"Tinh chỉnh cho prediction market.","description":"Dựng trên những đảm bảo mà Rust mang lại — và tốc độ mà runtime bất đồng bộ của Tokio tạo ra. Mọi chiến lược dùng chung đường thực thi, cùng các hook rủi ro, cùng bề mặt quan sát.","features":[{"icon":"🦀","title":"Rust + Tokio","body":"Không dừng GC giữa lệnh. Không tranh chấp dữ liệu khi thực thi song song. Không bất ngờ với con trỏ null. Gọn, dự đoán được, nhanh khi chịu áp lực."},{"icon":"🔌","title":"Adapter độc lập với sàn","body":"Một bề mặt API dùng chung trên Polymarket, Kalshi và Limitless. Chiến lược tham chiếu VenueId — không phải kiểu dữ liệu riêng của nền tảng."},{"icon":"🖥️","title":"TUI thời gian thực","body":"Giao diện terminal chạy trên ratatui với luồng log trực tiếp, mã màu theo mức độ nghiêm trọng, và trạng thái từng bot."},{"icon":"⚙️","title":"Lệnh FAK & GTD","body":"Các loại lệnh Fill-or-Kill và Good-Till-Date với tự động phân giải market ID. Thực thi song song, có giới hạn tần suất."}],"performanceEyebrow":"Hiệu năng","performanceHeadline":"Những con số quan trọng khi từng mili-giây là tiền.","metrics":[{"metric":"< 1ms","label":"Xử lý sự kiện"},{"metric":"< 100ms","label":"Thực thi lệnh"},{"metric":"~200ms","label":"Polling vị thế"},{"metric":"~50MB","label":"Bộ nhớ nền"},{"metric":"< 5%","label":"Sử dụng CPU"},{"metric":"25 / 10s","label":"Giới hạn tần suất (tùy chỉnh)"}]},"safety":{"eyebrow":"Thiết kế ưu tiên rủi ro","headlineLine1":"Tốc độ mà không có hàng rào bảo vệ","headlineLine2":"chỉ là thua lỗ đắt đỏ.","description":"Mọi lệnh đều đi qua đường ống rủi ro bốn lớp trước khi tới sàn. Cầu dao ngắt mạch, kiểm tra độ sâu, sàn kích thước và chạy thử đầy đủ — được đấu nối vào cùng lõi thực thi mà mọi bot sử dụng.","layers":[{"icon":"🛑","title":"Cầu dao ngắt mạch","body":"Tự động dừng sau N lệnh lớn liên tiếp trong cửa sổ trượt tùy chỉnh. Chặn hiệu ứng dây chuyền trước khi nó bắt đầu.","accent":"text-rose-400"},{"icon":"🛡️","title":"Bảo vệ độ sâu sổ lệnh","body":"Xác thực thanh khoản trước mỗi lệnh. Không khớp vào sổ lệnh mỏng — chấm hết.","accent":"text-amber-400"},{"icon":"🧪","title":"Chế độ chạy thử","body":"Toàn bộ đường thực thi chạy mà không đặt lệnh thật. Kiểm chứng tín hiệu và kích thước với không rủi ro vốn.","accent":"text-cyan-400"},{"icon":"⚖️","title":"Sàn kích thước lệnh","body":"Bắt buộc kích thước tối thiểu trên mọi lệnh. Tự động lọc bỏ các lệnh siêu nhỏ có EV âm.","accent":"text-emerald-400"}],"ladderTitle":"Nấc thang triển khai","ladderSubtitle":"Danh sách kiểm tra ngắn để đi từ số không tới vận hành thật.","ladder":[{"stage":"Thiết lập","action":"Chạy với enable_trading: false trong trọn một phiên."},{"stage":"Giao dịch đầu tiên","action":"Giữ copy_percentage ở mức 5–10% cho tới khi bạn tin tưởng tín hiệu."},{"stage":"Duy trì","action":"Theo dõi các lần cầu dao ngắt — chúng phản ánh bất thường khi thực thi."},{"stage":"Vận hành thật","action":"Dùng ví chuyên biệt chỉ với số vốn bạn dự định triển khai."}]},"howItWorks":{"eyebrow":"Cách hoạt động","headline":"Từ repo tới bot chạy thật trong ba bước.","description":"Không phải hộp đen. Bạn chạy cùng bộ máy Rust như trong ảnh chụp — trên máy của bạn, key của bạn, vốn của bạn.","steps":[{"num":"01","title":"Chọn lợi thế của bạn","body":"Chọn chiến lược và sàn phù hợp với luận điểm của bạn. Mỗi bot là một lợi thế thị trường riêng biệt, rõ ràng trên bộ máy dùng chung."},{"num":"02","title":"Cấu hình & chạy thử","body":"Thả key vào, đặt giới hạn rủi ro, và chạy với enable_trading: false cho tới khi bạn tin tưởng tín hiệu — không rủi ro vốn."},{"num":"03","title":"Lên sóng thật","body":"Chuyển sang chạy thật trên ví chuyên biệt với số vốn bạn chọn. Theo dõi khớp lệnh, P&L và trạng thái cầu dao ngắt từ TUI thời gian thực."}],"getTitle":"Bạn nhận được gì","gets":["Toàn bộ mã nguồn Rust — cấp phép MIT, của bạn để đọc và chỉnh sửa","Thiết lập có hướng dẫn — hỗ trợ trực tiếp để chạy bot đầu tiên","Lớp rủi ro dùng chung — cầu dao ngắt, bảo vệ độ sâu, chạy thử, sàn khối lượng","Cập nhật liên tục — sàn mới và nâng cấp chiến lược khi ra mắt"],"note":"Mã nguồn mở kèm thiết lập tận tay. Nhắn tin trên Telegram để nhận quyền truy cập và bảng giá.","cta":"Nhận quyền truy cập trên Telegram"},"cta":{"eyebrow":"Bắt đầu","headline":"Sẵn sàng đưa một bot vào việc?","description":"Telegram để trao đổi trực tiếp, bàn về phạm vi, hoặc thiết lập có phí. GitHub cho repo mã nguồn mở, tài liệu cấu hình và codebase trực tiếp. Thời gian phản hồi trên Telegram thường trong vài giờ.","ctaTelegram":"@HarrierOnChain trên Telegram","ctaGithub":"Duyệt repo","pillars":[{"title":"Mã nguồn mở","body":"Cấp phép MIT. Đọc mã, fork nó, xây tiếp trên đó."},{"title":"Được bảo trì tích cực","body":"Repo phát hành bản vá và nâng cấp chiến lược thường xuyên."},{"title":"Đường dây trực tiếp","body":"Không ticket hỗ trợ. Bạn nói chuyện với chính người viết ra bot."}]},"footer":{"productName":"PnL Profit","tagline":"Polymarket · Kalshi · Limitless","disclaimerLabel":"Miễn trừ trách nhiệm.","rights":"Cấp phép MIT · Xây dựng cho cộng đồng prediction market."}},
  ja: {"langName":{"en":"English","zh":"简体中文","ru":"Русский"},"nav":{"strategies":"戦略","managed":"マネージド","venues":"取引所","engine":"エンジン","safety":"安全性","blog":"ブログ","contact":"お問い合わせ","github":"GitHub","telegram":"Telegram","langSwitch":"言語"},"venues":{"eyebrow":"対応取引所","headline":"1つのエンジンで、あらゆる取引所へ。","description":"エンジンは取引所を選びません。オーダーブックやポジションフィードを持つプラットフォームなら、単一のアダプターで接続できます。現在7つの取引所が本番稼働中、さらに2つがライブ市場データを使ったベータ段階にあり、残りの予測市場は今後アダプターで順次対応予定です。各取引所には専用のボットリポジトリが用意されています。","statusLive":"稼働中","statusBeta":"ベータ","statusRoadmap":"予定","betaNote":"🟡 ベータ = クロス取引所アービトラージエンジンに接続された、検証済みのライブ価格データが稼働中。ただし戦略の完全な執行は引き続きテスト中です。PredictIt（実資金）とManifold（仮想資金によるコンセンサスシグナル）が、PolymarketおよびKalshiと並んでライブ価格を配信するようになりました。","groupLive":"🟢 現在稼働中","groupTraditional":"従来型 / 規制対象","groupCrypto":"クリプト / 分散型","cardCta":"リポジトリを開く →","footnote":"対応してほしい取引所がありますか？アダプター開発は需要主導です。まだ未対応のプラットフォームで取引しているなら、優先度を引き上げられるかもしれません。","footnoteCta":"取引所をリクエスト →"},"managed":{"eyebrow":"マネージド & コピートレード","headline":"インフラ運用は面倒ですか？私たちにお任せください。","description":"同じエンジンをサービスとして利用できます。マネージドアカウントを開設し、オンチェーンのリーダーボードから実績あるリーダーや戦略を選ぶだけ。あとはホスト型ボットが稼働し、残高・損益・手数料をライブダッシュボードで確認できます。","statusNote":"🧪 アーリーアクセスベータ — ペーパートレード（シミュレーション資金）。製品全体、リーダーボード、そして採算構造を、資金リスクゼロで今すぐ体験できます。実資金によるマネージドライブ取引はウェイトリスト登録者限定で、まだ開放されていません。カストディ、セキュリティ監査、ライセンス取得を優先しています。","stats":[{"value":"359+","label":"GitHub スター"},{"value":"7 (+2 beta)","label":"稼働中の取引所"},{"value":"10","label":"戦略"},{"value":"Paper","label":"ベータモード"}],"featuresTitle":"得られるもの","features":[{"icon":"📈","title":"オンチェーン・リーダーボード","body":"検証可能なオンチェーン損益（利益または出来高、1日/7日/30日/全期間）でランク付けされた実在のPolymarketウォレット。ワンクリックで実績あるトレーダーをコピーできます。"},{"icon":"🤖","title":"ホスト型戦略ボット","body":"同じ10戦略エンジンを、あなたの代わりに稼働。鍵も、サーバーも、運用も不要です。"},{"icon":"💰","title":"クロス取引所アービトラージ","body":"Polymarket ↔ Kalshi ↔ PredictIt のライブ価格に加え、Manifoldを仮想資金のコンセンサスシグナルとして活用。"},{"icon":"🛡️","title":"同じ安全レイヤー","body":"サーキットブレーカー、デプスガード、取引サイズ下限。オープンソースエンジンのガードレールを、すべてのマネージドアカウントに適用します。"}],"plansTitle":"アーリーアクセスプラン","plans":[{"name":"Starter","price":"Free","fee":"成果報酬なし","forWho":"ペーパーモードでボットを学ぶ、リスクゼロ"},{"name":"Pro","price":"$49 / mo","fee":"10%（ハイウォーターマーク）","forWho":"ホスト型ボット + より多くの戦略","highlight":true},{"name":"Managed","price":"$199 / mo","fee":"20%（ハイウォーターマーク）","forWho":"完全コピートレード、手間いらず"}],"plansNote":"成果報酬はハイウォーターマーク方式です。過去の最高値を上回る新たな利益に対してのみ課金され、入金額やドローダウンからの回復には一切かかりません。表示価格はアーリーアクセスおよびペーパーベータのものです。","cta":"アーリーアクセスのウェイトリストに参加"},"hero":{"badge":"マネージド & コピートレード · ペーパー版アーリーアクセス","headlineLine1":"実績あるトレーダーをコピー。","headlineLine2":"利益は自動操縦で。","ctaTelegram":"アプリを開く","ctaGithub":"GitHubで見る","stats":[{"label":"注文執行","value":"< 100ms","unit":"エンドツーエンド"},{"label":"イベント処理","value":"< 1ms","unit":"1イベントあたり"},{"label":"メモリ基準値","value":"~50MB","unit":"常駐"},{"label":"負荷時のCPU","value":"< 5%","unit":"最新ハード"}]},"liveSignal":{"eyebrow":"ライブシグナル","headline":"BTC/USDT — ボットが監視する市場","sub":"オーダーブックから直接ストリーミングされるリアルタイム現物価格。","statusLive":"稼働中","statusOffline":"オフライン","statusConnecting":"接続中","pair":"BTC / USDT","sessionLabel":"· セッション","attribution":"チャート提供：TradingView"},"bots":{"eyebrow":"ラインナップ","headline":"10の戦略。1つのエンジン。","description":"各ボットは、コピートレード、アービトラージ、マーケットメイク、オンチェーンシグナルなど、明確に定義された固有の市場エッジを狙います。すべてが実戦で鍛えられた同じ執行コア、リスクレイヤー、取引所非依存のアダプタースタックを共有。あなたの仮説に合うエッジを選ぶだけ。インフラはすでに構築済みです。","statusProduction":"本番稼働","statusDev":"開発中","cardCta":"このボットについて相談","cardCtaSuffix":"→ Telegram","items":{"copy-trading":{"title":"コピートレード","tagline":"設定可能なサイジングとリスク上限で、トップウォレットを自動ミラーリング。","hook":"すでに実力を証明したウォレットに、アルファ獲得を任せる。","description":"リサーチ不要、チャート監視不要、迷いも不要。ボットがコピーし、あなたは複利で増やす。1つ以上の高パフォーマンスウォレットを追跡し、BUY/SELLをほぼリアルタイムでミラーリングします。","specs":[{"label":"追跡ウォレット","value":"複数"},{"label":"注文タイプ","value":"FAK / GTD"},{"label":"リスク","value":"サーキットブレーカー + デプス"},{"label":"ドライラン","value":"完全対応"}]},"btc-arb":{"title":"BTC 5分 / 15分 / 1時間アービトラージ","tagline":"短時間枠のBTC Up/Down市場でのスピード勝負。","hook":"エンドツーエンド42ms — タイトルを読み終える前にオーダーブックへ。","description":"BTC Up/Downの各時間枠を監視。価格の非効率が生じた瞬間、枠が閉じる前に低レイテンシのFAKを発注します。人間の反射神経では太刀打ちできません。","specs":[{"label":"市場","value":"BTC Up/Down 5分〜1時間"},{"label":"注文タイプ","value":"FAK"},{"label":"執行","value":"~42ms"}]},"cross-arb":{"title":"クロス取引所アービトラージ","tagline":"実資金オーダーブック間の価格非効率を捉える。","hook":"方向ではなく、スプレッドを固定する。","description":"同一契約をPolymarket、Kalshi、PredictItで照合し（厳密マッチング — 誤ったペアリングなし）、往復手数料を上回るときだけ価格差を捕捉します。両レッグをヘッジするため、損益は価格差そのものになります。","specs":[{"label":"取引所","value":"Polymarket ↔ Kalshi ↔ PredictIt"},{"label":"エッジ閾値","value":"手数料以上、設定可能"},{"label":"ロギング","value":"完全な損益追跡"}]},"directional-arb":{"title":"ディレクショナル・アービトラージ","tagline":"アービトラージを土台に、方向性の傾きを加える。","hook":"アービトラージから始め、エッジの大きい側へ傾ける。","description":"Up + Downを合計1ドル未満で組成できるとき両側を買い、モデルが割安と評価する側を増し玉。アービトラージの下限を保ちながら、ネットポジションを方向性へ傾けます。小さい側は部分ヘッジとして機能します。","specs":[{"label":"エントリー","value":"Up + Down < $1 のバスケット"},{"label":"傾斜","value":"エッジ側へ最大3:1"},{"label":"注文","value":"指値のみ"}]},"spread-farming":{"title":"スプレッドファーミング","tagline":"システマティックで再現可能なマイクロエッジ。","hook":"0.5¢の勝ちを千回積み上げれば、一つの大きな数字になる。","description":"規律正しく、再現可能で、最高の意味で退屈。あらゆる相場局面を生き延びる種類のエッジです。スプレッドに構え、約定条件を待ち、一貫したサイジングで執行します。","specs":[{"label":"エッジ","value":"ビッド・アスク・スプレッド"},{"label":"ロギング","value":"取引ごと + セッション"}]},"sports":{"title":"スポーツベッティング執行","tagline":"ライブスポーツ市場でのクリック即ベットのスピード。","hook":"クリック。約定。完了 — 50ms未満で。","description":"他のすべての手動ベッターがエッジを失う原因となるライン変動を、彼らが注文を確定する前に出し抜きます。リアルタイムオッズと高速FAK執行の組み合わせ。","specs":[{"label":"スポーツ","value":"NBA, NFL, サッカー +"},{"label":"執行","value":"< 50ms"}]},"resolution-sniper":{"title":"レゾリューション・スナイパー","tagline":"予測市場ならではの、高勝率・低分散のプレー。","hook":"95¢で95%以上の確率 → 確定した$1.00の払い戻しまで乗る。","description":"どの市場もかつて提供したことのない、無料のお金に最も近い存在 — そして予測市場の外には存在しません。ほぼ確実な結果をスキャンし、決済まで保有します。","specs":[{"label":"確実性","value":"設定可能"},{"label":"払い戻し","value":"$1.00 / シェア"},{"label":"取引所","value":"PM · Kalshi · Limitless"}]},"orderbook-imbalance":{"title":"オーダーブック・インバランス","tagline":"純粋な注文フローシグナル、外部データ不要。","hook":"サブスクなし、外部フィードなし、壊れたAPIなし。","description":"シグナルはオーダーブックそのもの — 自己完結型で、鉄壁で、他の誰にも見えないためフロントランされることはありません。ライブOBIを500ms間隔で監視します。","specs":[{"label":"シグナル","value":"ライブオーダーブックのみ"},{"label":"更新間隔","value":"500ms"},{"label":"取引所","value":"PM · Kalshi · Limitless"}]},"market-making":{"title":"マーケットメイク","tagline":"流動性の低い予測市場でのパッシブなスプレッド収益。","hook":"ギャンブラーではなく、胴元になる。","description":"両側にクオートを出し、約定ごとにスプレッドを稼ぐ — 運ではなく出来高に比例して伸びる、方向性に依存しない収益です。在庫を考慮したスキュー付きGTD注文。","specs":[{"label":"注文管理","value":"自動キャンセル + 再クオート"},{"label":"在庫","value":"スキュー上限"},{"label":"取引所","value":"Polymarket · Kalshi"}]},"whale-signal":{"title":"オンチェーン・クジラシグナル","tagline":"可能な限り最速のシグナル — ポジションAPIより3〜30秒先行。","hook":"地球上の他のどのトラッカーよりも3〜30秒先行。","description":"Polygonのブロックデータから直接取得。公開ポジションAPIがその存在を認識する前に、クジラの注文が見えます。ブロックが確定した瞬間にABIコールデータをデコードします。","specs":[{"label":"ソース","value":"Polygon ブロック"},{"label":"先行時間","value":"3〜30s"},{"label":"デコード","value":"ABI コールデータ"}]}}},"engine":{"eyebrow":"内部構造","headlineLine1":"Rustで設計。","headlineLine2":"予測市場に最適化。","description":"Rustが保証する安全性と、Tokioの非同期ランタイムが可能にする速度の上に構築。すべての戦略が、同じ執行パス、同じリスクフック、同じ可観測性の基盤を共有します。","features":[{"icon":"🦀","title":"Rust + Tokio","body":"取引中のGC停止なし。並行実行でのデータ競合なし。ヌルポインタの不意打ちなし。軽量で、予測可能で、負荷下でも高速。"},{"icon":"🔌","title":"取引所非依存アダプター","body":"Polymarket、Kalshi、Limitlessをまたぐ共通API。戦略はプラットフォーム固有の型ではなくVenueIdを参照します。"},{"icon":"🖥️","title":"リアルタイムTUI","body":"ratatui製のターミナルインターフェース。ライブログストリーミング、重大度の色分け、ボットごとのステータス表示に対応。"},{"icon":"⚙️","title":"FAK & GTD 注文","body":"Fill-or-KillおよびGood-Till-Dateの注文タイプに対応し、マーケットIDを自動解決。レート制限付きの並行執行。"}],"performanceEyebrow":"パフォーマンス","performanceHeadline":"ミリ秒がコストになるとき、意味を持つ数字。","metrics":[{"metric":"< 1ms","label":"イベント処理"},{"metric":"< 100ms","label":"注文執行"},{"metric":"~200ms","label":"ポジションポーリング"},{"metric":"~50MB","label":"メモリ基準値"},{"metric":"< 5%","label":"CPU使用率"},{"metric":"25 / 10s","label":"レート制限（設定可能）"}]},"safety":{"eyebrow":"リスク最優先の設計","headlineLine1":"ガードレールなきスピードは、","headlineLine2":"高くつく負けにすぎない。","description":"すべての注文は、取引所に届く前に4層のリスクパイプラインを通過します。サーキットブレーカー、デプスチェック、サイズ下限、そして完全なドライラン — すべてのボットが使う同じ執行コアに組み込まれています。","layers":[{"icon":"🛑","title":"サーキットブレーカー","body":"設定可能なローリングウィンドウ内で大口取引がN回連続すると自動停止。連鎖が始まる前に食い止めます。","accent":"text-rose-400"},{"icon":"🛡️","title":"オーダーブック・デプスガード","body":"すべての注文の前に流動性を検証。薄いオーダーブックへの約定は一切なし。","accent":"text-amber-400"},{"icon":"🧪","title":"ドライランモード","body":"実際の発注を行わずに、完全な執行パスを走らせます。資金リスクゼロでシグナルとサイジングを検証。","accent":"text-cyan-400"},{"icon":"⚖️","title":"取引サイズ下限","body":"すべての注文に最小サイズを強制。負のEVを持つマイクロ取引を自動的に除外します。","accent":"text-emerald-400"}],"ladderTitle":"デプロイメントの段階","ladderSubtitle":"ゼロから本番稼働までの短いチェックリスト。","ladder":[{"stage":"セットアップ","action":"enable_trading: false で1セッション丸ごと実行する。"},{"stage":"最初の取引","action":"シグナルを信頼できるまで copy_percentage は5〜10%に保つ。"},{"stage":"運用中","action":"サーキットブレーカーの作動を監視 — 執行の異常が浮かび上がります。"},{"stage":"本番稼働","action":"投入するつもりの資金だけを入れた専用ウォレットを使う。"}]},"howItWorks":{"eyebrow":"仕組み","headline":"リポジトリからライブボットまで、3ステップ。","description":"ブラックボックスはありません。スクリーンショットと同じRustエンジンを、あなたのマシンで、あなたの鍵で、あなたの資金で動かします。","steps":[{"num":"01","title":"エッジを選ぶ","body":"あなたの仮説に合う戦略と取引所を選択。各ボットは共通エンジン上の、明確に定義された固有の市場エッジです。"},{"num":"02","title":"設定してドライラン","body":"鍵を入れ、リスク上限を設定し、シグナルを信頼できるまで enable_trading: false で実行 — 資金リスクはゼロです。"},{"num":"03","title":"ライブ稼働","body":"選んだ資金を入れた専用ウォレットでライブに切り替え。約定、損益、サーキットブレーカーの状態をリアルタイムTUIで確認します。"}],"getTitle":"得られるもの","gets":["完全なRustソース — MITライセンス、読むのも改変するのも自由","ガイド付きセットアップ — 最初のボット起動を直接サポート","共通リスクレイヤー — サーキットブレーカー、デプスガード、ドライラン、取引サイズ下限","継続的なアップデート — 新しい取引所や戦略の改善をリリースのたびに"],"note":"ソース公開型、ハンズオンのセットアップ付き。アクセスと価格についてはTelegramでご連絡ください。","cta":"Telegramでアクセスを入手"},"cta":{"eyebrow":"始めましょう","headline":"ボットを働かせる準備はできましたか？","description":"直接の会話、要件の相談、有料セットアップはTelegramで。オープンソースリポジトリ、設定ドキュメント、稼働中のコードベースはGitHubで。Telegramの返信は通常数時間以内です。","ctaTelegram":"Telegramで @HarrierOnChain","ctaGithub":"リポジトリを見る","pillars":[{"title":"オープンソース","body":"MITライセンス。コードを読み、フォークし、その上に構築を。"},{"title":"活発にメンテナンス","body":"リポジトリは修正と戦略の改善を定期的にリリースしています。"},{"title":"直通ライン","body":"サポートチケットは不要。ボットを書いた本人と直接話せます。"}]},"footer":{"productName":"PnL Profit","tagline":"Polymarket · Kalshi · Limitless","disclaimerLabel":"免責事項。","rights":"MIT Licensed · 予測市場コミュニティのために構築。"}},
  ko: {"langName":{"en":"English","zh":"简体中文","ru":"Русский"},"nav":{"strategies":"전략","managed":"위탁 운용","venues":"거래소","engine":"엔진","safety":"안전장치","blog":"블로그","contact":"문의","github":"GitHub","telegram":"Telegram","langSwitch":"언어"},"venues":{"eyebrow":"거래소 커버리지","headline":"하나의 엔진, 모든 거래소.","description":"이 엔진은 거래소에 종속되지 않습니다. 호가창이나 포지션 피드를 제공하는 어떤 플랫폼이든 단일 어댑터로 연결됩니다. 현재 7개 거래소가 프로덕션에서 가동 중이고, 2개는 실시간 시세를 연동한 베타 단계이며, 나머지 예측 시장 전반은 어댑터 기반 로드맵으로 확장됩니다. 각 거래소마다 전용 봇 저장소를 갖추고 있습니다.","statusLive":"가동 중","statusBeta":"베타","statusRoadmap":"로드맵","betaNote":"🟡 베타 = 검증된 실시간 시세를 크로스 거래소 차익 엔진에 연동한 상태이며, 전체 전략 실행은 여전히 테스트 중입니다. 이제 PredictIt(실전 자금)와 Manifold(가상 자금 컨센서스 신호)가 Polymarket, Kalshi와 함께 실시간 시세를 공급합니다.","groupLive":"🟢 현재 가동 중","groupTraditional":"전통 / 규제 시장","groupCrypto":"크립토 / 탈중앙화","cardCta":"저장소 열기 →","footnote":"우선 지원이 필요한 거래소가 있나요? 어댑터 작업은 수요 기반으로 진행됩니다. 아직 지원되지 않는 플랫폼에서 거래한다면 대기열 상위로 올라갈 수 있습니다.","footnoteCta":"거래소 요청하기 →"},"managed":{"eyebrow":"위탁 운용 & 카피 트레이딩","headline":"인프라 운영이 부담스럽다면, 저희에게 맡기세요.","description":"동일한 엔진을 서비스로 이용하세요. 위탁 계정을 개설하고, 온체인 리더보드에서 검증된 리더나 전략을 선택하면 호스팅 봇이 대신 운용합니다. 잔고, 손익, 수수료는 실시간 대시보드에서 확인하세요.","statusNote":"🧪 얼리 액세스 베타 — 페이퍼 트레이딩(모의 자금). 자본을 전혀 투입하지 않고도 지금 바로 전체 제품, 리더보드, 수익 구조를 살펴볼 수 있습니다. 실제 자금을 운용하는 위탁 라이브 트레이딩은 대기자 명단으로 제한되어 아직 오픈되지 않았습니다. 커스터디, 보안 감사, 라이선스가 먼저입니다.","stats":[{"value":"359+","label":"GitHub 스타"},{"value":"7 (+2 beta)","label":"가동 중 거래소"},{"value":"10","label":"전략"},{"value":"Paper","label":"베타 모드"}],"featuresTitle":"제공 항목","features":[{"icon":"📈","title":"온체인 리더보드","body":"검증 가능한 온체인 손익(수익 또는 거래량, 1일/7일/30일/전체 기간)으로 순위를 매긴 실제 Polymarket 지갑. 클릭 한 번으로 검증된 트레이더를 복제합니다."},{"icon":"🤖","title":"호스팅 전략 봇","body":"동일한 10가지 전략 엔진을 대신 운용합니다. 키도, 서버도, 운영 부담도 없습니다."},{"icon":"💰","title":"크로스 거래소 차익거래","body":"Polymarket ↔ Kalshi ↔ PredictIt 실시간 시세와 가상 자금 컨센서스 신호로서의 Manifold."},{"icon":"🛡️","title":"동일한 안전 계층","body":"서킷 브레이커, 심도 가드, 거래 하한선 — 오픈소스 엔진의 안전장치를 모든 위탁 계정에 그대로 적용합니다."}],"plansTitle":"얼리 액세스 플랜","plans":[{"name":"Starter","price":"Free","fee":"성과 수수료 없음","forWho":"페이퍼 모드에서 리스크 없이 봇 익히기"},{"name":"Pro","price":"$49 / mo","fee":"10% (하이워터마크)","forWho":"호스팅 봇 + 추가 전략","highlight":true},{"name":"Managed","price":"$199 / mo","fee":"20% (하이워터마크)","forWho":"완전 자동 카피 트레이딩"}],"plansNote":"성과 수수료는 하이워터마크 방식을 적용합니다. 이전 최고점을 넘어선 신규 수익에만 부과되며, 예치금이나 손실 회복분에는 절대 부과되지 않습니다. 표시된 가격은 얼리 액세스 및 페이퍼 베타 기준입니다.","cta":"얼리 액세스 대기자 명단 등록"},"hero":{"badge":"위탁 운용 & 카피 트레이딩 · 페이퍼 얼리 액세스","headlineLine1":"검증된 트레이더를 복제하세요.","headlineLine2":"수익은 자동 운항으로.","ctaTelegram":"앱 열기","ctaGithub":"GitHub에서 보기","stats":[{"label":"주문 체결","value":"< 100ms","unit":"엔드투엔드"},{"label":"이벤트 처리","value":"< 1ms","unit":"이벤트당"},{"label":"기본 메모리","value":"~50MB","unit":"상주"},{"label":"부하 시 CPU","value":"< 5%","unit":"최신 하드웨어"}]},"liveSignal":{"eyebrow":"라이브 시그널","headline":"BTC/USDT — 봇이 주시하는 시장","sub":"호가창에서 직접 스트리밍되는 실시간 현물 가격.","statusLive":"실시간","statusOffline":"오프라인","statusConnecting":"연결 중","pair":"BTC / USDT","sessionLabel":"· 세션","attribution":"차트 제공: TradingView"},"bots":{"eyebrow":"라인업","headline":"10가지 전략, 하나의 엔진.","description":"각 봇은 카피 트레이딩, 차익거래, 마켓 메이킹, 온체인 신호 등 뚜렷하고 명확한 시장 우위를 겨냥합니다. 모두 실전에서 검증된 동일한 실행 코어, 리스크 계층, 거래소 독립 어댑터 스택을 공유합니다. 당신의 논리에 맞는 우위를 고르세요. 인프라는 이미 준비되어 있습니다.","statusProduction":"프로덕션","statusDev":"개발 중","cardCta":"이 봇에 대해 상담하기","cardCtaSuffix":"→ Telegram","items":{"copy-trading":{"title":"카피 트레이딩","tagline":"설정 가능한 사이징과 리스크 한도로 상위 지갑을 자동 복제.","hook":"이미 실력을 입증한 지갑에 알파를 위임하세요.","description":"리서치도, 차트 감시도, 재고민도 필요 없습니다. 봇이 복제하고, 당신은 복리로 불립니다. 하나 이상의 고성과 지갑을 추적해 BUY/SELL 동작을 거의 실시간으로 미러링합니다.","specs":[{"label":"추적 지갑","value":"다중"},{"label":"주문 유형","value":"FAK / GTD"},{"label":"리스크","value":"서킷 브레이커 + 심도"},{"label":"드라이런","value":"완전 지원"}]},"btc-arb":{"title":"BTC 5분 / 15분 / 1시간 차익거래","tagline":"단기 BTC Up/Down 시장에서의 속도.","hook":"엔드투엔드 42ms — 제목을 다 읽기도 전에 이미 호가창 안에.","description":"BTC Up/Down 윈도를 감시합니다. 가격 비효율이 나타나면 봇이 윈도가 닫히기 전에 초저지연 FAK를 넣습니다. 여기서 인간의 반사 신경으로는 겨룰 수 없습니다.","specs":[{"label":"시장","value":"BTC Up/Down 5분–1시간"},{"label":"주문 유형","value":"FAK"},{"label":"실행","value":"~42ms"}]},"cross-arb":{"title":"크로스 거래소 차익거래","tagline":"실전 자금 호가창 전반의 거래소 간 가격 비효율.","hook":"방향이 아니라 스프레드를 확정하세요.","description":"동일한 계약을 Polymarket, Kalshi, PredictIt에서 매칭하고(엄격 매칭 — 허위 페어 없음), 왕복 수수료를 넘어설 때만 그 격차를 포착합니다. 양쪽 모두 헤지되어 손익은 오직 가격 격차 그 자체입니다.","specs":[{"label":"거래소","value":"Polymarket ↔ Kalshi ↔ PredictIt"},{"label":"우위 기준","value":"≥ 수수료, 설정 가능"},{"label":"로깅","value":"전체 손익 추적"}]},"directional-arb":{"title":"방향성 차익거래","tagline":"방향성 편향을 더한 차익거래 기반 전략.","hook":"차익거래에서 출발해, 우위가 더 큰 쪽으로 기웁니다.","description":"Up + Down을 $1 미만으로 조합할 수 있을 때 양쪽을 매수한 뒤, 모델이 저평가로 판단한 쪽을 키웁니다. 차익거래의 하한선을 유지하면서 순포지션은 방향성을 띠게 됩니다. 작은 쪽은 부분 헤지 역할을 합니다.","specs":[{"label":"진입","value":"Up + Down < $1 바스켓"},{"label":"편향","value":"우위 쪽으로 최대 3:1"},{"label":"주문","value":"지정가 전용"}]},"spread-farming":{"title":"스프레드 파밍","tagline":"체계적이고 반복 가능한 미세 우위.","hook":"0.5¢짜리 승리 천 번이 모여 큰 숫자가 됩니다.","description":"절제되고, 반복 가능하며, 최고의 의미로 지루한 — 어떤 시장 국면에서도 살아남는 우위입니다. 스프레드에 자리를 잡고, 체결 조건을 기다렸다가, 일관된 사이징으로 실행합니다.","specs":[{"label":"우위","value":"매수-매도 스프레드"},{"label":"로깅","value":"거래별 + 세션별"}]},"sports":{"title":"스포츠 베팅 실행","tagline":"라이브 스포츠 시장에서 클릭 즉시 베팅하는 속도.","hook":"클릭. 체결. 완료 — 50ms 안에.","description":"다른 모든 수동 베터가 주문을 확정하기도 전에 우위를 앗아가는 라인 변동을 이겨내세요. 실시간 배당과 빠른 FAK 실행을 결합합니다.","specs":[{"label":"종목","value":"NBA, NFL, 축구 +"},{"label":"실행","value":"< 50ms"}]},"resolution-sniper":{"title":"정산 스나이퍼","tagline":"예측 시장 고유의 고승률·저변동성 플레이.","hook":"95¢의 95%+ 확률 → 보장된 $1.00 지급까지 그대로.","description":"어떤 시장도 내놓은 적 없는, 공짜 돈에 가장 가까운 것 — 그리고 예측 시장 밖에서는 존재하지 않습니다. 거의 확정된 결과를 탐색해 정산까지 보유합니다.","specs":[{"label":"확실성","value":"설정 가능"},{"label":"지급","value":"$1.00 / 주"},{"label":"거래소","value":"PM · Kalshi · Limitless"}]},"orderbook-imbalance":{"title":"호가창 불균형","tagline":"외부 데이터가 필요 없는 순수 주문 흐름 신호.","hook":"구독도, 외부 피드도, 먹통 API도 없습니다.","description":"신호는 곧 호가창입니다 — 자기완결적이고, 견고하며, 다른 누구도 당신이 보는 것을 볼 수 없어 선행 매매가 불가능합니다. 500ms 주기로 실시간 OBI를 모니터링합니다.","specs":[{"label":"신호","value":"실시간 호가창 전용"},{"label":"갱신","value":"500ms"},{"label":"거래소","value":"PM · Kalshi · Limitless"}]},"market-making":{"title":"마켓 메이킹","tagline":"유동성이 낮은 예측 시장에서의 수동적 스프레드 수익.","hook":"도박꾼이 아니라 하우스가 되세요.","description":"양쪽에 호가를 대고 체결마다 스프레드를 법니다 — 운이 아니라 거래량에 따라 확장되는 방향 무관 수익입니다. 재고 인식 스큐를 적용한 GTD 주문.","specs":[{"label":"주문 관리","value":"자동 취소 + 재호가"},{"label":"재고","value":"스큐 한도"},{"label":"거래소","value":"Polymarket · Kalshi"}]},"whale-signal":{"title":"온체인 고래 신호","tagline":"가능한 가장 빠른 신호 — 포지션 API보다 3–30초 앞섭니다.","hook":"지구상 어떤 트래커보다 3–30초 앞서.","description":"Polygon 블록 데이터에서 직접. 공개 포지션 API가 존재를 인지하기도 전에 고래의 주문을 봅니다. 블록이 도착하는 즉시 ABI 콜데이터를 디코딩합니다.","specs":[{"label":"소스","value":"Polygon 블록"},{"label":"선행 시간","value":"3–30s"},{"label":"디코딩","value":"ABI 콜데이터"}]}}},"engine":{"eyebrow":"내부 구조","headlineLine1":"Rust로 설계했습니다.","headlineLine2":"예측 시장에 맞춰 튜닝했습니다.","description":"Rust가 보장하는 안정성과 Tokio 비동기 런타임이 가능케 하는 속도 위에 구축했습니다. 모든 전략이 동일한 실행 경로, 동일한 리스크 훅, 동일한 관측 계층을 공유합니다.","features":[{"icon":"🦀","title":"Rust + Tokio","body":"거래 도중 GC 멈춤 없음. 동시 실행에서 데이터 레이스 없음. 널 포인터 사고 없음. 압박 속에서도 가볍고, 예측 가능하며, 빠릅니다."},{"icon":"🔌","title":"거래소 독립 어댑터","body":"Polymarket, Kalshi, Limitless를 아우르는 단일 공유 API. 전략은 플랫폼별 타입이 아니라 VenueId를 참조합니다."},{"icon":"🖥️","title":"실시간 TUI","body":"ratatui 기반 터미널 인터페이스로 실시간 로그 스트리밍, 심각도별 색상 구분, 봇별 상태 뷰를 제공합니다."},{"icon":"⚙️","title":"FAK & GTD 주문","body":"자동 마켓 ID 해석을 갖춘 Fill-or-Kill 및 Good-Till-Date 주문 유형. 동시 실행, 속도 제한 적용."}],"performanceEyebrow":"성능","performanceHeadline":"밀리초가 돈이 되는 순간에 의미 있는 숫자들.","metrics":[{"metric":"< 1ms","label":"이벤트 처리"},{"metric":"< 100ms","label":"주문 체결"},{"metric":"~200ms","label":"포지션 폴링"},{"metric":"~50MB","label":"기본 메모리"},{"metric":"< 5%","label":"CPU 사용률"},{"metric":"25 / 10s","label":"속도 제한 (설정 가능)"}]},"safety":{"eyebrow":"리스크 우선 설계","headlineLine1":"안전장치 없는 속도는","headlineLine2":"값비싼 손실일 뿐입니다.","description":"모든 주문은 거래소에 도달하기 전 4단계 리스크 파이프라인을 통과합니다. 서킷 브레이커, 심도 검사, 사이즈 하한선, 완전 드라이런 — 모든 봇이 사용하는 동일한 실행 코어에 통합되어 있습니다.","layers":[{"icon":"🛑","title":"서킷 브레이커","body":"설정 가능한 롤링 윈도 내에서 대형 거래가 N회 연속되면 자동 정지합니다. 연쇄 반응이 시작되기 전에 멈춥니다.","accent":"text-rose-400"},{"icon":"🛡️","title":"호가창 심도 가드","body":"모든 주문 전에 유동성을 검증합니다. 얕은 호가창으로의 체결은 절대 없습니다.","accent":"text-amber-400"},{"icon":"🧪","title":"드라이런 모드","body":"실제 주문 없이 전체 실행 경로를 가동합니다. 자본을 전혀 투입하지 않고 신호와 사이징을 검증하세요.","accent":"text-cyan-400"},{"icon":"⚖️","title":"거래 사이즈 하한선","body":"모든 주문에 최소 사이즈를 강제합니다. 마이너스 EV 미세 거래를 자동으로 걸러냅니다.","accent":"text-emerald-400"}],"ladderTitle":"배포 단계","ladderSubtitle":"제로에서 프로덕션까지 가기 위한 짧은 체크리스트.","ladder":[{"stage":"설정","action":"enable_trading: false 상태로 한 세션 전체를 실행하세요."},{"stage":"첫 거래","action":"신호를 신뢰하기 전까지 copy_percentage를 5–10%로 유지하세요."},{"stage":"운영 중","action":"서킷 브레이커 발동을 주시하세요 — 실행 이상 징후를 드러냅니다."},{"stage":"프로덕션","action":"투입할 자본만 담긴 전용 지갑을 사용하세요."}]},"howItWorks":{"eyebrow":"작동 방식","headline":"저장소에서 라이브 봇까지 세 단계.","description":"블랙박스가 아닙니다. 스크린샷에 나온 것과 동일한 Rust 엔진을 당신의 기기에서, 당신의 키로, 당신의 자본으로 직접 실행합니다.","steps":[{"num":"01","title":"우위를 고르세요","body":"당신의 논리에 맞는 전략과 거래소를 선택하세요. 각 봇은 공유 엔진 위의 뚜렷하고 명확한 시장 우위입니다."},{"num":"02","title":"설정 & 드라이런","body":"키를 넣고, 리스크 한도를 정한 뒤, 신호를 신뢰하기 전까지 enable_trading: false로 실행하세요 — 자본 위험 없이."},{"num":"03","title":"라이브 전환","body":"당신이 정한 자본으로 전용 지갑에서 라이브로 전환하세요. 실시간 TUI에서 체결, 손익, 서킷 브레이커 상태를 확인하세요."}],"getTitle":"제공 항목","gets":["전체 Rust 소스 — MIT 라이선스, 자유롭게 읽고 수정 가능","가이드 설정 — 첫 봇 실행을 직접 지원","공유 리스크 계층 — 서킷 브레이커, 심도 가드, 드라이런, 거래 하한선","지속적 업데이트 — 새 거래소와 전략 개선을 출시 즉시 반영"],"note":"직접 지원이 포함된 소스 공개 방식. 접근 권한과 가격은 Telegram으로 문의하세요.","cta":"Telegram으로 접근 권한 받기"},"cta":{"eyebrow":"시작하기","headline":"봇을 일하게 할 준비가 되셨나요?","description":"직접 대화, 범위 논의, 유료 설정은 Telegram으로. 오픈소스 저장소, 설정 문서, 라이브 코드베이스는 GitHub으로. Telegram 응답 시간은 보통 몇 시간 이내입니다.","ctaTelegram":"Telegram의 @HarrierOnChain","ctaGithub":"저장소 둘러보기","pillars":[{"title":"오픈소스","body":"MIT 라이선스. 코드를 읽고, 포크하고, 그 위에 만드세요."},{"title":"활발한 유지보수","body":"저장소는 수정 사항과 전략 개선을 정기적으로 배포합니다."},{"title":"직통 연결","body":"지원 티켓 없음. 봇을 만든 사람과 직접 이야기합니다."}]},"footer":{"productName":"PnL Profit","tagline":"Polymarket · Kalshi · Limitless","disclaimerLabel":"면책 조항.","rights":"MIT 라이선스 · 예측 시장 커뮤니티를 위해 제작."}},
  ar: {"langName":{"en":"English","zh":"简体中文","ru":"Русский"},"nav":{"strategies":"الاستراتيجيات","managed":"الإدارة","venues":"المنصات","engine":"المحرك","safety":"الأمان","blog":"المدونة","contact":"تواصل","github":"GitHub","telegram":"Telegram","langSwitch":"اللغة"},"venues":{"eyebrow":"تغطية المنصات","headline":"محرك واحد. كل المنصات.","description":"المحرك مستقل عن المنصة — أي منصة لها دفتر أوامر أو تدفق مراكز تندمج عبر محوّل واحد. سبع منصات تعمل في الإنتاج اليوم، واثنتان في مرحلة بيتا ببيانات سوق حية، وبقية عالم أسواق التنبؤ ضمن خارطة طريق قائمة على المحوّلات. لكل منصة مستودع بوت مخصص خاص بها.","statusLive":"مباشر","statusBeta":"بيتا","statusRoadmap":"خارطة الطريق","betaNote":"🟡 بيتا = بيانات أسعار حية ومُتحقَّق منها موصولة بمحرك المراجحة بين المنصات؛ تنفيذ الاستراتيجية الكامل ما زال قيد الاختبار. PredictIt (بأموال حقيقية) وManifold (إشارة إجماع بأموال تجريبية) يغذيان الآن أسعارًا حية إلى جانب Polymarket وKalshi.","groupLive":"🟢 مباشر اليوم","groupTraditional":"تقليدية / منظَّمة","groupCrypto":"كريبتو / لامركزية","cardCta":"فتح المستودع ←","footnote":"تريد أولوية لمنصة معينة؟ عمل المحوّلات مدفوع بالطلب — إذا كنت تتداول على منصة ليست مباشرة بعد، يمكن تقديمها في قائمة الانتظار.","footnoteCta":"اطلب منصة ←"},"managed":{"eyebrow":"الإدارة ونسخ التداول","headline":"لا تريد تشغيل البنية التحتية؟ دعنا نتولى ذلك.","description":"تداول بنفس المحرك كخدمة. افتح حسابًا مُدارًا، اختر متصدرًا مثبتًا من لوحة الصدارة على السلسلة أو استراتيجية، ودع البوتات المستضافة تعمل — تتابع الرصيد والأرباح والخسائر والرسوم على لوحة تحكم حية.","statusNote":"🧪 بيتا وصول مبكر — تداول ورقي (أموال محاكاة). استكشف المنتج الكامل ولوحة الصدارة والاقتصاديات اليوم دون أي رأس مال معرّض للخطر. التداول المُدار الحي بأموال حقيقية محجوز خلف قائمة الانتظار وغير متاح بعد — الحفظ الآمن والتدقيق الأمني والترخيص تأتي أولًا.","stats":[{"value":"359+","label":"نجوم GitHub"},{"value":"7 (+2 beta)","label":"منصات مباشرة"},{"value":"10","label":"استراتيجيات"},{"value":"Paper","label":"وضع البيتا"}],"featuresTitle":"ما الذي تحصل عليه","features":[{"icon":"📈","title":"لوحة صدارة على السلسلة","body":"محافظ Polymarket حقيقية مُرتَّبة بأرباح وخسائر قابلة للتحقق على السلسلة (ربح أو حجم، يوم/7 أيام/30 يومًا/كل الأوقات). نقرة واحدة لنسخ متداول مثبت."},{"icon":"🤖","title":"بوتات استراتيجية مستضافة","body":"نفس محرك الاستراتيجيات العشر، يُشغَّل لأجلك. بلا مفاتيح، بلا خوادم، بلا عمليات."},{"icon":"💰","title":"مراجحة بين المنصات","body":"تسعير حي عبر Polymarket ↔ Kalshi ↔ PredictIt، مع Manifold كإشارة إجماع بأموال تجريبية."},{"icon":"🛡️","title":"نفس طبقة الأمان","body":"قاطع دائرة، حارس عمق، حد أدنى للصفقة — الضمانات من المحرك مفتوح المصدر، مطبَّقة على كل حساب مُدار."}],"plansTitle":"خطط الوصول المبكر","plans":[{"name":"Starter","price":"Free","fee":"بلا رسوم أداء","forWho":"تعلّم البوتات في الوضع الورقي، بلا مخاطرة"},{"name":"Pro","price":"$49 / mo","fee":"10% (علامة الذروة)","forWho":"بوتات مستضافة + مزيد من الاستراتيجيات","highlight":true},{"name":"Managed","price":"$199 / mo","fee":"20% (علامة الذروة)","forWho":"نسخ تداول كامل، دون تدخل"}],"plansNote":"رسوم الأداء تستخدم علامة الذروة — تُحتسب فقط على الربح الجديد فوق ذروتك السابقة، لا على الإيداعات ولا على استرداد التراجع. الأسعار المعروضة للوصول المبكر وبيتا الورقية.","cta":"انضم إلى قائمة انتظار الوصول المبكر"},"hero":{"badge":"الإدارة ونسخ التداول · وصول ورقي مبكر","headlineLine1":"انسخ متداولين مثبتين.","headlineLine2":"ربح على الطيار الآلي.","ctaTelegram":"افتح التطبيق","ctaGithub":"شاهد على GitHub","stats":[{"label":"تنفيذ الأوامر","value":"< 100ms","unit":"من الطرف إلى الطرف"},{"label":"معالجة الأحداث","value":"< 1ms","unit":"لكل حدث"},{"label":"خط أساس الذاكرة","value":"~50MB","unit":"مقيمة"},{"label":"المعالج تحت الحمل","value":"< 5%","unit":"عتاد حديث"}]},"liveSignal":{"eyebrow":"إشارة حية","headline":"BTC/USDT — السوق الذي تراقبه البوتات","sub":"سعر فوري لحظي، متدفق مباشرة من دفتر الأوامر.","statusLive":"مباشر","statusOffline":"غير متصل","statusConnecting":"جارٍ الاتصال","pair":"BTC / USDT","sessionLabel":"· الجلسة","attribution":"الرسوم البيانية بواسطة TradingView"},"bots":{"eyebrow":"التشكيلة","headline":"عشر استراتيجيات. محرك واحد.","description":"كل بوت يستهدف ميزة سوقية مميزة ومحددة بوضوح — نسخ تداول، مراجحة، صناعة سوق، إشارات على السلسلة. جميعها تشترك في نفس نواة التنفيذ المُختبَرة، وطبقة المخاطر، وحزمة المحوّلات المستقلة عن المنصة. اختر الميزة التي تناسب رؤيتك؛ البنية التحتية جاهزة بالفعل.","statusProduction":"إنتاج","statusDev":"قيد التطوير","cardCta":"ناقش هذا البوت","cardCtaSuffix":"← Telegram","items":{"copy-trading":{"title":"نسخ التداول","tagline":"انسخ أفضل المحافظ تلقائيًا بأحجام وحدود مخاطر قابلة للتهيئة.","hook":"أسنِد الألفا لمحافظ أثبتت بالفعل أنها تمتلكها.","description":"بلا بحث، بلا مراقبة رسوم بيانية، بلا تردد — البوت ينسخ وأنت تراكم. يتتبع محفظة عالية الأداء أو أكثر وينسخ إجراءات البيع والشراء بشكل شبه فوري.","specs":[{"label":"المحافظ المتتبَّعة","value":"متعددة"},{"label":"أنواع الأوامر","value":"FAK / GTD"},{"label":"المخاطر","value":"قاطع دائرة + عمق"},{"label":"التشغيل التجريبي","value":"مدعوم بالكامل"}]},"btc-arb":{"title":"مراجحة BTC 5د / 15د / ساعة","tagline":"سرعة في أسواق BTC صعود/هبوط قصيرة النافذة.","hook":"42ms من الطرف إلى الطرف — في دفتر الأوامر قبل أن تنهي قراءة العنوان.","description":"يراقب نوافذ BTC صعود/هبوط. عند ظهور خلل في التسعير، يضع البوت أمر FAK منخفض الكمون قبل إغلاق النافذة. ردود الفعل البشرية لا تنافس هنا.","specs":[{"label":"الأسواق","value":"BTC صعود/هبوط 5د–ساعة"},{"label":"نوع الأمر","value":"FAK"},{"label":"التنفيذ","value":"~42ms"}]},"cross-arb":{"title":"مراجحة بين المنصات","tagline":"أخطاء تسعير بين المنصات عبر دفاتر بأموال حقيقية.","hook":"اقفل الفارق، لا الاتجاه.","description":"يُطابَق العقد ذاته عبر Polymarket وKalshi وPredictIt (مطابقة صارمة — بلا أزواج زائفة)، ويُلتقط الفارق فقط عندما يتجاوز رسوم الذهاب والإياب. كلا الطرفين محوَّط — أرباحك وخسائرك هي فجوة السعر نفسها.","specs":[{"label":"المنصات","value":"Polymarket ↔ Kalshi ↔ PredictIt"},{"label":"عتبة الميزة","value":"≥ الرسوم، قابلة للتهيئة"},{"label":"التسجيل","value":"تتبع كامل للأرباح والخسائر"}]},"directional-arb":{"title":"مراجحة اتجاهية","tagline":"أساس مراجحة مع ميل اتجاهي.","hook":"ابدأ من المراجحة، ثم مِل نحو الجانب الأكثر ميزة.","description":"يشتري كلا الجانبين عندما يمكن تجميع الصعود + الهبوط بأقل من دولار، ثم يزيد حجم الجانب الذي يقيّمه النموذج مبخوسًا — مع الحفاظ على أرضية مراجحة بينما يصبح المركز الصافي اتجاهيًا. يعمل الجانب الأصغر كتحوّط جزئي.","specs":[{"label":"الدخول","value":"سلة صعود + هبوط < $1"},{"label":"الميل","value":"حتى 3:1 نحو الميزة"},{"label":"الأوامر","value":"أوامر حدّية فقط"}]},"spread-farming":{"title":"حصاد الفروقات","tagline":"ميزات دقيقة منهجية وقابلة للتكرار.","hook":"ألف ربح بقيمة 0.5¢ يتراكم إلى رقم كبير واحد.","description":"منضبط وقابل للتكرار ومُمل بأفضل معنى — نوع الميزة الذي ينجو من كل نظام سوقي. يجلس عند الفارق، وينتظر شروط التنفيذ، وينفّذ بأحجام ثابتة.","specs":[{"label":"الميزة","value":"فارق العرض والطلب"},{"label":"التسجيل","value":"لكل صفقة + الجلسة"}]},"sports":{"title":"تنفيذ رهانات رياضية","tagline":"سرعة النقر للرهان على أسواق رياضية حية.","hook":"انقر. تنفّذ. تم — في أقل من 50ms.","description":"اسبق تحرك الخط الذي يكلّف كل مراهن يدوي آخر ميزته قبل أن يؤكد الأمر أصلًا. احتمالات لحظية مقترنة بتنفيذ FAK سريع.","specs":[{"label":"الرياضات","value":"NBA، NFL، كرة قدم +"},{"label":"التنفيذ","value":"< 50ms"}]},"resolution-sniper":{"title":"قناص التسوية","tagline":"صفقات بمعدل فوز عالٍ وتباين منخفض فريدة لأسواق التنبؤ.","hook":"احتمالات 95%+ عند 95¢ ← اركب حتى عائد $1.00 المضمون.","description":"أقرب شيء لمال مجاني قدّمه أي سوق على الإطلاق — ولا وجود له خارج أسواق التنبؤ. يمسح بحثًا عن نتائج شبه مؤكدة ويحتفظ بها حتى التسوية.","specs":[{"label":"اليقين","value":"قابل للتهيئة"},{"label":"العائد","value":"$1.00 / سهم"},{"label":"المنصات","value":"PM · Kalshi · Limitless"}]},"orderbook-imbalance":{"title":"اختلال دفتر الأوامر","tagline":"إشارة تدفق أوامر خالصة، دون حاجة لبيانات خارجية.","hook":"بلا اشتراكات، بلا تغذيات خارجية، بلا واجهات برمجة معطّلة.","description":"الإشارة هي دفتر الأوامر — مكتفٍ ذاتيًا، محكم، ويستحيل استباقه لأن لا أحد غيرك يرى ما تراه. يراقب اختلال دفتر الأوامر الحي بتحديث كل 500ms.","specs":[{"label":"الإشارة","value":"دفتر الأوامر الحي فقط"},{"label":"التحديث","value":"500ms"},{"label":"المنصات","value":"PM · Kalshi · Limitless"}]},"market-making":{"title":"صناعة السوق","tagline":"دخل سلبي من الفروقات على أسواق تنبؤ قليلة السيولة.","hook":"كن البيت، لا المقامر.","description":"سعّر كلا الجانبين، واكسب الفارق عند كل تنفيذ — دخل مستقل عن الاتجاه يتوسّع مع الحجم، لا مع الحظ. أوامر GTD بانحراف واعٍ بالمخزون.","specs":[{"label":"إدارة الأوامر","value":"إلغاء + إعادة تسعير تلقائي"},{"label":"المخزون","value":"حدود الانحراف"},{"label":"المنصات","value":"Polymarket · Kalshi"}]},"whale-signal":{"title":"إشارة الحيتان على السلسلة","tagline":"أسرع إشارة ممكنة — 3–30ث قبل واجهة برمجة المراكز.","hook":"3–30 ثانية قبل كل متتبع آخر على الكوكب.","description":"مباشرة من بيانات كتل Polygon. ترى أمر الحوت قبل أن تعترف واجهة برمجة المراكز العامة بوجوده أصلًا. تُفكَّك بيانات ABI لحظة وصول الكتل.","specs":[{"label":"المصدر","value":"كتل Polygon"},{"label":"زمن السبق","value":"3–30ث"},{"label":"التفكيك","value":"بيانات ABI"}]}}},"engine":{"eyebrow":"تحت الغطاء","headlineLine1":"مُهندَس بلغة Rust.","headlineLine2":"مُضبَط لأسواق التنبؤ.","description":"مبني على الضمانات التي تمنحها لك Rust — والسرعة التي يتيحها زمن تشغيل Tokio غير المتزامن. كل استراتيجية تشترك في نفس مسار التنفيذ، ونفس خطاطيف المخاطر، ونفس سطح المراقبة.","features":[{"icon":"🦀","title":"Rust + Tokio","body":"بلا توقفات جمع مهملات أثناء الصفقة. بلا تسابق بيانات في التنفيذ المتزامن. بلا مفاجآت مؤشرات فارغة. رشيق، متوقع، سريع تحت الضغط."},{"icon":"🔌","title":"محوّلات مستقلة عن المنصة","body":"سطح واجهة برمجة مشترك عبر Polymarket وKalshi وLimitless. تشير الاستراتيجيات إلى VenueId — لا إلى أنواع خاصة بالمنصة."},{"icon":"🖥️","title":"واجهة طرفية لحظية","body":"واجهة طرفية مدعومة بـ ratatui مع تدفق سجلات حي، وشدة مرمّزة بالألوان، وعروض حالة لكل بوت."},{"icon":"⚙️","title":"أوامر FAK و GTD","body":"أنواع أوامر ملء-أو-إلغاء وصالح-حتى-تاريخ مع حل تلقائي لمعرّف السوق. تنفيذ متزامن، محدود المعدل."}],"performanceEyebrow":"الأداء","performanceHeadline":"أرقام تهم حين تكلّف الميلي ثانية أموالًا.","metrics":[{"metric":"< 1ms","label":"معالجة الأحداث"},{"metric":"< 100ms","label":"تنفيذ الأوامر"},{"metric":"~200ms","label":"استطلاع المراكز"},{"metric":"~50MB","label":"خط أساس الذاكرة"},{"metric":"< 5%","label":"استخدام المعالج"},{"metric":"25 / 10s","label":"حد المعدل (قابل للتهيئة)"}]},"safety":{"eyebrow":"تصميم يضع المخاطر أولًا","headlineLine1":"السرعة بلا ضمانات","headlineLine2":"ليست سوى خسارة باهظة.","description":"كل أمر يمر عبر خط أنابيب مخاطر من أربع طبقات قبل أن يصل إلى المنصة. قواطع دائرة، وفحوص عمق، وحدود دنيا للحجم، وتشغيل تجريبي كامل — موصولة بنفس نواة التنفيذ التي يستخدمها كل بوت.","layers":[{"icon":"🛑","title":"قاطع الدائرة","body":"يتوقف تلقائيًا بعد N صفقات كبيرة متتالية داخل نافذة متحركة قابلة للتهيئة. يوقف الانهيارات قبل أن تبدأ.","accent":"text-rose-400"},{"icon":"🛡️","title":"حارس عمق دفتر الأوامر","body":"يتحقق من السيولة قبل كل أمر. بلا تنفيذ في دفاتر رقيقة — نقطة.","accent":"text-amber-400"},{"icon":"🧪","title":"وضع التشغيل التجريبي","body":"مسار التنفيذ الكامل يعمل دون وضع أوامر حقيقية. تحقق من الإشارات والأحجام دون أي رأس مال معرّض للخطر.","accent":"text-cyan-400"},{"icon":"⚖️","title":"الحد الأدنى لحجم الصفقة","body":"فرض حد أدنى للحجم على كل أمر. يصفّي الصفقات الدقيقة سالبة القيمة المتوقعة تلقائيًا.","accent":"text-emerald-400"}],"ladderTitle":"سُلَّم النشر","ladderSubtitle":"قائمة تحقق قصيرة للانتقال من الصفر إلى الإنتاج.","ladder":[{"stage":"الإعداد","action":"شغّل بإعداد enable_trading: false لجلسة كاملة واحدة."},{"stage":"أولى الصفقات","action":"أبقِ copy_percentage عند 5–10% حتى تثق بالإشارة."},{"stage":"المتابعة","action":"راقب تفعيلات قاطع الدائرة — فهي تكشف شذوذ التنفيذ."},{"stage":"الإنتاج","action":"استخدم محفظة مخصصة برأس المال الذي تنوي نشره فقط."}]},"howItWorks":{"eyebrow":"كيف يعمل","headline":"من المستودع إلى بوت مباشر في ثلاث خطوات.","description":"بلا صندوق أسود. تشغّل نفس محرك Rust الظاهر في اللقطات — على جهازك، بمفاتيحك، برأس مالك.","steps":[{"num":"01","title":"اختر ميزتك","body":"اختر الاستراتيجية والمنصة اللتين تناسبان رؤيتك. كل بوت ميزة سوقية مميزة ومحددة بوضوح على المحرك المشترك."},{"num":"02","title":"هيّئ وشغّل تجريبيًا","body":"أدخل مفاتيحك، وحدد حدود المخاطر، وشغّل بإعداد enable_trading: false حتى تثق بالإشارة — بلا رأس مال معرّض للخطر."},{"num":"03","title":"انطلق مباشرة","body":"بدّل إلى الوضع المباشر على محفظة مخصصة برأس المال الذي تختاره. راقب التنفيذات والأرباح والخسائر وحالة قاطع الدائرة من الواجهة الطرفية اللحظية."}],"getTitle":"ما الذي تحصل عليه","gets":["مصدر Rust كامل — مرخّص بـ MIT، لك أن تقرأه وتعدّله","إعداد موجَّه — مساعدة مباشرة لتشغيل أول بوت لك","طبقة المخاطر المشتركة — قاطع دائرة، حارس عمق، تشغيل تجريبي، حد أدنى للصفقة","تحديثات مستمرة — منصات جديدة وترقيات استراتيجيات فور صدورها"],"note":"متاح المصدر مع إعداد عملي مباشر. راسِلنا على Telegram للوصول والتسعير.","cta":"احصل على الوصول عبر Telegram"},"cta":{"eyebrow":"ابدأ الآن","headline":"مستعد لتشغيل بوت؟","description":"Telegram للحوار المباشر، ومناقشة النطاق، أو الإعداد المدفوع. GitHub لمستودع المصدر المفتوح، ووثائق التهيئة، والشيفرة الحية. زمن الرد على Telegram عادةً بضع ساعات.","ctaTelegram":"@HarrierOnChain على Telegram","ctaGithub":"تصفّح المستودع","pillars":[{"title":"مفتوح المصدر","body":"مرخّص بـ MIT. اقرأ الشيفرة، انسخها، ابنِ عليها."},{"title":"مصان بنشاط","body":"المستودع يشحن إصلاحات وترقيات استراتيجيات بانتظام."},{"title":"خط مباشر","body":"بلا تذاكر دعم. تتحدث إلى الشخص الذي كتب البوت."}]},"footer":{"productName":"PnL Profit","tagline":"Polymarket · Kalshi · Limitless","disclaimerLabel":"إخلاء مسؤولية.","rights":"مرخّص بـ MIT · بُني لمجتمع أسواق التنبؤ."}},
};

const messages = Object.fromEntries(
  LOCALES.map((l) => {
    const code = l.code as Lang;
    if (code === 'en' || code === 'zh' || code === 'ru') return [code, full[code]];
    return [code, deepMerge<Messages>(full.en, overrides[code] ?? {})];
  }),
) as Record<Lang, Messages>;

// Languages actually ready to show in the switcher: EN/ZH/RU plus any locale
// whose override has been filled in. New languages light up automatically as
// their translations land in `overrides` above.
export const READY_LANGS: Lang[] = LOCALES.map((l) => l.code as Lang).filter(
  (code) => code === 'en' || code === 'zh' || code === 'ru' || Object.keys(overrides[code] ?? {}).length > 0,
);

export function useT(): Messages {
  const { lang } = useLang();
  return messages[lang] ?? full.en;
}

export { messages };
