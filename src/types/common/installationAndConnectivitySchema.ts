import { z } from "zod";

const InstallationAndConnectivitySchema = z.object({
    connectionType: z.string().optional(),
    installationTime: z.string().optional(),
    compatibility: z.string().array().optional(),
});

export { InstallationAndConnectivitySchema };