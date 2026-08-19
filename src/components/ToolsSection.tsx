import { TOOLS_URL } from '../bots';

// Self-contained (English-first) section for the on-chain tools suite — a distinct
// product from the copy-trading engine, so it doesn't route through the engine i18n.
const TOOLS = [
  { icon: '🪙', title: 'Token Creator', body: 'Deploy a clean ERC-20 — no tax, no blacklist. Optional mint, burn, or renounce at launch.' },
  { icon: '🚀', title: 'Fair Launch', body: 'One transaction: deploy the token, seed liquidity, and lock the LP — sniper-proof and rug-proof.' },
  { icon: '🛡️', title: 'Rug Check', body: 'Read any token’s owner, mint rights, and holder concentration before you buy.' },
  { icon: '📤', title: 'Multisender', body: 'Airdrop an ERC-20 or ETH to hundreds of wallets in a single transaction.' },
  { icon: '💧', title: 'Liquidity + LP Lock', body: 'Add Uniswap liquidity and lock the LP tokens to earn holder trust.' },
  { icon: '📸', title: 'Snapshots', body: 'Export a token’s holder list at any block — ready for airdrops.' },
];

export function ToolsSection() {
  return (
    <section id="tools" className="py-24 border-t border-border-subtle">
      <div className="container-x">
        <div className="max-w-3xl mb-10">
          <div className="text-sm font-semibold text-green-400 uppercase tracking-wider mb-3">On-chain tools</div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">Token tools for Robinhood Chain</h2>
          <p className="text-lg text-zinc-400 leading-relaxed">
            A non-custodial toolkit to create, launch, and manage tokens on Robinhood Chain — token creator,
            fair launch with locked liquidity, multisender, rug check, and more. You sign every action; we never touch your keys.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {TOOLS.map((tool) => (
            <div key={tool.title} className="card p-5 flex gap-4">
              <div className="text-2xl shrink-0" aria-hidden>{tool.icon}</div>
              <div>
                <div className="font-bold text-white mb-1">{tool.title}</div>
                <div className="text-sm text-zinc-400 leading-relaxed">{tool.body}</div>
              </div>
            </div>
          ))}
        </div>

        <a href={TOOLS_URL} target="_blank" rel="noreferrer" className="btn-primary text-base px-7 py-3.5">
          <span>Open Tools →</span>
        </a>
      </div>
    </section>
  );
}
