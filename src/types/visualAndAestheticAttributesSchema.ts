import { z } from "zod";

const VisualAndAestheticAttributesSchema = z.object({
    surfaceFinish: z.string(),
    color: z.string(),
    designVariants: z.array(z.string())
});
export { VisualAndAestheticAttributesSchema };