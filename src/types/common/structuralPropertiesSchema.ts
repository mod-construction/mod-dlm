import { z } from "zod";

const StructuralPropertiesSchema = z.object({
    loadBearingCapacity: z.number().optional(),
    seismicResistance: z.string().optional(),
    windLoadResistance: z.string().optional(),
});

export { StructuralPropertiesSchema };