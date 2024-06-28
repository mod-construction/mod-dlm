import { z } from "zod";
import { SeismicResistance, WindLoadResistance } from "./enums";
import { LoadBearingCapacitySchema } from "./loadBearingCapacitySchema";

const StructuralPropertiesSchema = z.object({
    loadBearingCapacity: LoadBearingCapacitySchema.optional(),
    seismicResistance: SeismicResistance.optional(),
    windLoadResistance: WindLoadResistance.optional(),
});

export { StructuralPropertiesSchema };