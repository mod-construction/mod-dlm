import { z } from "zod";
import { ProductMaterialEnum } from "./enums";

const ProductMaterialAttributesSchema = z.object({
    finishMaterial: ProductMaterialEnum,
    structuralMaterial: ProductMaterialEnum
});

type ProductMaterialAttributes = z.infer<typeof ProductMaterialAttributesSchema>;

export { ProductMaterialAttributesSchema, ProductMaterialAttributes };