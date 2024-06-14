import { z } from "zod";
import { ProductMaterialAttributesSchema } from "./productMaterialAttributesSchema";
import { BuildingSystemEnum, ProductCategoryEnum } from "./enums";
import { DimensionalAttributesSchema } from "./dimensionalAttributesSchema";
import { PerformanceAttributesSchema } from "./performanceAttributesSchema";
import { SustainabilityAttributesSchema } from "./sustainabilityAttributesSchema";

const ProductAttributesSchema = z.object({
    images: z.array(z.string()),
    buildingSystem: BuildingSystemEnum,
    productCategory: ProductCategoryEnum,
    material: ProductMaterialAttributesSchema,
    dimensional: DimensionalAttributesSchema,
    performance: PerformanceAttributesSchema,
    sustainability: SustainabilityAttributesSchema,
    documentation: z.string(),
    bimContent: z.string()
});
export { ProductAttributesSchema };