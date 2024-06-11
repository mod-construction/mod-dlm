import { z } from "zod";
import { ProductMaterialEnum } from "./enums";

const ProductMaterialAttributesSchema = z.object({
    finishMaterial: ProductMaterialEnum,
    structuralMaterial: ProductMaterialEnum
});
export { ProductMaterialAttributesSchema };