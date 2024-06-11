import { z } from "zod";

const ManufacturerSchema = z.object({
    name: z.string(),
    contactInformation: z.string(),
    warrantyTerms: z.string()
});
export { ManufacturerSchema };