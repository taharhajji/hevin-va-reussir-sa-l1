import { useEffect, useState } from "react";

/**
 * LovePopup
 * Affiche un petit pop-up motivant toutes les 3 minutes :
 *   « HEVIN C'EST LE DERNIER PARTIEL JE T'AIME »
 * Animé, refermable, et se rouvre automatiquement après l'intervalle.
 */
export default function LovePopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Premier déclenchement après 3 min, puis toutes les 3 min.
    const interval = setInterval(() => {
      setOpen(true);
    }, 3 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  // Auto-fermeture après 15s pour ne pas bloquer indéfiniment.
  useEffect(() => {
    if (!open) return;
    const t = setTimeout(() => setOpen(false), 15_000);
    return () => clearTimeout(t);
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 pointer-events-none"
      aria-live="polite"
    >
      {/* Voile très léger */}
      <div className="absolute inset-0 bg-black/30 pointer-events-auto" onClick={() => setOpen(false)} />

      {/* Carte popup */}
      <div
        className="relative pointer-events-auto max-w-md w-full rounded-3xl bg-gradient-to-br from-rose-500 via-pink-500 to-fuchsia-600 text-white shadow-2xl p-6 sm:p-8 text-center animate-popin"
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute top-2 right-3 text-white/80 hover:text-white text-2xl leading-none"
          aria-label="Fermer"
        >
          ×
        </button>

        <div className="text-5xl mb-3 animate-bounce">💖</div>
        <h2 className="font-display font-extrabold text-2xl sm:text-3xl tracking-tight drop-shadow">
          HEVIN
        </h2>
        <p className="mt-2 text-lg sm:text-xl font-bold">
          C'EST LE DERNIER PARTIEL
        </p>
        <p className="mt-2 text-xl sm:text-2xl font-extrabold">
          JE T'AIME 💕
        </p>

        <div className="mt-4 flex justify-center gap-2 text-2xl">
          <span className="animate-pulse">✨</span>
          <span className="animate-pulse [animation-delay:150ms]">🚀</span>
          <span className="animate-pulse [animation-delay:300ms]">💪</span>
          <span className="animate-pulse [animation-delay:450ms]">🌹</span>
          <span className="animate-pulse [animation-delay:600ms]">✨</span>
        </div>
      </div>

      <style>{`
        @keyframes popin {
          0%   { transform: scale(0.6) rotate(-6deg); opacity: 0; }
          60%  { transform: scale(1.08) rotate(2deg);  opacity: 1; }
          100% { transform: scale(1)    rotate(0deg);  opacity: 1; }
        }
        .animate-popin { animation: popin 0.45s cubic-bezier(.2,.8,.2,1.2) both; }
      `}</style>
    </div>
  );
}
