"use client";

import dynamic from "next/dynamic";

const NeighborhoodMap = dynamic(
  () => import("@/components/ui/neighborhood-map").then((m) => m.NeighborhoodMap),
  {
    ssr: false,
    loading: () => (
      <div
        className="rounded-2xl bg-gray-100 border border-gray-200 mb-8 flex items-center justify-center"
        style={{ height: 480 }}
      >
        <p className="text-gray-400 text-sm">Loading map…</p>
      </div>
    ),
  }
);

export function ClientNeighborhoodMap() {
  return <NeighborhoodMap />;
}
