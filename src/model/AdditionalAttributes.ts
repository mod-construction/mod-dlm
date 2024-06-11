import { AvailabilityStatus } from "./AvailabilityStatus";

export interface AdditionalAttributes {
    cost: number;
    manufacturer: Manufacturer;
    leadTime: string;
    availabilityStatus: AvailabilityStatus;
}