import { z } from "zod";

const LifecycleAndMaintenanceSchema = z.object({
    expectedLifespan: z.number().optional()
        .describe("Expected lifespan of the prefab element in years.")
        .openapi({
            description: "Expected lifespan of the prefab element in years.",
            example: 50,
        }),
    maintenanceRequirements: z.string().optional()
        .describe("Maintenance requirements of the prefab element.")
        .openapi({
            description: "Maintenance requirements of the prefab element.",
            example: "Regular cleaning and inspection.",
        }),
    warranty: z.string().optional()
        .describe("Warranty information of the prefab element.")
        .openapi({
            description: "Warranty information of the prefab element.",
            example: "10 years warranty.",
        }),
});

type LifecycleAndMaintenance = z.infer<typeof LifecycleAndMaintenanceSchema>;

export { LifecycleAndMaintenanceSchema, LifecycleAndMaintenance };