import { useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";

type Trigger = { src: string; key: number } | null;

let listeners: Array<(t: Trigger) => void> = [];

/** Lance la vidéo d'une transition (à appeler depuis un event handler user). */
export function playTransition(src: string) {
  const t: Trigger = { src, key: Date.now() };
  // flushSync force React à committer le state immédiatement (et donc à
  // monter la <video />) AVANT que le user-gesture stack ne se referme. Le
  // useEffect peut alors appeler video.play() sans être bloqué par la
  // policy d'autoplay du navigateur.
  flushSync(() => {
    listeners.forEach((l) => l(t));
  });
}

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
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = 0;
    v.muted = true; // requis pour autoplay sans interaction
    const p = v.play();
    if (p && typeof p.catch === "function") {
      // Si play() échoue, on garde l'overlay : l'utilisateur peut
      // cliquer pour fermer. (Très rare avec muted=true.)
      p.catch(() => {});
    }
    // Filet de sécurité : ferme l'overlay au bout de 12 s même si la
    // vidéo n'envoie pas de "ended" (vidéo cassée, navigateur bloqué…).
    const timeoutId = window.setTimeout(() => setTrigger(null), 12000);
    return () => window.clearTimeout(timeoutId);
  }, [trigger]);

  if (!trigger) return null;

  return (
    <div
      // Overlay plein écran, au-dessus de tout (cursor compris).
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        background: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // L'overlay capture les events pour que rien ne se passe derrière
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
        // onError ne ferme pas l'overlay : le filet de 12 s s'en charge.
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
