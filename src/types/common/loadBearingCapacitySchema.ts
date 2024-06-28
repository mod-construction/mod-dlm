import { z } from "zod";
import { ForceUnitsEnum } from "./unitsOfMeasurementEnums";

const LoadBearingCapacitySchema = z.object({
    maximumLoad: z.number(),
    unit: ForceUnitsEnum,
    loadDistribution: z.string()
});
export { LoadBearingCapacitySchema };