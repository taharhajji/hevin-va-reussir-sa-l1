import { useEffect, useRef, useState } from "react";

type Props = {
  /** Source de l'image (PNG/SVG/GIF…). Par défaut : /cursor.png puis fallback emoji. */
  src?: string;
  /** Emoji de secours si l'image ne charge pas. */
  fallbackEmoji?: string;
  /** Taille en pixels. */
  size?: number;
};

/**
 * Curseur custom qui suit la souris. Désactivé sur écran tactile.
 *
 * - Le curseur natif est masqué pendant que l'on est sur le site.
 * - L'image scale légèrement sur les éléments cliquables (hover effect).
 * - Pour remplacer le PNG, dépose ton fichier dans `public/cursor.png`.
 */
export default function CustomCursor({
  src = "/cursor.png",
  fallbackEmoji = "🚀",
  size = 36,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [imageOk, setImageOk] = useState(true);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Skip on touch / coarse-pointer devices.
    const ok = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    setEnabled(ok);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const cls = "with-custom-cursor";
    document.documentElement.classList.add(cls);

    const onMove = (e: MouseEvent) => {
      if (!ref.current) return;
      ref.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      if (!visible) setVisible(true);

      // Detect interactive element under the cursor.
      const target = e.target as Element | null;
      const interactive = !!target?.closest(
        "a, button, [role='button'], input, label, select, textarea, summary"
      );
      setHovering(interactive);
    };
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      document.documentElement.classList.remove(cls);
    };
  }, [enabled, visible]);

  if (!enabled) return null;

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
        transition: "opacity 120ms ease, scale 120ms ease",
        scale: hovering ? "1.4" : "1",
        willChange: "transform",
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
            filter: hovering ? "drop-shadow(0 4px 8px rgba(37,99,235,.5))" : "drop-shadow(0 2px 4px rgba(0,0,0,.2))",
          }}
        />
      ) : (
        <span
          style={{
            fontSize: size * 0.85,
            lineHeight: 1,
            display: "block",
            filter: hovering ? "drop-shadow(0 4px 8px rgba(37,99,235,.5))" : "drop-shadow(0 2px 4px rgba(0,0,0,.2))",
          }}
        >
          {fallbackEmoji}
        </span>
      )}
    </div>
  );
}
