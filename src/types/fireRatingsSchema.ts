import { z } from "zod";

const FireRatingsSchema = z.object({
    fireResistanceRating: z.string(),
    safetyStandards: z.array(z.string())
});
export { FireRatingsSchema };