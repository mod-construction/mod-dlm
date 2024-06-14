import { z } from "zod";
import { RangeSchema } from "./rangeSchema";

const DimensionalAttributesSchema = z.object({
    width: RangeSchema,
    height: RangeSchema,
    length: RangeSchema
});
export { DimensionalAttributesSchema };