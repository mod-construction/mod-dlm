import { z } from "zod";
import { ProductAttributesSchema } from "../productAttributesSchema";
import { DescriptiveMetadataSchema } from "./descriptiveMetadataSchema";
import { VisualAndAestheticAttributesSchema } from "./visualAndAestheticAttributesSchema";
import { DocumentationAndComplianceSchema } from "./documentationAndComplianceSchema";
import { AdditionalAttributesSchema } from "./additionalAttributesSchema";
import { BoundingBoxSchema } from "./boundingBoxSchema";

const PrefabElementSchema = z.object({
    id: z.number(),
    name: z.string(),
    description: z.string(),
    boundingBox: BoundingBoxSchema,
    descriptiveMetadata: DescriptiveMetadataSchema,
    visualAndAestheticAttributes: VisualAndAestheticAttributesSchema,
    documentationAndCompliance: DocumentationAndComplianceSchema,
    additionalAttributes: AdditionalAttributesSchema,
    productAttributes: ProductAttributesSchema
});
export { PrefabElementSchema };