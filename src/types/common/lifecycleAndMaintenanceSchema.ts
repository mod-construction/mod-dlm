import { z } from "zod";

const LifecycleAndMaintenanceSchema = z.object({
    expectedLifespan: z.string().optional(),
    maintenanceRequirements: z.string().optional(),
    warranty: z.string().optional(),
});

export { LifecycleAndMaintenanceSchema };