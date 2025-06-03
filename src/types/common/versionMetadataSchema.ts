import { z } from "zod";

const VersionMetadataSchema = z.object({
  version: z
    .string()
    .regex(
      /^\d+\.\d+\.\d+$/,
      "Version must follow semantic versioning (e.g., 1.0.0)"
    )
    .describe("Semantic version of the prefab element, e.g., '1.0.0'"),

  status: z
    .enum(["draft", "published", "deprecated"])
    .describe("Publishing status of the element"),

  lastUpdated: z
    .string()
    .datetime()
    .describe("ISO 8601 timestamp of the last update"),
});

type VersionMetadata = z.infer<typeof VersionMetadataSchema>;

export { VersionMetadataSchema, VersionMetadata };