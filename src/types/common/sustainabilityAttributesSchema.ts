import { z } from "zod";
import { EnergyEfficiency, SustainabilityClassification, VOCEmissions } from "./enums";

const SustainabilityAttributesSchema = z.object({
  countryOfManufacturing: z.string()
    .describe("Country where the element is manufactured"),

  classification: SustainabilityClassification
    .describe("Sustainability classification rating (e.g., A+, A, B...)"),

  VOCEmissions: VOCEmissions.optional()
    .describe("Volatile Organic Compounds emissions level (None, Low, Medium, High)"),

  recyclability: z.number()
    .min(0)
    .max(100)
    .optional()
    .describe("Percentage of the element that is recyclable, from 0 to 100%"),

  energyEfficiency: EnergyEfficiency
    .describe("Energy performance certification, e.g., LEED or Energy Star")
});

type SustainabilityAttributes = z.infer<typeof SustainabilityAttributesSchema>;

export { SustainabilityAttributesSchema, SustainabilityAttributes };