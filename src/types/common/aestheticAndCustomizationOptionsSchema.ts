import { z } from "zod";

const AestheticAndCustomizationOptionsSchema = z.object({
    colorOptions: z.string().array().optional(),
    texture: z.string().optional(),
    modularAdaptability: z.string().optional(),
});

export { AestheticAndCustomizationOptionsSchema };