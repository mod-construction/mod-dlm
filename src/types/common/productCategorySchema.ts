import { z } from "zod";
import { BuildingSystemEnum, ProductCategoryEnum } from "./enums";

// Temporary schema for values
const RawProductCategorySchema = z.object({
  category: ProductCategoryEnum,
  buildingSystem: BuildingSystemEnum
});

const productCategoryValues: z.infer<typeof RawProductCategorySchema>[] = [
  { category: "Boarding", buildingSystem: "Wall" },
  { category: "Solid Wall Panels", buildingSystem: "Wall" },
  { category: "Closed Wall Panels", buildingSystem: "Wall" },
  { category: "Twinwall", buildingSystem: "Wall" },
  { category: "Open Wall Panels", buildingSystem: "Wall" },
  { category: "Structural Insulated Panels (SIPs)", buildingSystem: "Wall" },
  { category: "Insulated Concrete Panels", buildingSystem: "Wall" },
  { category: "Whole Building System", buildingSystem: "Frame" },
  { category: "Structural Frame", buildingSystem: "Frame" },
  { category: "Hollowcore Floor", buildingSystem: "Floors" },
  { category: "Concrete Lattice Floor", buildingSystem: "Floors" },
  { category: "Floor Cassettes", buildingSystem: "Floors" },
  { category: "Solid Floor Panels", buildingSystem: "Floors" },
  { category: "Roof Panel", buildingSystem: "Roofs" },
  { category: "Roof Truss", buildingSystem: "Roofs" },
  { category: "Prefabricated Balcony", buildingSystem: "Balcony" },
  { category: "Pod", buildingSystem: "Pod" },
  { category: "Facade System", buildingSystem: "Facade" },
  { category: "Volumetric module", buildingSystem: "Modules" },
  { category: "Prefabricated Plant", buildingSystem: "Plants" },
  { category: "Prefabricated Stairs", buildingSystem: "Stairs" },
];

const ProductCategorySchema = RawProductCategorySchema.refine(
  (data) =>
    productCategoryValues.some(
      (value) =>
        value.category === data.category &&
        value.buildingSystem === data.buildingSystem
    ),
  {
    message: "Invalid product category or building system",
    path: ["productCategory"],
  }
).openapi({
  description: "Product Category",
  example: {
    category: "Solid Wall Panels",
    buildingSystem: "Wall",
  },
  ref: "ProductCategory",
});

type ProductCategory = z.infer<typeof ProductCategorySchema>;

export { ProductCategorySchema, productCategoryValues, ProductCategory };
