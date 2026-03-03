export interface SuggestResult {
  property_id: string;
  state_id: string;
  latitude: number;
  longitude: number;
  zip_code: string;
  raw: unknown;
}

export interface AssessorData {
  property_class: string;
  property_class_code: string;
  year_built: number | null;
  lot_sqft: number | null;
  building_sqft: number | null;
  bedrooms: number | null;
  bathrooms: number | null;
  assessed_value: number | null;
  market_value: number | null;
  raw: unknown;
}

export interface ZoningData {
  zone_code: string;
  zone_desc: string;
  raw: unknown;
}

export interface ScoreBreakdown {
  zip_code: number;
  location_bounds: number;
  sfr: number;
  lot_size: number;
  zoning: number;
  timeline: number;
  condition: number;
  total: number;
}

export type Classification = "buy_box" | "network" | "low_priority";

export interface EnrichmentResult {
  suggest: SuggestResult | null;
  assessor: AssessorData | null;
  zoning: ZoningData | null;
  score: ScoreBreakdown;
  classification: Classification;
}

export interface LeadFormData {
  address: string;
  phone: string;
  email?: string | null;
  condition?: string | null;
  timeline?: string | null;
  source?: string | null;
}
