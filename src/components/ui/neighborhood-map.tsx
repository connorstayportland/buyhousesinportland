"use client";

import { useEffect, useRef } from "react";
import { neighborhoods } from "@/lib/neighborhoods";

// Captured at module level so Next.js replaces it at build time
const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN ?? "";

export function NeighborhoodMap() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    let map: import("mapbox-gl").Map;

    import("mapbox-gl").then((mod) => {
      const mapboxgl = mod.default ?? mod;
      mapboxgl.accessToken = MAPBOX_TOKEN;

      map = new mapboxgl.Map({
        container: containerRef.current!,
        style: "mapbox://styles/mapbox/light-v11",
        center: [-122.72, 45.47],
        zoom: 9.2,
      });

      map.addControl(new mapboxgl.NavigationControl(), "top-right");

      neighborhoods.forEach((hood) => {
        // Outer wrapper — mapbox transforms this for positioning, we never touch it
        const el = document.createElement("div");
        el.style.cssText = "width:14px;height:14px;cursor:pointer;";

        // Inner dot — we animate this so it doesn't conflict with mapbox transforms
        const dot = document.createElement("div");
        dot.style.cssText = `
          width: 14px;
          height: 14px;
          background: #F5A40C;
          border: 2px solid #fff;
          border-radius: 50%;
          box-shadow: 0 1px 4px rgba(0,0,0,0.35);
          transition: transform 0.15s, background 0.15s;
          transform-origin: center center;
        `;
        el.appendChild(dot);

        el.addEventListener("mouseenter", () => {
          dot.style.transform = "scale(1.4)";
          dot.style.background = "#0D2B45";
        });
        el.addEventListener("mouseleave", () => {
          dot.style.transform = "scale(1)";
          dot.style.background = "#F5A40C";
        });

        const popup = new mapboxgl.Popup({
          offset: 12,
          closeOnClick: true,
          focusAfterOpen: false,
        }).setHTML(`
          <div style="padding:2px 4px;">
            <p style="margin:0 0 4px;font-weight:700;color:#0D2B45;font-size:13px;">${hood.name}</p>
            <a href="/neighborhoods/${hood.slug}" style="color:#D97706;font-size:12px;font-weight:600;text-decoration:none;">View details →</a>
          </div>
        `);

        const marker = new mapboxgl.Marker({ element: el, anchor: "center" })
          .setLngLat([hood.lng, hood.lat])
          .addTo(map);

        // Manually toggle popup on click without triggering map pan
        el.addEventListener("click", (e) => {
          e.stopPropagation();
          if (popup.isOpen()) {
            popup.remove();
          } else {
            popup.setLngLat(marker.getLngLat()).addTo(map);
          }
        });
      });
    });

    return () => {
      map?.remove();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 mb-8"
      style={{ height: 480, width: "100%" }}
    />
  );
}
