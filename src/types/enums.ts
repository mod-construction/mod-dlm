import { z } from "zod";

const ProductMaterialEnum = z.enum(['Timber', 'Steel', 'Concrete', 'Hybrid', 'Other']);
const BuildingSystemEnum = z.enum([
    'Wall',
    'Balcony',
    'Pod',
    'Frame',
    'Facade',
    'Floors',
    'Modules',
    'Plants',
    'Roofs',
    'Stairs'
]);
const ProductCategoryEnum = z.enum([
    'Boarding',
    'Solid Wall Panels',
    'Closed Wall Panels',
    'Twinwall',
    'Open Wall Panels',
    'Structural Insulated Panels (SIPs)',
    'Insulated Concrete Panels',
    'Prefabricated Balcony',
    'Pod',
    'Whole Building System',
    'Structural Frame',
    'Facade System',
    'Hollowcore Floor',
    'Concrete Lattice Floor',
    'Floor Cassettes',
    'Solid Floor Panels',
    'Volumetric module',
    'Prefabricated Plant',
    'Roof Panel',
    'Roof Truss',
    'Prefabricated Stairs'
]);
const ProductCategoryGroupEnum = z.enum([
    'Volumetric Systems',
    'Structural2DSystems',
    'NonSystemisedStructure',
    'Printed3DSystems',
    'Assemblies',
    'ProductBasedImprovements',
    'SiteBasedImprovements'
]);
const AvailabilityStatusEnum = z.enum([
    'in_stock',
    'out_of_stock',
    'pre_order',
    'discontinued'
]);

export {
    ProductMaterialEnum,
    BuildingSystemEnum,
    ProductCategoryEnum,
    ProductCategoryGroupEnum,
    AvailabilityStatusEnum
}