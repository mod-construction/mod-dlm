import { z } from "zod";

const PerformanceAttributesSchema = z.object({
    resistanceToFireClassification: z.string(),
    thermalTransmittance: z.number(),
    airborneSoundInsulation: z.number()
});
export { PerformanceAttributesSchema };