import configureMeasurements from 'convert-units'
import allMeasures, { AllMeasures, AllMeasuresSystems, AllMeasuresUnits, } from "convert-units/definitions/all"

const convert = configureMeasurements<AllMeasures, AllMeasuresSystems, AllMeasuresUnits>(allMeasures);

export const FORCE_UNITS = convert().possibilities("force")
export const MASS_UNITS = convert().possibilities("mass")
export const LENGTH_UNITS = convert().possibilities("length")
export const AREA_UNITS = convert().possibilities("area")
export const VOLUME_UNITS = convert().possibilities("volume")
export const TORQUE_UNITS = convert().possibilities("torque")
export const TEMPRATURE_UNITS = convert().possibilities("temperature")

/**
 * Enabling creation of a Zod.Enum from a dynamic array
 * addressing Github Issue: https://github.com/colinhacks/zod/discussions/2125
 * @param arr
 */
export const zodEnum = <T>(arr: T[]): [T, ...T[]] => arr as [T, ...T[]];