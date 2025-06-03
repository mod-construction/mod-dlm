import { z } from "zod";
import { SeismicResistance, WindLoadResistance } from "./enums";
import { LoadBearingCapacitySchema } from "./loadBearingCapacitySchema";

const StructuralPropertiesSchema = z.object({
  loadBearingCapacity: LoadBearingCapacitySchema.optional(),

  seismicResistance: z.union([
    SeismicResistance,
    z.string().describe("Custom seismic classification (e.g., Eurocode 8, ASCE 7 zone)")
  ]).optional(),

  windLoadResistance: z.union([
    WindLoadResistance,
    z.string().describe("Custom wind classification or rating (e.g., EN 1991-1-4)")
  ]).optional(),

  deflectionLimit: z.union([
    z.number().describe("Maximum deflection under load in mm"),
    z.string().regex(/^L\/\d+$/, "Use format like 'L/250'")
      .describe("Deflection limit as a span ratio (e.g., 'L/250')")
  ]).optional()
    .describe("Deflection control criteria under load: either fixed displacement in mm or span ratio like L/250"),

  safetyFactor: z.number().min(1).optional().describe("Applied safety factor for structural design, typically 1.0–2.0")
});

type StructuralProperties = z.infer<typeof StructuralPropertiesSchema>;

export { StructuralPropertiesSchema, StructuralProperties };