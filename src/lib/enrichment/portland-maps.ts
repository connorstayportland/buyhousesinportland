import type { SuggestResult, AssessorData, ZoningData } from "./types";

const SUGGEST_URL = "https://www.portlandmaps.com/api/suggest/";
const DETAIL_URL = "https://www.portlandmaps.com/api/detail/";
const ZONING_URL =
  "https://www.portlandmaps.com/arcgis/rest/services/Public/Zoning/MapServer/0/query";

const TIMEOUT_MS = 5000;

function withTimeout(ms: number): AbortSignal {
  const controller = new AbortController();
  setTimeout(() => controller.abort(), ms);
  return controller.signal;
}

export async function suggestAddress(
  address: string
): Promise<SuggestResult | null> {
  try {
    const params = new URLSearchParams({
      query: address,
      api_key: process.env.PORTLAND_MAPS_API_KEY || "",
    });
    const res = await fetch(`${SUGGEST_URL}?${params}`, {
      signal: withTimeout(TIMEOUT_MS),
    });
    if (!res.ok) return null;

    const data = await res.json();
    const candidates = data?.candidates;
    if (!Array.isArray(candidates) || candidates.length === 0) return null;

    const top = candidates[0];
    const attrs = top.attributes || {};

    return {
      property_id: String(attrs.property_id || attrs.propertyid || ""),
      state_id: String(attrs.state_id || attrs.stateid || ""),
      latitude: top.location?.y ?? attrs.latitude ?? 0,
      longitude: top.location?.x ?? attrs.longitude ?? 0,
      zip_code: String(attrs.zip_code || attrs.zipcode || ""),
      raw: top,
    };
  } catch (err) {
    console.error("Portland Maps suggest failed:", err);
    return null;
  }
}

export async function getAssessorData(
  propertyId: string
): Promise<AssessorData | null> {
  try {
    const params = new URLSearchParams({
      property_id: propertyId,
      detail_type: "assessor",
      api_key: process.env.PORTLAND_MAPS_API_KEY || "",
    });
    const res = await fetch(`${DETAIL_URL}?${params}`, {
      signal: withTimeout(TIMEOUT_MS),
    });
    if (!res.ok) return null;

    const data = await res.json();
    const summary = data?.general?.summary || data?.summary || data || {};

    return {
      property_class: String(summary.property_class || summary.prop_class || ""),
      property_class_code: String(
        summary.property_class_code || summary.prop_code || ""
      ),
      year_built: toInt(summary.year_built),
      lot_sqft: toInt(summary.lot_size || summary.total_land_sqft),
      building_sqft: toInt(summary.building_sqft || summary.total_bldg_sqft),
      bedrooms: toInt(summary.bedrooms),
      bathrooms: toFloat(summary.bathrooms),
      assessed_value: toInt(
        summary.assessed_value || summary.total_assessed_value
      ),
      market_value: toInt(summary.market_value || summary.real_market_value),
      raw: data,
    };
  } catch (err) {
    console.error("Portland Maps assessor failed:", err);
    return null;
  }
}

export async function getZoning(
  lat: number,
  lng: number
): Promise<ZoningData | null> {
  try {
    const params = new URLSearchParams({
      geometry: JSON.stringify({ x: lng, y: lat }),
      geometryType: "esriGeometryPoint",
      inSR: "4326",
      spatialRel: "esriSpatialRelIntersects",
      outFields: "ZONE,ZONE_DESC",
      returnGeometry: "false",
      f: "json",
    });
    const res = await fetch(`${ZONING_URL}?${params}`, {
      signal: withTimeout(TIMEOUT_MS),
    });
    if (!res.ok) return null;

    const data = await res.json();
    const feature = data?.features?.[0];
    if (!feature) return null;

    const attrs = feature.attributes || {};
    return {
      zone_code: String(attrs.ZONE || ""),
      zone_desc: String(attrs.ZONE_DESC || ""),
      raw: data,
    };
  } catch (err) {
    console.error("Portland Maps zoning failed:", err);
    return null;
  }
}

function toInt(val: unknown): number | null {
  if (val == null) return null;
  const n = parseInt(String(val), 10);
  return isNaN(n) ? null : n;
}

function toFloat(val: unknown): number | null {
  if (val == null) return null;
  const n = parseFloat(String(val));
  return isNaN(n) ? null : n;
}
