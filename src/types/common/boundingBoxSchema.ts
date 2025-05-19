import { z } from "zod";

const BoundingBoxSchema = z.object({
    width: z.number().gt(0, "Width must be greater than 0"),
    height: z.number().gt(0, "Height must be greater than 0"),
    depth: z.number().gt(0, "Depth must be greater than 0")
}).openapi({
    description: "The bounding box of an element in millimeters.",
});

type BoundingBox = z.infer<typeof BoundingBoxSchema>;
export { BoundingBoxSchema, BoundingBox };