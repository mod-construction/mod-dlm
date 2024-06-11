import { ElementType } from "./BuildingSystem";
import { MaterialComposition } from "./MaterialComposition";
import { ThermalProperties } from "./ThermalProperties";
import { AcousticProperties } from "./AcousticProperties";
import { FireRatings } from "./FireRatings";
import { LoadBearingCapacity } from "./LoadBearingCapacity";
import { Connectors } from "./Connectors";

export interface DescriptiveMetadata {
    elementType: ElementType;
    materialComposition: MaterialComposition;
    weight: number;
    thermalProperties: ThermalProperties;
    acousticProperties: AcousticProperties;
    fireRatings: FireRatings;
    loadBearingCapacity: LoadBearingCapacity;
    connectors: Connectors;
}