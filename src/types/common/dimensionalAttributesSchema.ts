import { z } from "zod";
import { RangeSchema } from "./rangeSchema";

const DimensionalAttributesSchema = z.object({
    length: RangeSchema.describe("Primary dimension along the longest horizontal axis of the element. Used for linear elements like beams, walls, and slabs."),
    width: RangeSchema.describe("Secondary horizontal dimension perpendicular to length. Used for planar elements like slabs, walls, and panels."),
    height: RangeSchema.describe("Vertical dimension. Defines the elevation of elements like walls and columns."),
    depth: RangeSchema.describe("Cross-sectional dimension of structural members like beams and columns."),
    thickness: RangeSchema.describe("Smallest dimension of planar elements such as walls, slabs, or panels. Represents the cross-sectional depth."),
    radius: RangeSchema.describe("Radius of circular or cylindrical elements like columns, piles, or pipes."),
}).openapi({
  description: 
  "Dimensional attributes defining the physical size of prefab elements. " +
    "All dimensions are optional and dependent on element type. " +
    "All measurements are in millimeters (mm). " +
    "Ranges represent manufacturing constraints.",
});

type DimensionalAttributes = z.infer<typeof DimensionalAttributesSchema>;

export { DimensionalAttributesSchema, DimensionalAttributes };