import { z } from "zod";

const DisassemblyRatingEnum = z.enum(["1", "2", "3", "4", "5"]).openapi({
  description:
    "Quantified ease of disassembly based on ISO 20887:2020: " +
    "1 = not disassemblable without destruction, " +
    "2 = destructive tools required, " +
    "3 = partial with tools, " +
    "4 = full with tools, " +
    "5 = tool-free or designed-for-disassembly.",
  example: "3",
});
const ReusePotentialEnum = z.enum(["single-use", "multi-use", "recyclable", "remanufacturable"]).openapi({
  description:
    "Potential for reuse of the product: 'single-use' means one-time use, " +
    "'multi-use' indicates multiple uses, 'recyclable' means material can be recycled, " +
    "and 'remanufacturable' means product can be refurbished and remanufactured.",
  example: "recyclable",
});
const RefurbishmentScopeEnum = z.enum(["none", "surface-only", "partial", "full"]).openapi({
  description:
    "Scope of refurbishment possible: 'none' means no refurbishment, 'surface-only' indicates minor surface work, " +
    "'partial' means moderate refurbishment, and 'full' means complete refurbishment.",
  example: "partial",
});
const CircularityCertificationEnum = z.enum([
  "none",
  "C2C_basic",
  "C2C_bronze",
  "C2C_silver",
  "C2C_gold",
  "C2C_platinum",
]).openapi({
  description:
    "Certification levels for circularity according to Cradle to Cradle (C2C) standards, ranging from 'none' to 'C2C_platinum'.",
  example: "C2C_gold",
});

const ProductMaterialEnum = z.enum([
  "Timber",
  "Steel",
  "Concrete",
  "Hybrid",
  "Other",
]).openapi({
  description: "Primary material of the product element.",
  example: "Steel",
});
const BuildingSystemEnum = z.enum([
  "Wall",
  "Balcony",
  "Pod",
  "Frame",
  "Facade",
  "Floors",
  "Modules",
  "Plants",
  "Roofs",
  "Stairs",
]).openapi({
  description: "Building system category to which the product element belongs.",
  example: "Facade",
});
const ProductCategoryEnum = z.enum([
  "Boarding",
  "Solid Wall Panels",
  "Closed Wall Panels",
  "Twinwall",
  "Open Wall Panels",
  "Structural Insulated Panels (SIPs)",
  "Insulated Concrete Panels",
  "Prefabricated Balcony",
  "Pod",
  "Whole Building System",
  "Structural Frame",
  "Facade System",
  "Hollowcore Floor",
  "Concrete Lattice Floor",
  "Floor Cassettes",
  "Solid Floor Panels",
  "Volumetric module",
  "Prefabricated Plant",
  "Roof Panel",
  "Roof Truss",
  "Prefabricated Stairs",
]).openapi({
  description: "Specific product category within building systems.",
  example: "Structural Insulated Panels (SIPs)",
});

const SeismicResistance = z
  .enum([
    "SDS ≤ 0.167g",
    "0.167g < SDS ≤ 0.33g",
    "0.33g < SDS ≤ 0.50g",
    "SDS > 0.50g",
  ])
  .openapi({
    description:
      "Seismic Design Spectral Acceleration at short period (SDS), as defined by ASCE 7 or Eurocode 8 hazard maps.",
    example: "0.167g < SDS ≤ 0.33g",
  });

const WindLoadResistance = z
  .enum(["≤ 1.0 kPa", "1.0–2.5 kPa", "2.5–4.0 kPa", "> 4.0 kPa"])
  .openapi({
    description:
      "Wind pressure resistance in kilopascals (kPa), typically calculated per EN 1991-1-4 or ASCE 7-16.",
    example: "2.5–4.0 kPa",
  });

/**
 * Sustainability rating category, similar to EU product energy labels.
 */
const SustainabilityClassification = z
  .enum(["A+", "A", "B", "C", "D"])
  .openapi({
    description:
      "Simplified sustainability score, where A+ indicates highest performance. Define based on EPD or lifecycle impact benchmarks.",
    example: "A",
  });

/**
 * VOC emissions level, qualitative but optionally linked to certification standards.
 */
const VOCEmissions = z
  .enum([
    "None (<0.01 mg/m³)",
    "Very Low (<0.1 mg/m³)",
    "Low (<0.3 mg/m³)",
    "Moderate (0.3–1.0 mg/m³)",
    "High (>1.0 mg/m³)",
  ])
  .openapi({
    description:
      "Qualitative VOC emissions categories with indicative thresholds based on ISO 16000 or GREENGUARD standards.",
    example: "Low (<0.3 mg/m³)",
  });

