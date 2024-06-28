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

const SeismicResistance = z.enum(['Zone 1', 'Zone 2', 'Zone 3', 'Zone 4']);
const WindLoadResistance = z.enum(['Class A', 'Class B', 'Class C', 'Class D']);
const SustainabilityClassification = z.enum(['A+', 'A', 'B', 'C', 'D']);
const VOCEmissions = z.enum(['None', 'Low', 'Medium', 'High']);
const Recyclability = z.enum(['0%', '25%', '50%', '75%', '100%']);
const EnergyEfficiency = z.enum([
    'R-1',
    'R-2',
    'R-5',
    'Energy Star',
    'LEED Certified',
    'LEED Silver',
    'LEED Gold',
    'LEED Platinum'
]);
const ConnectionType = z.enum(['Bolt-on', 'Welded', 'Clip-on', 'Adhesive', 'Mortar']);

// European standard EN 13501-1
const FireResistanceEnum = z.enum([
    'A1', // EN 13501-1: Non-combustible
    'A2', // EN 13501-1: Limited combustibility
    'B',  // EN 13501-1: Very limited contribution to fire
    'C',  // EN 13501-1: Limited contribution to fire
    'D',  // EN 13501-1: Acceptable contribution to fire
    'E',  // EN 13501-1: Acceptable contribution to fire with a flashover
    'F',  // EN 13501-1: No performance determined
    '1-hour', // ASTM E119: 1-hour fire rating
    '2-hour', // ASTM E119: 2-hour fire rating
    '3-hour', // ASTM E119: 3-hour fire rating
    '4-hour', // ASTM E119: 4-hour fire rating
]);

const CompatibilityEnum = z.enum([
    'Steel Frame',
    'Wood Frame',
    'Concrete Structure',
    'Brickwork',
    'Modular Systems',
    'Glass Facades',
    'Composite Materials',
]);

export {
    ProductMaterialEnum,
    BuildingSystemEnum,
    ProductCategoryEnum,
    SeismicResistance,
    WindLoadResistance,
    SustainabilityClassification,
    VOCEmissions,
    Recyclability,
    EnergyEfficiency,
    ConnectionType,
    FireResistanceEnum,
    CompatibilityEnum
}