"use client";

import { useEffect, useRef, useState } from "react";
import { geoOrthographic, geoPath } from "d3-geo";
import { feature } from "topojson-client";

// Countries where GIVEBACK has outreach/presence. Edit freely.
// Values are illustrative reach counts; "name" must match Natural Earth names.
const PRESENCE = {
  "United States of America": 17,
  "Canada": 6,
  "Mexico": 4,
  "Brazil": 5,
  "United Kingdom": 7,
  "Nigeria": 5,
  "Kenya": 4,
  "Ghana": 3,
  "India": 6,
  "Philippines": 4,
  "Indonesia": 3,
  "Germany": 5,
  "France": 4,
  "South Africa": 4,
  "Australia": 3,
  "Ukraine": 3,
};

export default function Globe() {
  const canvasWrapRef = useRef(null);
  const [land, setLand] = useState(null);
  const [size, setSize] = useState(528);
  const [rotation, setRotation] = useState([-30, -20, 0]);
  const [hover, setHover] = useState(null); // { name, count, x, y }
  const drag = useRef(null);
  const autoRef = useRef();

  // Load topology
  useEffect(() => {
    let active = true;
    fetch("/countries-110m.json")
      .then((r) => r.json())
      .then((topo) => {
        if (!active) return;
        const geo = feature(topo, topo.objects.countries);
        setLand(geo);
      })
      .catch(() => {});
    return () => { active = false; };
  }, []);

  // Responsive size
  useEffect(() => {
    const el = canvasWrapRef.current;
    if (!el) return;
    const ro = new ResizeObserver((entries) => {
      const w = entries[0].contentRect.width;
      setSize(Math.min(Math.max(w, 336), 624));
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Gentle auto-rotation (pauses while dragging or hovering)
  useEffect(() => {
    let raf;
    const tick = () => {
      if (!drag.current && !hover) {
        setRotation((r) => [r[0] + 0.43875, r[1], r[2]]);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    autoRef.current = raf;
    return () => cancelAnimationFrame(raf);
  }, [hover]);

  const projection = geoOrthographic()
    .scale(size / 2 - 2)
    .translate([size / 2, size / 2])
    .rotate(rotation);
  const pathGen = geoPath(projection);

  const onPointerDown = (e) => {
    drag.current = { x: e.clientX, y: e.clientY, rot: rotation };
  };
  const onPointerMove = (e) => {
    if (!drag.current) return;
    const dx = e.clientX - drag.current.x;
    const dy = e.clientY - drag.current.y;
    const k = 0.4;
    setRotation([
      drag.current.rot[0] + dx * k,
      Math.max(-90, Math.min(90, drag.current.rot[1] - dy * k)),
      drag.current.rot[2],
    ]);
  };
  const onPointerUp = () => { drag.current = null; };

  const countryName = (d) => d.properties && d.properties.name;

  return (
    <div ref={canvasWrapRef} className="relative mx-auto w-full max-w-[624px]">
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="mx-auto cursor-grab active:cursor-grabbing select-none"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={() => { onPointerUp(); setHover(null); }}
      >
        <defs>
          <radialGradient id="ocean" cx="35%" cy="30%" r="80%">
            <stop offset="0%" stopColor="#6AFF9E" />
            <stop offset="55%" stopColor="#20C854" />
            <stop offset="100%" stopColor="#0b6b2e" />
          </radialGradient>
          <radialGradient id="sheen" cx="32%" cy="26%" r="55%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.45)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </radialGradient>
        </defs>

        {/* Ocean sphere */}
        <circle cx={size / 2} cy={size / 2} r={size / 2 - 2} fill="url(#ocean)" />

        {/* Countries */}
        {land &&
          land.features.map((d, i) => {
            const name = countryName(d);
            const has = PRESENCE[name] != null;
            const isHover = hover && hover.name === name;
            const dPath = pathGen(d);
            if (!dPath) return null;
            return (
              <path
                key={i}
                d={dPath}
                fill={
                  isHover
                    ? "#ffffff"
                    : has
                    ? "rgba(220,255,232,0.92)"
                    : "rgba(80,190,120,0.40)"
                }
                stroke="rgba(255,255,255,0.55)"
                strokeWidth={0.4}
                onMouseEnter={(e) => {
                  if (!has) { setHover(null); return; }
                  const rect = canvasWrapRef.current.getBoundingClientRect();
                  setHover({
                    name,
                    count: PRESENCE[name],
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top,
                  });
                }}
                style={{ transition: "fill .15s ease" }}
              />
            );
          })}

        {/* Sphere sheen highlight */}
        <circle cx={size / 2} cy={size / 2} r={size / 2 - 2} fill="url(#sheen)" pointerEvents="none" />
      </svg>

      {/* Dark glassmorphism tooltip */}
      {hover && (
        <div
          className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-full rounded-full glass-dark px-4 py-2"
          style={{ left: hover.x, top: hover.y - 12 }}
        >
          <span className="flex items-center gap-2 whitespace-nowrap font-body text-[14px] text-white">
            {hover.name}
            <span className="inline-block h-2 w-2 rounded-full bg-cyber-blue-2" />
            {hover.count} outreach
          </span>
        </div>
      )}
    </div>
  );
}
