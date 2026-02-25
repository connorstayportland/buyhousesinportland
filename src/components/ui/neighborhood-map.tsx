"use client";

import { useEffect, useRef } from "react";
import { neighborhoods } from "@/lib/neighborhoods";

export function NeighborhoodMap() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    let map: import("mapbox-gl").Map;

    import("mapbox-gl").then((mapboxgl) => {
      const mbgl = mapboxgl.default ?? mapboxgl;
      mbgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN ?? "";

      map = new mbgl.Map({
        container: containerRef.current!,
        style: "mapbox://styles/mapbox/light-v11",
        center: [-122.72, 45.47],
        zoom: 9.2,
      });

      map.addControl(new mbgl.NavigationControl(), "top-right");

      neighborhoods.forEach((hood) => {
        const el = document.createElement("div");
        el.style.cssText = `
          width: 14px;
          height: 14px;
          background: #F5A40C;
          border: 2px solid #fff;
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 1px 4px rgba(0,0,0,0.35);
          transition: transform 0.15s, background 0.15s;
        `;
        el.addEventListener("mouseenter", () => {
          el.style.transform = "scale(1.4)";
          el.style.background = "#0D2B45";
        });
        el.addEventListener("mouseleave", () => {
          el.style.transform = "scale(1)";
          el.style.background = "#F5A40C";
        });

        const popup = new mbgl.Popup({ offset: 12, closeOnClick: true })
          .setHTML(`
            <div style="padding:2px 4px;">
              <p style="margin:0 0 4px;font-weight:700;color:#0D2B45;font-size:13px;">${hood.name}</p>
              <a href="/neighborhoods/${hood.slug}" style="color:#D97706;font-size:12px;font-weight:600;text-decoration:none;">View details →</a>
            </div>
          `);

        new mbgl.Marker({ element: el, anchor: "center" })
          .setLngLat([hood.lng, hood.lat])
          .setPopup(popup)
          .addTo(map);
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
