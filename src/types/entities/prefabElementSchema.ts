import { z } from "zod";
import { AestheticAndCustomizationOptionsSchema } from "../common/aestheticAndCustomizationOptionsSchema";
import { BoundingBoxSchema } from "../common/boundingBoxSchema";
import { DimensionalAttributesSchema } from "../common/dimensionalAttributesSchema";
import { DocumentationAndComplianceSchema } from "../common/documentationAndComplianceSchema";
import { EconomicFactorsSchema } from "../common/economicFactorsSchema";
import { InstallationAndConnectivitySchema } from "../common/installationAndConnectivitySchema";
import { LifecycleAndMaintenanceSchema } from "../common/lifecycleAndMaintenanceSchema";
import { PerformanceAttributesSchema } from "../common/performanceAttributesSchema";
import { ProductMaterialAttributesSchema } from "../common/productMaterialAttributesSchema";
import { StructuralPropertiesSchema } from "../common/structuralPropertiesSchema";
import { SustainabilityAttributesSchema } from "../common/sustainabilityAttributesSchema";
import { ProductCategorySchema } from "../common/productCategorySchema";
import { VersionMetadataSchema } from "../common/versionMetadataSchema";
import { ReuseAndCircularitySchema } from "../common/reuseAndCircularitySchema";
import { IfcBuildingElementEnum } from "../common/enums";

const ElementIdSchema = z.string().uuid().openapi({
    description: "A unique identifier for an element",
    example: "4dd643ff-7ec7-4666-9c88-50b7d3da34e4",
    ref: "ElementId",
    param: {
        in: "path",
        name: "id",
    }
});

const PrefabElementSchema = z.object({
    id: ElementIdSchema
        .describe("Unique identifier for the prefab element (UUID).")
        .openapi({
            description: "A unique identifier for the prefab element (UUID).",
            example: "4dd643ff-7ec7-4666-9c88-50b7d3da34e4"
        }),
    versionMetadata: VersionMetadataSchema
        .describe("Versioning and publishing status metadata of the element.")
        .openapi({
            description: "Versioning and publishing status metadata of the element."
        }),
    name: z.string().min(1, "Name is required")
        .describe("Name of the prefab element")
        .openapi({
            description: "Human-readable name of the prefab element.",
            example: "Cross-Laminated Timber Wall Panel"
        }),
    description: z.string().min(1, "Description is required")
        .describe("Detailed description of the element")
        .openapi({
            description: "Detailed description of the prefab element, including its intended use or application.",
            example: "This CLT wall panel is suitable for multi-story residential buildings and meets fire resistance standards."
        }),
    boundingBox: BoundingBoxSchema
        .describe("3D bounding dimensions of the prefab element.")
        .openapi({
            description: "3D bounding dimensions of the prefab element, defining its spatial envelope."
        }),
    images: z.array(z.string()).min(1, "At least one image is required")
        .describe("Image URLs of the element")
        .openapi({
            description: "List of image URLs showing the prefab element from various angles.",
            example: ["https://example.com/images/clt-wall-front.png"]
        }),
    productCategory: ProductCategorySchema
        .describe("Product category classification used for filtering and recommendation.")
        .openapi({
            description: "Product category classification (e.g., Wall Panels, Stairs, Facade Elements)."
        }),
    material: ProductMaterialAttributesSchema
        .describe("Material composition and technical attributes.")
        .openapi({
            description: "Material and physical properties of the prefab element."
        }),
    dimensional: DimensionalAttributesSchema
        .describe("Dimensional specifications like height, width, thickness, etc.")
        .openapi({
            description: "Dimensional characteristics of the prefab element."
        }),
    structuralProperties: StructuralPropertiesSchema.optional()
        .describe("Load-bearing and performance data relevant to structural design.")
        .openapi({
            description: "Optional structural performance details like capacity, stiffness, or seismic resistance."
        }),
    performance: PerformanceAttributesSchema.optional()
        .describe("Optional mechanical, thermal, and acoustic performance data.")
        .openapi({
            description: "Optional performance metrics related to strength, insulation, or soundproofing."
        }),
    sustainability: SustainabilityAttributesSchema.optional()
        .describe("Optional environmental attributes including embodied carbon or certifications.")
        .openapi({
            description: "Environmental and sustainability performance such as EPDs or recyclability."
        }),
    reuseAndCircularity: ReuseAndCircularitySchema.optional()
        .describe("Optional circularity data for reuse, disassembly, and refurbishment.")
        .openapi({
            description: "Optional data describing how reusable or refurbishable the product is."
        }),
    documentationAndCompliance: DocumentationAndComplianceSchema.optional()
        .describe("Optional links to technical documents, certificates, and compliance data.")
        .openapi({
            description: "Optional metadata linking to certificates, spec sheets, or regulatory documents."
        }),
    installationAndConnectivity: InstallationAndConnectivitySchema.optional()
        .describe("Optional installation and interface information for compatibility checks.")
        .openapi({
            description: "Optional installation guidelines and connectivity interface descriptions."
        }),
    lifecycleAndMaintenance: LifecycleAndMaintenanceSchema.optional()
        .describe("Optional data for durability, service intervals, and maintenance needs.")
        .openapi({
            description: "Optional data describing maintenance schedules or expected lifecycle."
        }),
    aestheticAndCustomizationOptions: AestheticAndCustomizationOptionsSchema.optional()
        .describe("Optional fields related to colors, textures, and customization.")
        .openapi({
            description: "Optional aesthetic options like finishes or material variations."
        }),
    economicFactors: EconomicFactorsSchema.optional()
        .describe("Optional fields describing cost, lead time, and economic implications.")
        .openapi({
            description: "Optional cost estimation, lead time, and supply constraints."
        }),
    ifcType: IfcBuildingElementEnum.optional()
        .describe("Optional IFC classification type for BIM model integration.")
        .openapi({
            description: "IFC Building Element types based on IFC 4.3 used in BIM tools for semantic classification. (e.g., IfcWall, IfcSlab).",
            example: "IfcWallStandardCase",
        }),
    bimModelUrl: z.string().url().optional()
      .describe("Optional URL linking to the BIM model (e.g., IFC file or 3D viewer link) for the prefab element.")
      .openapi({
        description: "Optional URL pointing to a downloadable BIM model or online viewer for the element.",
        example: "https://example.com/models/clt-wall.ifc",
      }),
}).openapi({
    description: "Prefab Element",
    ref: "PrefabElement"
});

type PrefabElement = z.infer<typeof PrefabElementSchema>;

export { ElementIdSchema, PrefabElementSchema, PrefabElement };