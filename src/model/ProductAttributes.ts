import { ProductCategory } from "./ProductCategory";
import { ProductMaterialAttributes } from "./ProductMaterialAttributes";
import { DimensionalAttributes } from "./DimensionalAttributes";
import { PerformanceAttributes } from "./PerformanceAttributes";
import { SustainabilityAttributes } from "./SustainabilityAttributes";

export interface ProductAttributes {
    title: string;
    supplier: string;
    images: string[];
    buildingSystem: BuildingSystem;
    productCategory: ProductCategory;
    material: ProductMaterialAttributes;
    dimensional: DimensionalAttributes;
    performance: PerformanceAttributes;
    sustainability: SustainabilityAttributes;
    documentation: string;
    bimContent: string;
}