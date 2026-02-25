import { z } from "zod";

// Local Bounding Box (element's own coordinate system)
const BoundingBoxSchema = z.object({
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

type BoundingBox = z.infer<typeof BoundingBoxSchema>;

export { 
  BoundingBoxSchema,
  BoundingBox,
};