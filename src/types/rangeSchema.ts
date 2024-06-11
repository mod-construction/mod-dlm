import { z } from "zod";

const RangeSchema = z.object({
    min: z.number(),
    max: z.number()
});
export { RangeSchema };