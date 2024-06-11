import { DescriptiveMetadata } from "./DescriptiveMetadata";
import { AdditionalAttributes } from "./AdditionalAttributes";

export interface PrefabElement {
    id: number;
    name: string;
    description: string;
    geometricProperties: GeometricProperties;
    descriptiveMetadata: DescriptiveMetadata;
    visualAndAestheticAttributes: VisualAndAestheticAttributes;
    documentationAndCompliance: DocumentationAndCompliance;
    additionalAttributes: AdditionalAttributes;
    productAttributes: ProductAttributes;
}