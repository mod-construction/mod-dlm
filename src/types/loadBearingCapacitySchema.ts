import { z } from "zod";

const LoadBearingCapacitySchema = z.object({
    maximumLoad: z.number(),
    loadDistribution: z.string()
});
export { LoadBearingCapacitySchema };