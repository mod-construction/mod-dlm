import { z } from "zod";

const SustainabilityAttributesSchema = z.object({
    countryOfManufacturing: z.string(),
    classification: z.string()
});
export { SustainabilityAttributesSchema };