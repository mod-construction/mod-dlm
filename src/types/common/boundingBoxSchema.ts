import { z } from "zod";

const BoundingBoxSchema = z.object({
  min: z.tuple([
    z.number(),  
    z.number(),
    z.number()
  ]).default([0, 0, 0]).describe("Minimum corner (defaults at local origin (0,0,0)) in millimeters"),
  
  max: z.tuple([
    z.number().positive(),  
    z.number().positive(),  
    z.number().positive()  
  ]).describe("Maximum corner in millimeters and defined in the local coordianate system"),
  
}).openapi({
  description: "Local bounding box aligned to element's own axes, origin at (0,0,0). Dimensions in millimeters."
});

type BoundingBox = z.infer<typeof BoundingBoxSchema>;

export { 
  BoundingBoxSchema,
  BoundingBox,
};