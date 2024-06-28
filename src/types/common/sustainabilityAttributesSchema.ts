import { z } from "zod";
import { EnergyEfficiency, Recyclability, SustainabilityClassification, VOCEmissions } from "./enums";

const SustainabilityAttributesSchema = z.object({
    countryOfManufacturing: z.string(),
    classification: SustainabilityClassification,
    VOCEmissions: VOCEmissions.optional(),
    recyclability: Recyclability.optional(),
    energyEfficiency: EnergyEfficiency.optional(),
});
export { SustainabilityAttributesSchema };