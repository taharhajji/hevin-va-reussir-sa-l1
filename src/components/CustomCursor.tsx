import { useEffect, useRef, useState } from "react";

type Props = {
  /** Source de l'image (PNG/JPG/SVG/GIF…). Par défaut : /cursor.jpg puis fallback emoji. */
  src?: string;
  /** Emoji de secours si l'image ne charge pas. */
  fallbackEmoji?: string;
  /** Taille en pixels. */
  size?: number;
};

/**
 * Curseur custom qui suit la souris (desktop) ou apparaît au tap (mobile).
 *
 * Desktop : le PNG suit le pointeur en permanence, scale au hover des éléments
 *   cliquables. Le curseur natif est masqué.
 *
 * Mobile / tactile : à chaque toucher, le PNG apparaît à la position du doigt,
 *   suit le mouvement pendant le drag, puis disparaît en fondu après ~600 ms
 *   (ou immédiatement si nouveau tap). Plusieurs taps successifs = effet visuel
 *   à chaque pression.
 *
 * Pour remplacer le PNG, dépose ton fichier dans `public/cursor.png`.
 */
export default function CustomCursor({
  src = "/cursor.jpg",
  fallbackEmoji = "🚀",
  size = 44,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [imageOk, setImageOk] = useState(true);
  const [mode, setMode] = useState<"none" | "desktop" | "touch">("none");
  const fadeTimer = useRef<number | null>(null);

  useEffect(() => {
    const fineHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    setMode(fineHover ? "desktop" : "touch");
  }, []);

  useEffect(() => {
    if (mode === "none") return;

    const cls = "with-custom-cursor";
    if (mode === "desktop") {
      document.documentElement.classList.add(cls);
    }

    function moveTo(x: number, y: number) {
      const el = ref.current;
      if (!el) return;
      el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
    }

    // ---------- Desktop : suit la souris en permanence ----------
    const onMove = (e: MouseEvent) => {
      moveTo(e.clientX, e.clientY);
      if (!visible) setVisible(true);
      const target = e.target as Element | null;
      const interactive = !!target?.closest(
        "a, button, [role='button'], input, label, select, textarea, summary"
      );
      setHovering(interactive);
    };
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    // ---------- Tactile : apparaît au tap, suit, disparaît au release ----------
    const cancelFade = () => {
      if (fadeTimer.current != null) {
        window.clearTimeout(fadeTimer.current);
        fadeTimer.current = null;
      }
    };
    const onTouchStart = (e: TouchEvent) => {
      const t = e.touches[0];
      if (!t) return;
      cancelFade();
      moveTo(t.clientX, t.clientY);
      // Petit "boop" : scale-in en réutilisant l'état "hovering".
      setHovering(true);
      setVisible(true);
    };
    const onTouchMove = (e: TouchEvent) => {
      const t = e.touches[0];
      if (!t) return;
      moveTo(t.clientX, t.clientY);
    };
    const onTouchEnd = () => {
      // Reste affiché un court moment, puis fade out.
      setHovering(false);
      cancelFade();
      fadeTimer.current = window.setTimeout(() => {
        setVisible(false);
        fadeTimer.current = null;
      }, 600);
    };

    if (mode === "desktop") {
      window.addEventListener("mousemove", onMove, { passive: true });
      document.addEventListener("mouseleave", onLeave);
      document.addEventListener("mouseenter", onEnter);
    } else {
      window.addEventListener("touchstart", onTouchStart, { passive: true });
      window.addEventListener("touchmove", onTouchMove, { passive: true });
      window.addEventListener("touchend", onTouchEnd, { passive: true });
      window.addEventListener("touchcancel", onTouchEnd, { passive: true });
    }

    return () => {
      cancelFade();
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("touchcancel", onTouchEnd);
      document.documentElement.classList.remove(cls);
    };
  }, [mode, visible]);

  if (mode === "none") return null;

  return (
    <div
      ref={ref}
      aria-hidden
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: size,
        height: size,
        pointerEvents: "none",
        zIndex: 9999,
        opacity: visible ? 1 : 0,
        transition: "opacity 200ms ease, scale 150ms ease",
        scale: hovering ? "1.4" : "1",
        willChange: "transform, opacity",
        userSelect: "none",
      }}
    >
      {imageOk ? (
        <img
          src={src}
          alt=""
          width={size}
          height={size}
          draggable={false}
          onError={() => setImageOk(false)}
          style={{
            width: size,
            height: size,
            display: "block",
            borderRadius: "50%",
            objectFit: "cover",
            // Légère dé-zoom : on rétrécit l'image dans son cadre rond pour
            // voir un peu plus que juste le visage centré.
            transform: "scale(0.78)",
            boxShadow: hovering
              ? "0 6px 16px rgba(37,99,235,.45)"
              : "0 2px 6px rgba(0,0,0,.25)",
          }}
        />
      ) : (
        <span
          style={{
            fontSize: size * 0.85,
            lineHeight: 1,
            display: "block",
            filter: hovering
              ? "drop-shadow(0 4px 8px rgba(37,99,235,.5))"
              : "drop-shadow(0 2px 4px rgba(0,0,0,.2))",
          }}
        >
          {fallbackEmoji}
        </span>
      )}
    </div>
  );
}
