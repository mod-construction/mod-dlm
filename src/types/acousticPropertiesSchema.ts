import { z } from "zod";

const AcousticPropertiesSchema = z.object({
    soundInsulationRating: z.string(),
    acousticPerformance: z.string()
});
export { AcousticPropertiesSchema };