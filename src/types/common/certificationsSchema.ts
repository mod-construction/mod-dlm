import { z } from "zod";

const CertificationsSchema = z.object({
    certificationTypes: z.array(z.string()),
    regulatoryApprovals: z.array(z.string())
});

type Certifications = z.infer<typeof CertificationsSchema>;

export { CertificationsSchema, Certifications };