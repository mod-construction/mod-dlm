import { z } from "zod";
import { LoadBearingCapacitySchema } from "./loadBearingCapacitySchema";
import { MaterialCompositionSchema } from "./materialSchema";
import { ThermalPropertiesSchema } from "./thermalPropertiesSchema";
import { AcousticPropertiesSchema } from "./acousticPropertiesSchema";
import { FireRatingsSchema } from "./fireRatingsSchema";
import { ConnectorsSchema } from "./connectorsSchema";

const DescriptiveMetadataSchema = z.object({
    elementType: z.enum(['wall_panel', 'floor_slab', 'roof_truss', 'column', 'beam']),
    materialComposition: MaterialCompositionSchema,
    weight: z.number(),
    thermalProperties: ThermalPropertiesSchema,
    acousticProperties: AcousticPropertiesSchema,
    fireRatings: FireRatingsSchema,
    loadBearingCapacity: LoadBearingCapacitySchema,
    connectors: ConnectorsSchema
});
export { DescriptiveMetadataSchema };