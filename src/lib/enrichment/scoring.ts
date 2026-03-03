import type {
  SuggestResult,
  AssessorData,
  ZoningData,
  ScoreBreakdown,
  Classification,
} from "./types";

const TARGET_ZIPS = new Set(["97214", "97215"]);
const ADJACENT_SE_ZIPS = new Set([
  "97202",
  "97206",
  "97211",
  "97212",
  "97213",
  "97216",
  "97232",
  "97233",
]);

const RESIDENTIAL_CLASS_CODES = new Set([
  "100", "101", "102", "103", "104", "108", "109",
]);

const RM2_ZONES = new Set(["RM2", "RM2d", "RM2h"]);
const RM1_ZONES = new Set(["RM1", "RM1d", "RM1h"]);
const R25_R5_ZONES = new Set(["R2.5", "R5"]);

export function scoreLead(
  suggest: SuggestResult | null,
  assessor: AssessorData | null,
  zoning: ZoningData | null,
  timeline: string | null | undefined,
  condition: string | null | undefined
): ScoreBreakdown {
  let zip_code = 0;
  let location_bounds = 0;
  let sfr = 0;
  let lot_size = 0;
  let zoningScore = 0;
  let timelineScore = 0;
  let conditionScore = 0;

  if (suggest) {
    const zip = suggest.zip_code;
    if (TARGET_ZIPS.has(zip)) zip_code = 20;
    else if (ADJACENT_SE_ZIPS.has(zip)) zip_code = 8;

    const lat = suggest.latitude;
    const lng = suggest.longitude;
    const westOf60th = lng > -122.603;
    const northOfDivision = lat > 45.505;
    const southOfI84 = lat < 45.535;
    if (westOf60th && northOfDivision && southOfI84) location_bounds = 5;
  }

  if (assessor) {
    const code = assessor.property_class_code;
    if (code === "101") sfr = 15;
    else if (RESIDENTIAL_CLASS_CODES.has(code)) sfr = 8;

    const lot = assessor.lot_sqft;
    if (lot != null) {
      if (lot >= 7000) lot_size = 15;
      else if (lot >= 5000) lot_size = 10;
      else if (lot >= 3000) lot_size = 3;
    }
  }

  if (zoning) {
    const zone = zoning.zone_code;
    if (RM2_ZONES.has(zone)) zoningScore = 20;
    else if (RM1_ZONES.has(zone)) zoningScore = 15;
    else if (R25_R5_ZONES.has(zone)) zoningScore = 10;
    else if (zone.startsWith("R")) zoningScore = 5;
  }

  switch (timeline) {
    case "asap":
      timelineScore = 15;
      break;
    case "30days":
      timelineScore = 10;
      break;
    case "60-90days":
      timelineScore = 5;
      break;
  }

  switch (condition) {
    case "major":
      conditionScore = 10;
      break;
    case "minor":
      conditionScore = 5;
      break;
    case "great":
      conditionScore = 2;
      break;
  }

  return {
    zip_code,
    location_bounds,
    sfr,
    lot_size,
    zoning: zoningScore,
    timeline: timelineScore,
    condition: conditionScore,
    total:
      zip_code +
      location_bounds +
      sfr +
      lot_size +
      zoningScore +
      timelineScore +
      conditionScore,
  };
}

export function classifyLead(
  score: ScoreBreakdown,
  suggest: SuggestResult | null,
  assessor: AssessorData | null
): Classification {
  const inTargetZips =
    suggest != null &&
    (TARGET_ZIPS.has(suggest.zip_code) ||
      ADJACENT_SE_ZIPS.has(suggest.zip_code));

  const isResidential =
    assessor != null &&
    RESIDENTIAL_CLASS_CODES.has(assessor.property_class_code);

  if (score.total >= 60 && inTargetZips && isResidential) return "buy_box";
  if (score.total >= 35) return "network";
  return "low_priority";
}
