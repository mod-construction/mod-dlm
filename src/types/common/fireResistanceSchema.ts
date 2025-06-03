import { z } from "zod";

const FireResistanceSchema = z.object({
  /**
   * Classification of the material's reaction to fire, based on Euroclass standards (EN 13501-1).
   * Ranges from A1 (non-combustible) to F (easily flammable).
   */
  reactionToFireClassification: z.enum(["A1", "A2", "B", "C", "D", "E", "F"]).describe("Euroclass fire reaction classification (EN 13501-1)"),

  /**
   * Duration for which the element resists fire under standard testing conditions.
   * Expressed in minutes, as defined by EN 1363-1 or ASTM E119.
   */
  fireResistanceDuration: z.enum(["30min", "60min", "90min", "120min", "180min", "240min"]).describe("Fire resistance duration in minutes (EN 1363-1 / ASTM E119)")
});

type FireResistance = z.infer<typeof FireResistanceSchema>;

export { FireResistanceSchema, FireResistance };