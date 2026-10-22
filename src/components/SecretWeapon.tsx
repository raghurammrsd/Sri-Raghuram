import React from 'react';
import { Flame } from 'lucide-react';

export const SecretWeapon: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 border-b border-white/[0.08] relative overflow-hidden bg-[#0c0c0e]">
      {/* Subtle flame accent background glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-honey-accent/[0.03] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Index Marker */}
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-honey-accent bg-honey-accent/10 border border-honey-accent/20 px-2.5 py-1 rounded">
            [ 08 / 09 ]
          </span>
          <span className="font-mono text-xs sm:text-sm tracking-wider text-honey-muted uppercase">
            // THE SECRET WEAPON
          </span>
        </div>

        {/* Honey Bold Headline */}
        <div className="mb-10">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-honey-bone uppercase leading-[1.05]">
            Kill them with sweetness.
            <br />
            <span className="text-honey-accent">(Or Greek Fire.)</span>
          </h2>
        </div>

        {/* The Narrative Story */}
        <div className="text-honey-muted text-base sm:text-xl font-normal leading-relaxed space-y-6 max-w-3xl">
          <p>
            In 678 AD, a Saracen Fleet of over 100 warships set sail toward the storied seawalls of Constantinople.
            Upon arrival, they were greeted by a dozen or so pitiful-looking watercraft that made up the far smaller Byzantine Navy.
          </p>

          <p>
            Licking their chops, the Saracens moved to surround them. By the time they saw the sun catch the thin bronze tubes jutting from the prows of the Byzantine vessels, it was too late.
            Thousands of gallons of molten fire erupted atop the unsuspecting fleet, engulfing the ships and the sea in a fiery inferno.
          </p>

          <p>
            It was no ordinary fire, but a wet fire that spread along the surface of the ocean and adhered to wood and flesh like glue. History received its first glimpse of the Byzantine secret weapon: <strong className="text-honey-bone font-semibold">Greek Fire</strong>.
          </p>

          <p className="pt-4 border-t border-white/[0.08] text-honey-bone">
            In modern AI, thousands of teams are racing to throw sheer brute compute at coding agents: million-token context windows, brute-force file grepping, and endless API loops.
          </p>

          <p>
            The secret weapon isn’t larger prompts. It’s <strong className="text-honey-accent font-semibold">deterministic AST intelligence</strong>.
            Instantaneous symbol resolution, call graph topologies, and exact line-level evidence delivered directly to the agent via MCP.
          </p>

          <div className="pt-6 font-mono text-xs sm:text-sm text-honey-darkMuted uppercase tracking-wider flex items-center gap-3">
            <Flame className="w-4 h-4 text-honey-accent animate-pulse" />
            <span>THE RECIPE: AST PARSING + INCREMENTAL SQLITE + MCP PROTOCOL + CODEGRAPH</span>
          </div>
        </div>
      </div>
    </section>
  );
};
