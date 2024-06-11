import { z } from "zod";

const ThermalPropertiesSchema = z.object({
    uValue: z.number(),
    insulationType: z.string()
});
export { ThermalPropertiesSchema };