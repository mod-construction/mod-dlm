import { z } from "zod";
import {
    AREA_UNITS,
    FORCE_UNITS,
    LENGTH_UNITS,
    MASS_UNITS,
    TEMPRATURE_UNITS,
    TORQUE_UNITS,
    VOLUME_UNITS,
    zodEnum
} from "../../utils/utils";


export const ForceUnitsEnum = z.enum(zodEnum(FORCE_UNITS));
export const MassUnits = z.enum(zodEnum(MASS_UNITS));
export const LengthUnits = z.enum(zodEnum(LENGTH_UNITS));
export const AreaUnits = z.enum(zodEnum(AREA_UNITS));
export const VolumeUnits = z.enum(zodEnum(VOLUME_UNITS));
export const TorqueUnits = z.enum(zodEnum(TORQUE_UNITS));
export const TempratureUnits = z.enum(zodEnum(TEMPRATURE_UNITS));