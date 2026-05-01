import { useEffect, useRef, useState } from "react";

type Props = {
  /** Source de l'image. Par défaut : /cursor.jpg puis fallback emoji. */
  src?: string;
  /** Emoji de secours si l'image ne charge pas. */
  fallbackEmoji?: string;
  /** Taille en pixels. */
  size?: number;
};

/**
 * Curseur custom qui suit la souris (desktop) ou apparaît au tap (mobile).
 *
 * - Desktop : suit le pointeur, scale au hover des éléments cliquables.
 * - Mobile : apparaît au tap, suit le doigt, fade out après le release.
 *
 * Pour remplacer le PNG : dépose ton fichier en `public/cursor.jpg` (ou .png).
 */
export default function CustomCursor({
  src = "/cursor.jpg",
  fallbackEmoji = "🚀",
  size = 44,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const hoveringRef = useRef(false);
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

    function applyTransform(x: number, y: number) {
      const el = ref.current;
      if (!el) return;
      const s = hoveringRef.current ? 1.35 : 1;
      // Tout dans une seule propriété transform, ordre = translate then scale
      // around its own center. Aucune dépendance au scrolling (position fixed).
      el.style.transform = `translate3d(${x - size / 2}px, ${y - size / 2}px, 0) scale(${s})`;
    }

    function setHovering(next: boolean) {
      if (hoveringRef.current === next) return;
      hoveringRef.current = next;
      // Reflow uniquement si visible.
      const el = ref.current;
      if (!el) return;
      el.classList.toggle("ccursor-hover", next);
    }

    // ---------- Desktop : suit la souris ----------
    const onMove = (e: MouseEvent) => {
      applyTransform(e.clientX, e.clientY);
      if (!visible) setVisible(true);
      const target = e.target as Element | null;
      const interactive = !!target?.closest(
        "a, button, [role='button'], input, label, select, textarea, summary"
      );
      setHovering(interactive);
    };
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    // ---------- Tactile : apparaît au tap, suit, fade out au release ----------
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
      applyTransform(t.clientX, t.clientY);
      setHovering(true);
      setVisible(true);
    };
    const onTouchMove = (e: TouchEvent) => {
      const t = e.touches[0];
      if (!t) return;
      applyTransform(t.clientX, t.clientY);
    };
    const onTouchEnd = () => {
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
    // size est stable, on n'a pas besoin de re-bind à chaque visible
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode, size]);

  if (mode === "none") return null;

  return (
    <div
      ref={ref}
      aria-hidden
      className="ccursor"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: size,
        height: size,
        pointerEvents: "none",
        zIndex: 9999,
        opacity: visible ? 1 : 0,
        transition: "opacity 200ms ease",
        // pas de transform-origin sur le wrapper : on scale le child centré
        userSelect: "none",
        willChange: "transform, opacity",
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
            transform: "scale(0.82)",
            transformOrigin: "center",
            transition: "filter 150ms ease",
          }}
        />
      ) : (
        <span
          style={{
            fontSize: size * 0.85,
            lineHeight: 1,
            display: "block",
            textAlign: "center",
            filter: "drop-shadow(0 2px 4px rgba(0,0,0,.2))",
          }}
        >
          {fallbackEmoji}
        </span>
      )}
    </div>
  );
}
