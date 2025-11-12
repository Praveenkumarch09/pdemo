// components/ParticleBG.jsx
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticleBG() {
  const init = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={init}
      options={{
        background: { color: "#0b1020" },          // deep navy
        fpsLimit: 120,
        detectRetina: true,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "grab" }, // lines pull to cursor
            resize: true,
          },
          modes: {
            grab: { distance: 140, links: { opacity: 0.6 } },
          },
        },
        particles: {
          number: { value: 55, density: { enable: true, area: 900 } },
          move: { enable: true, speed: 0.6, outModes: { default: "bounce" } },
          size: { value: 2 },
          opacity: { value: 0.9 },
          color: { value: ["#8b5cf6", "#8b5cf6", "#99a7ff"] }, // mostly purple dots
          links: {
            enable: true,
            distance: 130,
            color: "#23d3c4",     // teal lines
            opacity: 0.35,
            width: 1,
            triangles: { enable: true, opacity: 0.06 }, // faint triangle fills
          },
        },
      }}
    />
  );
}
