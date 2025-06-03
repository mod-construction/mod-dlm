import { z } from "zod";
import { CertificationsSchema } from "./certificationsSchema";

const DocumentationAndComplianceSchema = z.object({
    technicalSpecifications: z.string(),
    certifications: CertificationsSchema
});

type DocumentationAndCompliance = z.infer<typeof DocumentationAndComplianceSchema>;

export { DocumentationAndComplianceSchema, DocumentationAndCompliance };