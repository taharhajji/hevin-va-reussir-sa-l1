import { useEffect } from "react";

type Props = {
  /** YouTube video ID (the part after `v=` in the URL). */
  youtubeId: string;
  /** Vidéo title shown above the player. */
  title?: string;
  /** Author / channel name. */
  author?: string;
  /** Called when the user closes the overlay. */
  onClose: () => void;
};

/**
 * Plein écran modal qui joue une vidéo YouTube directement sur le site.
 *
 * Utilise `youtube-nocookie.com` (mode confidentialité de Google) qui :
 * - n'écrit pas de cookies de tracking avant que la vidéo ne soit lue
 * - laisse les bloqueurs de pub du navigateur (uBlock Origin, etc.) opérer
 *   normalement
 *
 * Paramètres d'embed utilisés :
 * - `rel=0`         → pas de vidéos suggérées d'autres chaînes à la fin
 * - `modestbranding=1` → réduit le logo YouTube
 * - `iv_load_policy=3`  → cache les annotations
 * - `autoplay=1`    → la vidéo démarre dès l'ouverture (muted=0 OK car
 *                     l'utilisateur a cliqué avant pour ouvrir l'overlay)
 */
export default function VideoOverlay({ youtubeId, title, author, onClose }: Props) {
  // Verrouille le scroll en arrière-plan + ferme à l'Échap.
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  const src =
    `https://www.youtube-nocookie.com/embed/${youtubeId}` +
    `?rel=0&modestbranding=1&iv_load_policy=3&autoplay=1`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title ?? "Lecteur vidéo"}
      className="fixed inset-0 z-[100000] bg-black/85 backdrop-blur flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        aria-label="Fermer"
        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 text-white text-2xl leading-none flex items-center justify-center transition"
      >
        ×
      </button>

      <div
        className="w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {(title || author) && (
          <div className="bg-slate-900 text-white px-5 py-3 flex flex-wrap gap-2 items-baseline justify-between">
            <h3 className="font-display text-lg font-bold">{title}</h3>
            {author && <span className="text-xs text-slate-400">📺 {author}</span>}
          </div>
        )}
        <div className="aspect-video bg-black">
          <iframe
            src={src}
            title={title ?? "Vidéo"}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
            className="w-full h-full border-0"
          />
        </div>
      </div>
    </div>
  );
}
