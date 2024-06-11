import { z } from "zod";
import { ProductMaterialEnum } from "./enums";

const MaterialSchema = z.object({
    type: ProductMaterialEnum,
    grade: z.string()
});

const MaterialCompositionSchema = z.object({
    materials: z.array(MaterialSchema)
});

type Material = z.infer<typeof MaterialSchema>;

export { MaterialSchema, MaterialCompositionSchema, Material };