import { z } from "zod";

// Local Bounding Box (element's own coordinate system)
const LocalBoundingBoxSchema = z.object({
  min: z.tuple([
    z.literal(0),  // Always 0 in local space
    z.literal(0),
    z.literal(0)
  ]).describe("Minimum corner (always at local origin)"),
  
  max: z.tuple([
    z.number().positive(),  // Length
    z.number().positive(),  // Width  
    z.number().positive()   // Height
  ]).describe("Maximum corner in millimeters"),
  
}).openapi({
  description: "Local bounding box aligned to element's own axes, origin at (0,0,0). Dimensions in millimeters."
});

// World-Aligned Bounding Box (in global coordinates)
const WorldBoundingBoxSchema = z.object({
  min: z.tuple([
    z.number(),  // Can be any value in world space
    z.number(),
    z.number()
  ]).describe("Minimum corner in world coordinates (mm)"),
  
  max: z.tuple([
    z.number(),
    z.number(),
    z.number()
  ]).describe("Maximum corner in world coordinates (mm)"),
  
  dimensions: z.object({
    x: z.number().positive().describe("World X extent (mm)"),
    y: z.number().positive().describe("World Y extent (mm)"),
    z: z.number().positive().describe("World Z extent (mm)")
  }),
  
  center: z.tuple([
    z.number(),
    z.number(),
    z.number()
  ]).optional().describe("Center point in world coordinates (mm)"),
  
  volume: z.number().positive().describe("Bounding box volume in mm³")
}).openapi({
  description: "World-aligned bounding box (AABB) in global coordinate system. May include rotation waste. Dimensions in millimeters."
});

// World Position & Orientation (Construction Plane)
const WorldPositionSchema = z.object({
  origin: z.tuple([
    z.number(),
    z.number(),
    z.number()
  ]).describe("Element's local origin in world coordinates (mm)"),
  
  xAxis: z.tuple([
    z.number(),
    z.number(),
    z.number()
  ]).describe("Local X-axis direction in world space (unit vector)"),
  
  yAxis: z.tuple([
    z.number(),
    z.number(),
    z.number()
  ]).describe("Local Y-axis direction in world space (unit vector)"),
  
  zAxis: z.tuple([
    z.number(),
    z.number(),
    z.number()
  ]).describe("Local Z-axis direction in world space (unit vector)")
}).openapi({
  description: "Element's position and orientation (construction plane) in world coordinate system."
});

// Complete Geometry
const GeometrySchema = z.object({
  localBoundingBox: LocalBoundingBoxSchema,
  worldBoundingBox: WorldBoundingBoxSchema.optional(),
  worldPosition: WorldPositionSchema
}).openapi({
  description: "Complete geometry representation with local bbox, world position, and optional world bbox."
});

type LocalBoundingBox = z.infer<typeof LocalBoundingBoxSchema>;
type WorldBoundingBox = z.infer<typeof WorldBoundingBoxSchema>;
type WorldPosition = z.infer<typeof WorldPositionSchema>;
type Geometry = z.infer<typeof GeometrySchema>;

export { 
  LocalBoundingBoxSchema, 
  WorldBoundingBoxSchema,
  WorldPositionSchema,
  GeometrySchema,
  LocalBoundingBox,
  WorldBoundingBox,
  WorldPosition,
  Geometry
};