import { z } from "zod";
import { BuildingSystemEnum, ProductCategoryEnum,IfcBuildingElementEnum } from "./enums";

// Temporary schema for values
const RawProductCategorySchema = z.object({
  category: ProductCategoryEnum,
  buildingSystem: BuildingSystemEnum,
  ifcCompatibleElements: z
    .array(IfcBuildingElementEnum)
    .optional(),
});

const productCategoryValues: z.infer<typeof RawProductCategorySchema>[] = [
  { category: "Boarding", buildingSystem: "Wall", ifcCompatibleElements: ["IfcWall","IfcBuildingElementProxy"] },
  { category: "Solid Wall Panels", buildingSystem: "Wall", ifcCompatibleElements: ["IfcWall","IfcBuildingElementProxy"] },
  { category: "Closed Wall Panels", buildingSystem: "Wall", ifcCompatibleElements: ["IfcWall","IfcBuildingElementProxy"] },
  { category: "Twinwall", buildingSystem: "Wall", ifcCompatibleElements: ["IfcWall","IfcBuildingElementProxy"] },
  { category: "Open Wall Panels", buildingSystem: "Wall", ifcCompatibleElements: ["IfcWall","IfcBuildingElementProxy"] },
  { category: "Structural Insulated Panels (SIPs)", buildingSystem: "Wall", ifcCompatibleElements: ["IfcWall","IfcBuildingElementProxy"] },
  { category: "Insulated Concrete Panels", buildingSystem: "Wall", ifcCompatibleElements: ["IfcWall","IfcBuildingElementProxy"] },
  { category: "Whole Building System", buildingSystem: "Frame", ifcCompatibleElements: ["IfcBuildingElementProxy","IfcWall","IfcSlab","IfcRoof","IfcColumn","IfcBeam"] },
  { category: "Structural Frame", buildingSystem: "Frame", ifcCompatibleElements: ["IfcBuildingElementProxy","IfcColumn","IfcBeam","IfcMember"] },
  { category: "Hollowcore Floor", buildingSystem: "Floors", ifcCompatibleElements: ["IfcSlab","IfcBuildingElementProxy"] },
  { category: "Concrete Lattice Floor", buildingSystem: "Floors", ifcCompatibleElements: ["IfcSlab","IfcBuildingElementProxy"] },
  { category: "Floor Cassettes", buildingSystem: "Floors", ifcCompatibleElements: ["IfcSlab","IfcBuildingElementProxy"] },
  { category: "Solid Floor Panels", buildingSystem: "Floors", ifcCompatibleElements: ["IfcSlab","IfcBuildingElementProxy"] },
  { category: "Roof Panel", buildingSystem: "Roofs", ifcCompatibleElements: ["IfcRoof","IfcBuildingElementProxy","IfcCovering"] },
  { category: "Roof Truss", buildingSystem: "Roofs", ifcCompatibleElements: ["IfcRoof","IfcBuildingElementProxy","IfcBeam"] },
  { category: "Prefabricated Balcony", buildingSystem: "Balcony", ifcCompatibleElements: ["IfcBuildingElementProxy","IfcSlab"] },
  { category: "Pod", buildingSystem: "Pod", ifcCompatibleElements: ["IfcBuildingElementProxy"] },
  { category: "Facade System", buildingSystem: "Facade", ifcCompatibleElements: ["IfcCurtainWall","IfcBuildingElementProxy","IfcWall"] },
  { category: "Curtain Wall", buildingSystem: "Facade", ifcCompatibleElements: ["IfcCurtainWall","IfcBuildingElementProxy","IfcWall"] },
  { category: "Volumetric module", buildingSystem: "Modules", ifcCompatibleElements: ["IfcBuildingElementProxy","IfcWall","IfcSlab","IfcRoof"] },
  { category: "Prefabricated Plant", buildingSystem: "Plants", ifcCompatibleElements: ["IfcBuildingElementProxy"] },
  { category: "Prefabricated Stairs", buildingSystem: "Stairs", ifcCompatibleElements: ["IfcStair","IfcBuildingElementProxy","IfcRamp"] },
  { category: "Structural Beam", buildingSystem: "Structure", ifcCompatibleElements: ["IfcBeam", "IfcMember","IfcBuildingElementProxy"] },
  { category: "Structural Column", buildingSystem: "Structure", ifcCompatibleElements: ["IfcColumn", "IfcMember","IfcBuildingElementProxy"] },
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
