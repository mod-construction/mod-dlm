import { z } from "zod";
import { CompatibilityEnum, ConnectionType } from "./enums";

const InstallationAndConnectivitySchema = z.object({
    connectionType: ConnectionType.optional(),
    installationTime: z.number()
      .min(0)
      .describe("Estimated installation time in minutes"),
    compatibility: CompatibilityEnum.optional(),
  }).openapi({
    description: "Describes how the prefab element is installed and what structural systems it is compatible with.",
    ref: "InstallationAndConnectivity"
  });

type InstallationAndConnectivity = z.infer<typeof InstallationAndConnectivitySchema>;

export { InstallationAndConnectivitySchema, InstallationAndConnectivity };