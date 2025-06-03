import { z } from "zod";
import { FireResistanceDurationEnum, FireResistanceEnum } from "./enums";

const FireResistanceSchema = z.object({
  /**
   * Classification of the material's reaction to fire, based on Euroclass standards (EN 13501-1).
   * Ranges from A1 (non-combustible) to F (easily flammable).
   */
  reactionToFireClassification: FireResistanceEnum,

  /**
   * Duration for which the element resists fire under standard testing conditions.
   * Expressed in minutes, as defined by EN 1363-1 or ASTM E119.
   */
  fireResistanceDuration: FireResistanceDurationEnum,
}).openapi({
  description: "Fire resistance classification of the material, based on Euroclass standards (EN 13501-1).",
  example: {
    reactionToFireClassification: "A1",
    fireResistanceDuration: "30min",
  },
});

type FireResistance = z.infer<typeof FireResistanceSchema>;

export { FireResistanceSchema, FireResistance };