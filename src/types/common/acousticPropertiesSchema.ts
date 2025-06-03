import { z } from "zod";

const AcousticPropertiesSchema = z.object({
    /**
     * Weighted sound reduction index (Rw), measured in decibels (dB).
     * Represents the ability of a building element to reduce airborne sound transmission.
     * Based on ISO 717-1.
     */
    weightedSoundReductionIndex: z.number().describe("Rw value in dB (ISO 717-1)"),

    /**
     * Spectrum adaptation term (Ctr), in decibels (dB).
     * Adjusts Rw to account for low-frequency noise typical in urban environments.
     * Optional depending on project requirements.
     */
    spectrumAdaptationTerm: z.number().optional().describe("Ctr value in dB (optional, ISO 717-1)")
});

type AcousticProperties = z.infer<typeof AcousticPropertiesSchema>;

export { AcousticPropertiesSchema, AcousticProperties };