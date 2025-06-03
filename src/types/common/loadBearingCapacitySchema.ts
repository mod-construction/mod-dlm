import { z } from "zod";
import { ForceUnitsEnum } from "./unitsOfMeasurementEnums";
import { LoadBearingTestStandardEnum, LoadDistributionEnum } from "./enums";

const LoadBearingCapacitySchema = z.object({
  maximumLoad: z.number()
    .positive("Maximum load must be a positive number")
    .describe("The maximum load the element can bear, expressed as a positive number (e.g., 5.0)"),

  forceUnit: ForceUnitsEnum.describe("Unit of force measurement, e.g., 'kN' for kilonewtons or 'N' for newtons"),

  loadDistribution: LoadDistributionEnum.describe("The type of load distribution applied to the element"),

  testStandard: LoadBearingTestStandardEnum.optional()
}).openapi({
  description: "The maximum load the element can bear, expressed as a positive number (e.g., 5.0)",
  example: {
    maximumLoad: 5.0,
    forceUnit: "kN",
    loadDistribution: "point",
    testStandard: "EN 1991-1-1"
  }
});

type LoadBearingCapacity = z.infer<typeof LoadBearingCapacitySchema>;

export { LoadBearingCapacitySchema, LoadBearingCapacity };