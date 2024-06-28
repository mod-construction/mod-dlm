import { z } from "zod";
import { AcousticPropertiesSchema } from "./acousticPropertiesSchema";
import { FireResistanceEnum } from "./enums";

const PerformanceAttributesSchema = z.object({
    resistanceToFireClassification: FireResistanceEnum,
    thermalTransmittance: z.number().min(0).max(2), // Assuming the typical range falls between 0 and 2 W/m²K
    acousticProperties: AcousticPropertiesSchema.optional()
});
export { PerformanceAttributesSchema };