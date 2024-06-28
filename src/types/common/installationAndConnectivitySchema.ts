import { z } from "zod";
import { CompatibilityEnum, ConnectionType } from "./enums";

const InstallationAndConnectivitySchema = z.object({
    connectionType: ConnectionType.optional(),
    installationTime: z.string().optional(),
    compatibility: CompatibilityEnum.optional(),
});

export { InstallationAndConnectivitySchema };