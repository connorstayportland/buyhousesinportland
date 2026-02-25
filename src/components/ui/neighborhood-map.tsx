"use client";

import { useState } from "react";
import Map, { Marker, Popup, NavigationControl } from "react-map-gl/mapbox";
import Link from "next/link";
import { neighborhoods } from "@/lib/neighborhoods";
import "mapbox-gl/dist/mapbox-gl.css";

type Hood = (typeof neighborhoods)[number];

export function NeighborhoodMap() {
  const [selected, setSelected] = useState<Hood | null>(null);

  return (
    <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 mb-8">
      <Map
        initialViewState={{
          longitude: -122.72,
          latitude: 45.47,
          zoom: 9.2,
        }}
        style={{ width: "100%", height: 480 }}
        mapStyle="mapbox://styles/mapbox/light-v11"
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        onClick={() => setSelected(null)}
      >
        <NavigationControl position="top-right" />

        {neighborhoods.map((hood) => (
          <Marker
            key={hood.slug}
            longitude={hood.lng}
            latitude={hood.lat}
            anchor="bottom"
            onClick={(e) => {
              e.originalEvent.stopPropagation();
              setSelected(hood);
            }}
          >
            <div className="cursor-pointer group flex flex-col items-center">
              {/* Pin head */}
              <div className="w-4 h-4 rounded-full bg-amber-500 border-2 border-white shadow-md group-hover:bg-[#0D2B45] group-hover:scale-125 transition-all duration-150" />
              {/* Pin tail */}
              <div className="w-0.5 h-2 bg-amber-500 group-hover:bg-[#0D2B45] transition-colors duration-150" />
            </div>
          </Marker>
        ))}

        {selected && (
          <Popup
            longitude={selected.lng}
            latitude={selected.lat}
            anchor="bottom"
            offset={20}
            closeOnClick={false}
            onClose={() => setSelected(null)}
            className="neighborhood-popup"
          >
            <div className="p-1 min-w-[140px]">
              <p className="font-bold text-[#0D2B45] text-sm mb-1">{selected.name}</p>
              <Link
                href={`/neighborhoods/${selected.slug}`}
                className="text-amber-600 text-xs font-semibold hover:underline"
                onClick={() => setSelected(null)}
              >
                View details →
              </Link>
            </div>
          </Popup>
        )}
      </Map>
    </div>
  );
}
