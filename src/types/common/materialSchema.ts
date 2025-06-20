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

type MaterialComposition = z.infer<typeof MaterialCompositionSchema>;

export { MaterialSchema, MaterialCompositionSchema, Material, MaterialComposition };