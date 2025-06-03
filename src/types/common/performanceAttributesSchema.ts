import { z } from "zod";
import { AcousticPropertiesSchema } from "./acousticPropertiesSchema";
import { FireResistanceSchema } from "./fireResistanceSchema";

const PerformanceAttributesSchema = z.object({
    fireResistance: FireResistanceSchema,

    thermalTransmittance: z.number()
        .min(0)
        .max(2)
        .describe("Thermal transmittance (U-value) in W/m²K, typically between 0 and 2"),

    acousticProperties: AcousticPropertiesSchema.optional(),

    airTightness: z.number()
        .min(0)
        .describe("Air permeability (e.g., n50 value in 1/h or q50 in m³/h·m²) - lower values indicate better airtightness"),

    vaporPermeability: z.number()
        .min(0)
        .describe("Vapor permeability in µ or Sd value in meters (ISO 12572) - measures resistance to water vapor diffusion")
});

type PerformanceAttributes = z.infer<typeof PerformanceAttributesSchema>;

export { PerformanceAttributesSchema, PerformanceAttributes };