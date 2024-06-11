import { z } from "zod";

const BoundingBoxSchema = z.object({
    width: z.number(),
    height: z.number(),
    depth: z.number()
});

type BoundingBox = z.infer<typeof BoundingBoxSchema>;
export { BoundingBoxSchema, BoundingBox };