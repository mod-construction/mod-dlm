import { z } from "zod";

const EconomicFactorsSchema = z.object({
    costPerUnit: z.number().optional(),
    manufacturingLeadTime: z.string().optional(),
});

export { EconomicFactorsSchema };