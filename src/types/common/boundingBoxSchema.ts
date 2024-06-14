import { z } from "zod";

const BoundingBoxSchema = z.object({
    width: z.number(),
    height: z.number(),
    depth: z.number()
}).openapi({
    description: "The bounding box of an element in millimeters.",
});

type BoundingBox = z.infer<typeof BoundingBoxSchema>;
export { BoundingBoxSchema, BoundingBox };