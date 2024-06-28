import { z } from "zod";

const SustainabilityAttributesSchema = z.object({
    countryOfManufacturing: z.string(),
    classification: z.string(),
    VOCEmissions: z.string().optional(),
    recyclability: z.number().optional(),
    energyEfficiency: z.string().optional(),
});
export { SustainabilityAttributesSchema };