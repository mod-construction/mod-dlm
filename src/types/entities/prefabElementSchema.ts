import { z } from "zod";
import { AestheticAndCustomizationOptionsSchema } from "../common/aestheticAndCustomizationOptionsSchema";
import { BoundingBoxSchema } from "../common/boundingBoxSchema";
import { DimensionalAttributesSchema } from "../common/dimensionalAttributesSchema";
import { DocumentationAndComplianceSchema } from "../common/documentationAndComplianceSchema";
import { EconomicFactorsSchema } from "../common/economicFactorsSchema";
import { InstallationAndConnectivitySchema } from "../common/installationAndConnectivitySchema";
import { LifecycleAndMaintenanceSchema } from "../common/lifecycleAndMaintenanceSchema";
import { PerformanceAttributesSchema } from "../common/performanceAttributesSchema";
import { ProductMaterialAttributesSchema } from "../common/productMaterialAttributesSchema";
import { StructuralPropertiesSchema } from "../common/structuralPropertiesSchema";
import { SustainabilityAttributesSchema } from "../common/sustainabilityAttributesSchema";
import { ProductCategorySchema } from "../common/productCategorySchema";

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
    productCategory: ProductCategorySchema,
    material: ProductMaterialAttributesSchema,
    dimensional: DimensionalAttributesSchema,
    structuralProperties: StructuralPropertiesSchema.optional(),
    performance: PerformanceAttributesSchema.optional(),
    sustainability: SustainabilityAttributesSchema.optional(),
    documentationAndCompliance: DocumentationAndComplianceSchema.optional(),
    installationAndConnectivity: InstallationAndConnectivitySchema.optional(),
    lifecycleAndMaintenance: LifecycleAndMaintenanceSchema.optional(),
    aestheticAndCustomizationOptions: AestheticAndCustomizationOptionsSchema.optional(),
    economicFactors: EconomicFactorsSchema.optional(),
}).openapi({
    description: "Prefab Element",
    ref: "PrefabElement"
});

type PrefabElement = z.infer<typeof PrefabElementSchema>;

export { ElementIdSchema, PrefabElementSchema, PrefabElement };