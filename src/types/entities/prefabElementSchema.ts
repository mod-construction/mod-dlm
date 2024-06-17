import { z } from "zod";
import { BoundingBoxSchema } from "../common/boundingBoxSchema";
import { BuildingSystemEnum, ProductCategoryEnum } from "../common/enums";
import { ProductMaterialAttributesSchema } from "../common/productMaterialAttributesSchema";
import { DimensionalAttributesSchema } from "../common/dimensionalAttributesSchema";
import { PerformanceAttributesSchema } from "../common/performanceAttributesSchema";
import { SustainabilityAttributesSchema } from "../common/sustainabilityAttributesSchema";
import { DocumentationAndComplianceSchema } from "../common/documentationAndComplianceSchema";

const ElementIdSchema = z.string().uuid().openapi({
    description: "A unique identifier for an element",
    example: "4dd643ff-7ec7-4666-9c88-50b7d3da34e4",
    ref: "ElementId",
    param: {
        in: "path",
        name: "id",
    }
});

const PrefabElementSchema = z.object({
    id: ElementIdSchema,
    name: z.string(),
    description: z.string(),
    boundingBox: BoundingBoxSchema,
    images: z.array(z.string()),
    buildingSystem: BuildingSystemEnum,
    productCategory: ProductCategoryEnum,
    material: ProductMaterialAttributesSchema,
    dimensional: DimensionalAttributesSchema,
    performance: PerformanceAttributesSchema,
    sustainability: SustainabilityAttributesSchema,
    documentationAndCompliance: DocumentationAndComplianceSchema,
}).openapi({
    description: "Prefab Element",
    ref: "PrefabElement"
});

type PrefabElement = z.infer<typeof PrefabElementSchema>;

export { ElementIdSchema, PrefabElementSchema, PrefabElement };