import { z } from "zod";
import {
  EnergyEfficiency,
  SustainabilityClassification,
  VOCEmissions,
  CircularityCertificationEnum,
  DisassemblyRatingEnum,
  RefurbishmentScopeEnum,
  ReusePotentialEnum,
} from "./enums";

const SustainabilitySchema = z.object({
  environmentalImpact: z.object({
    classification: SustainabilityClassification
      .describe("Sustainability classification rating (e.g., A+, A, B...)")
      .openapi({
        description: "Overall sustainability score based on environmental impact (e.g., A+, A, B).",
        example: "A+",
      }),
    VOCEmissions: VOCEmissions.optional()
      .describe("Volatile Organic Compounds emissions level.")
      .openapi({
        description: "VOC emissions category: None, Low, Medium, or High.",
        example: "Low (0.1–0.3 mg/m³)",
      }),
    recyclability: z.number().min(0).max(100).optional()
      .describe("Percentage of the element that is recyclable.")
      .openapi({
        description: "Recyclability rate of the product from 0 to 100%.",
        example: 85,
      }),
    energyEfficiency: EnergyEfficiency
      .describe("Energy performance certification, e.g., LEED or Energy Star.")
      .openapi({
        description: "Energy certification level or standard.",
        example: "LEED Certified",
      }),
  }),

  circularity: z.object({
    disassemblyRating: DisassemblyRatingEnum
      .describe("Ease of disassembly based on ISO 20887:2020.")
      .openapi({
        description: "Rating from 1 (not disassemblable) to 5 (tool-free disassembly).",
        example: "3",
      }),
    reusePotential: ReusePotentialEnum
      .describe("End-of-life reuse potential: single-use, recyclable, etc.")
      .openapi({
        description: "Primary reuse potential of the element after its service life.",
        example: "recyclable",
      }),
    refurbishmentScope: RefurbishmentScopeEnum
      .describe("Extent to which the element can be refurbished.")
      .openapi({
        description: "Refurbishment level: none, surface-only, partial, or full.",
        example: "partial",
      }),
    circularityCertification: CircularityCertificationEnum
      .describe("Cradle to Cradle or similar certification.")
      .openapi({
        description: "Level of circularity certification (e.g., C2C_gold).",
        example: "C2C_gold",
      }),
  }),

  origin: z.object({
    countryOfManufacturing: z.string()
      .describe("Country where the element is manufactured.")
      .openapi({
        description: "Country of production for lifecycle and logistics assessment.",
        example: "Germany",
      }),
  }),
}).openapi({
  description: "Sustainability attributes of the element.",
  ref: "Sustainability",
});

type Sustainability = z.infer<typeof SustainabilitySchema>;

export { SustainabilitySchema, Sustainability };