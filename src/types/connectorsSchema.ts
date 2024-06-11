import { z } from "zod";

const ConnectorsSchema = z.object({
    connectorTypes: z.array(z.string()),
    compatibility: z.string()
});
export { ConnectorsSchema };