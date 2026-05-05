import { useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";

type Trigger = { src: string; key: number; type: "image" | "video" } | null;

let listeners: Array<(t: Trigger) => void> = [];

/** Displays an image full-screen for 3 seconds (or a video). */
export function playTransition(src: string, type: "image" | "video" = "image") {
  const t: Trigger = { src, key: Date.now(), type };
  flushSync(() => {
    listeners.forEach((l) => l(t));
  });
}

const IMAGE_DURATION_MS = 3000;

export default function TransitionVideo() {
  const [trigger, setTrigger] = useState<Trigger>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const l = (t: Trigger) => setTrigger(t);
    listeners.push(l);
    return () => {
      listeners = listeners.filter((x) => x !== l);
    };
  }, []);

  useEffect(() => {
    if (!trigger) return;
    if (trigger.type === "image") {
      // Auto-close after the image duration.
      const id = window.setTimeout(() => setTrigger(null), IMAGE_DURATION_MS);
      return () => window.clearTimeout(id);
    }
    // Video path (legacy)
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = 0;
    v.muted = true;
    const p = v.play();
    if (p && typeof p.catch === "function") p.catch(() => {});
    const safety = window.setTimeout(() => setTrigger(null), 12000);
    return () => window.clearTimeout(safety);
  }, [trigger]);

  if (!trigger) return null;

  if (trigger.type === "image") {
    return (
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 99999,
          background: "black",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "none",
          animation: "ttFade 3000ms ease both",
        }}
        onClick={() => setTrigger(null)}
      >
        <img
          key={trigger.key}
          src={trigger.src}
          alt=""
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            objectFit: "contain",
            background: "black",
          }}
          onError={() => setTrigger(null)}
        />
        <style>
          {`@keyframes ttFade {
              0% { opacity: 0; }
              10% { opacity: 1; }
              90% { opacity: 1; }
              100% { opacity: 0; }
            }`}
        </style>
      </div>
    );
  }

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        background: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pointerEvents: "auto",
        cursor: "none",
      }}
      onClick={() => setTrigger(null)}
    >
      <video
        key={trigger.key}
        ref={videoRef}
        src={trigger.src}
        autoPlay
        muted
        playsInline
        onEnded={() => setTrigger(null)}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          background: "black",
        }}
      />
    </div>
  );
}
