import { z } from "zod";
import { CurrencyEnum } from "./enums";

const EconomicFactorsSchema = z.object({
    costPerUnit: z.number().optional()
        .describe("Estimated cost per unit of the prefab element, in selected currency.")
        .openapi({
            description: "Estimated cost per unit of the prefab element.",
            example: 180.5,
        }),

    currency: CurrencyEnum.optional()
        .describe("Currency of the cost estimate, using ISO 4217 codes.")
        .openapi({
            description: "Currency used for the cost estimate (e.g., EUR, USD).",
            example: "EUR",
        }),

    manufacturingLeadTime: z.number().optional()
        .describe("Typical time required to manufacture one unit in days.")
        .openapi({
            description: "Estimated manufacturing lead time in days.",
            example: 21,
        }),
});

type EconomicFactors = z.infer<typeof EconomicFactorsSchema>;

export { EconomicFactorsSchema, EconomicFactors };