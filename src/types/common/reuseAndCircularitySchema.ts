import { z } from "zod";
import { CircularityCertificationEnum, DisassemblyRatingEnum, RefurbishmentScopeEnum, ReusePotentialEnum } from "./enums";

const ReuseAndCircularitySchema = z.object({
  disassemblyRating: DisassemblyRatingEnum
    .describe("Ease of disassembly rated from 1 (not possible) to 5 (tool-free), based on ISO 20887:2020.")
    .openapi({
      description: "Ease of disassembly rated from 1 (not possible) to 5 (tool-free), based on ISO 20887:2020.",
      example: "3",
    }),

  reusePotential: ReusePotentialEnum
    .describe("End-of-life potential of the element, such as single-use or recyclable.")
    .openapi({
      description: "End-of-life potential of the element, such as single-use, recyclable, or remanufacturable.",
      example: "recyclable",
    }),

  refurbishmentScope: RefurbishmentScopeEnum
    .describe("Extent to which the element can be refurbished after use.")
    .openapi({
      description: "Extent of refurbishment: none, surface-only, partial, or full reuse of functional components.",
      example: "partial",
    }),

  circularityCertification: CircularityCertificationEnum
    .describe("Cradle to Cradle or equivalent circularity certification level.")
    .openapi({
      description: "Circularity certification level (e.g., C2C_gold, C2C_platinum).",
      example: "C2C_gold",
    }),
});

type ReuseAndCircularity = z.infer<typeof ReuseAndCircularitySchema>;

export { ReuseAndCircularitySchema, ReuseAndCircularity };