import { z } from "zod";

const ThermalPropertiesSchema = z.object({
    uValue: z.number(),
    insulationType: z.string()
});

type ThermalProperties = z.infer<typeof ThermalPropertiesSchema>;

export { ThermalPropertiesSchema, ThermalProperties };