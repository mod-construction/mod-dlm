import { z } from "zod";
import { ProductMaterialAttributesSchema } from "./types/productMaterialAttributesSchema";
import { BuildingSystemEnum, ProductCategoryEnum } from "./types/enums";
import { DimensionalAttributesSchema } from "./types/dimensionalAttributesSchema";
import { PerformanceAttributesSchema } from "./types/performanceAttributesSchema";
import { SustainabilityAttributesSchema } from "./types/sustainabilityAttributesSchema";

const ProductAttributesSchema = z.object({
    title: z.string(),
    supplier: z.string(),
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