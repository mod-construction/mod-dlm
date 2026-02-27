import { z } from "zod";

// Wall dimensions
const WallDimensionsSchema = z.object({
  length: z.number().positive().optional(),
  thickness: z.number().positive().optional(),
  height: z.number().positive().optional()
});

// Balcony dimensions
const BalconyDimensionsSchema = z.object({
  length: z.number().positive().optional(),
  width: z.number().positive().optional(),
  height: z.number().positive().optional()
});

// Pod dimensions
const PodDimensionsSchema = z.object({
  length: z.number().positive().optional(),
  width: z.number().positive().optional(),
  height: z.number().positive().optional()
});

// Frame dimensions
const FrameDimensionsSchema = z.object({
  length: z.number().positive().optional(),
  width: z.number().positive().optional(),
  thickness: z.number().positive().optional()
});

// Floor dimensions
const FloorDimensionsSchema = z.object({
  length: z.number().positive().optional(),
  width: z.number().positive().optional(),
  thickness: z.number().positive().optional()
});

// Module dimensions
const ModuleDimensionsSchema = z.object({
  length: z.number().positive().optional(),
  width: z.number().positive().optional(),
  height: z.number().positive().optional()
});

// Roof dimensions
const RoofDimensionsSchema = z.object({
  length: z.number().positive().optional(),
  width: z.number().positive().optional(),
  thickness: z.number().positive().optional()
});

// Stairs dimensions
const StairsDimensionsSchema = z.object({
  length: z.number().positive().optional(),
  width: z.number().positive().optional(),
  height: z.number().positive().optional(),
  numberOfSteps: z.number().int().positive().optional(),
  riserHeight: z.number().positive().optional(),
  treadDepth: z.number().positive().optional()
});

// Structure dimensions - SIMPLIFIED
const StructureDimensionsSchema = z.object({
  length: z.number().positive().optional(),
  width: z.number().positive().optional(),
  height: z.number().positive().optional(),
  depth: z.number().positive().optional(),
  diameter: z.number().positive().optional()
});

// Discriminated union by building system
const DimensionSchema = z.object({
  dimensions: z.discriminatedUnion("buildingSystem", [
    z.object({ buildingSystem: z.literal("Wall"), ...WallDimensionsSchema.shape }),
    z.object({ buildingSystem: z.literal("Balcony"), ...BalconyDimensionsSchema.shape }),
    z.object({ buildingSystem: z.literal("Pod"), ...PodDimensionsSchema.shape }),
    z.object({ buildingSystem: z.literal("Frame"), ...FrameDimensionsSchema.shape }),
    z.object({ buildingSystem: z.literal("Facade"), ...FacadeDimensionsSchema.shape }),
    z.object({ buildingSystem: z.literal("Floors"), ...FloorDimensionsSchema.shape }),
    z.object({ buildingSystem: z.literal("Modules"), ...ModuleDimensionsSchema.shape }),
    z.object({ buildingSystem: z.literal("Plants"), ...PlantDimensionsSchema.shape }),
    z.object({ buildingSystem: z.literal("Roofs"), ...RoofDimensionsSchema.shape }),
    z.object({ buildingSystem: z.literal("Stairs"), ...StairsDimensionsSchema.shape }),
    z.object({ buildingSystem: z.literal("Structure"), ...StructureDimensionsSchema.shape })
  ])
});

export { DimensionSchema };