/**
 * Recyclability expressed as a percentage value (0–100).
 * Replace enum with a Zod number validator.
 */
const Recyclability = z
  .number()
  .min(0)
  .max(100)
  .describe(
    "Percentage of the element's mass that is recyclable, based on EN 45555 or similar assessment."
  );

/**
 * Energy efficiency classification including R-value categories and certifications.
 */
const EnergyEfficiency = z
  .enum([
    "R-1",
    "R-2",
    "R-5", // Abstracted R-value tiers
    "Energy Star",
    "LEED Certified",
    "LEED Silver",
    "LEED Gold",
    "LEED Platinum",
    "BREEAM Good",
    "BREEAM Very Good",
    "BREEAM Excellent",
    "BREEAM Outstanding",
    "Passive House",
    "DGNB Gold",
  ])
  .openapi({
    description:
      "Energy performance classification, combining insulation tiers and certifications (LEED, BREEAM, etc.).",
    example: "LEED Gold",
  });

const ConnectionType = z
  .enum([
    "Bolt-on",
    "Welded",
    "Clip-on",
    "Adhesive",
    "Mortar",
    "Snap-fit",
    "Plug-and-Play",
    "Dry Joint",
  ])
  .openapi({
    description:
      "Type of connection used for assembly, including mechanical, chemical, and modular methods.",
    example: "Bolt-on",
  });

const LoadBearingTestStandardEnum = z
  .enum(["EN 1991-1-1", "ASTM E72", "ISO 4355"])
  .openapi({
    description: "Structural load testing standard used to determine maximum load.",
    example: "ASTM E72",
  });

const CompatibilityEnum = z
  .enum([
    "Steel Frame",
    "Wood Frame",
    "Concrete Structure",
    "Brickwork",
    "Modular Systems",
    "Glass Facades",
    "Composite Materials",
    "CLT",
    "Light Gauge Steel",
    "Masonry Infill",
  ])
  .openapi({
    description:
      "Structural systems compatible with the prefab element, supporting integration into various construction assemblies.",
    example: "Concrete Structure",
  });

const LoadDistributionEnum = z
  .enum([
    "point", // Concentrated load at a single point
    "uniform", // Evenly distributed load
    "triangular", // Load intensity increases or decreases linearly
    "trapezoidal", // Load with a plateau region and tapering ends
    "eccentric", // Load applied off-center causing torsion
    "custom", // Custom or complex distribution
  ])
  .openapi({
    description: "The type of load distribution applied to the element.",
    example: "point",
  });

/**
 * Enumeration of IFC Building Element types based on IFC 4.3.
 * Reference: ISO 16739-1:2024
 */
const IfcBuildingElementEnum = z.enum([
  "IfcBeam",
  "IfcChimney",
  "IfcColumn",
  "IfcCovering",
  "IfcCurtainWall",
  "IfcDoor",
  "IfcFooting",
  "IfcMember",
  "IfcPile",
  "IfcPlate",
  "IfcRailing",
  "IfcRamp",
  "IfcRampFlight",
  "IfcRoof",
  "IfcShadingDevice",
  "IfcSlab",
  "IfcStair",
  "IfcStairFlight",
  "IfcWall",
  "IfcWallStandardCase",
  "IfcWindow",
  "IfcBuildingElementProxy",
]).openapi({
  description: "Enumeration of IFC Building Element types based on IFC 4.3.",
  example: "IfcWall",
});

const CurrencyEnum = z.enum(["EUR", "USD", "GBP", "CHF", "JPY", "CNY"]).openapi({
  description: "Currency of the cost estimate, using ISO 4217 codes.",
  example: "EUR",
});

export {
  CurrencyEnum,
  ProductMaterialEnum,
  BuildingSystemEnum,
  ProductCategoryEnum,
  SeismicResistance,
  WindLoadResistance,
  SustainabilityClassification,
  VOCEmissions,
  Recyclability,
  EnergyEfficiency,
  ConnectionType,
  CompatibilityEnum,
  LoadDistributionEnum,
  LoadBearingTestStandardEnum,
  DisassemblyRatingEnum,
  ReusePotentialEnum,
  RefurbishmentScopeEnum,
  CircularityCertificationEnum,
  IfcBuildingElementEnum,
};
