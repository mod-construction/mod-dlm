import 'zod-openapi/extend';
import { createDocument } from "zod-openapi";
import { stringify } from "yaml";
import { createElementOperation, getElementOperation } from "./types/api/prefabElement";
import * as fs from "node:fs";
import path from "node:path";

const document = createDocument({
    openapi: "3.1.0",
    info: {
        title: "mod-dlm API",
        description: "mod-dlm is an open source project designed to create a domain-specific language (DSL) for describing prefab elements in the Architecture, Engineering, and Construction (AEC) industry. This project provides tools for defining entity models and automatically generating CRUD APIs, enabling suppliers to create and manage catalogs of their products easily.",
        version: "1.0.0",
        license: {
            name: "MIT",
            url: "https://github.com/mod-construction/mod-dlm/blob/main/LICENSE"
        },
        "x-logo": {
            url: "/assets/mod-dlm-logo.png",
            backgroundColor: "#FFFFFF",
            altText: "mod-dlm logo"
        }
    },
    components: {
        securitySchemes: {
            s2sauth: {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT',
                description: 'An s2s token issued by an allow listed consumer',
            },
        },
    },
    servers: [
        {
            url: "http://localhost:8080",
            description: "The dev server.",
        },
        {
            url: "https://mod.construction",
            description: "The production server.",
        },
    ],
    security: [
        {
            s2sauth: [],
        },
    ],
    paths: {
        '/element': {
            get: getElementOperation,
            post: createElementOperation,
        },
    }
});

const yaml = stringify(document, { aliasDuplicateObjects: false });
const dir = "openapi"
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}
fs.writeFileSync(path.join(dir, 'openapi.yaml'), yaml);
