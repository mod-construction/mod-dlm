import { z } from "zod";
import { ManufacturerSchema } from "./manufacturerSchema";
import { AvailabilityStatusEnum } from "./enums";

const AdditionalAttributesSchema = z.object({
    cost: z.number(),
    manufacturer: ManufacturerSchema,
    leadTime: z.string(),
    availabilityStatus: AvailabilityStatusEnum
});
export { AdditionalAttributesSchema };