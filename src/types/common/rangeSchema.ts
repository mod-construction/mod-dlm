import { z } from "zod";

const RangeSchema = z.object({
    min: z.number().gt(0, "Minimum value must be greater than 0"),
    max: z.number().gt(0, "Maximum value must be greater than 0")
}).openapi({
    description: "A range of dimensions in millimeters",
    example: {
        min: 10,
        max: 20
    }
});

type Range = z.infer<typeof RangeSchema>;

export { RangeSchema, Range };