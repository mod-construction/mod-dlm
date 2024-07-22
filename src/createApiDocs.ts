import "zod-openapi/extend";
import * as fs from "node:fs";
import path from "node:path";
import { stringify } from "yaml";
import { createDocument } from "zod-openapi";
import { createElementOperation, getElementOperation } from "./types/api/prefabElement";
import npmPackage from "../package.json"

const document = createDocument({
    openapi: "3.1.0",
    info: {
        title: "mod-dlm API",
        description: "mod-dlm is an open source domain specific language to describe prefab construction elements. This project provides tools for defining entity models and automatically generating CRUD APIs, enabling suppliers to create and manage catalogs of their products easily.",
        version: npmPackage.version,
        contact: {
            name: "Contact us",
            url: "https://mod.construction",
            email: "info@mod.construction"

        },
        license: {
            name: "MIT",
            url: "https://github.com/mod-construction/mod-dlm/blob/main/LICENSE"
        },
        "x-logo": {
            url: "mod-dlm-logo.png",
            backgroundColor: "#FFFFFF",
            altText: "mod-dlm logo"
        }
    },
    components: {
        securitySchemes: {
            apiKey: {
                type: "apiKey",
                in: "header",
                name: "X-API-KEY",
                description: "API key for programmatic access."
            },
            bearer: {
                type: "http",
                scheme: "bearer",
                bearerFormat: "JWT",
                description: "An embedded jason web token."
            }
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
            apiKey: [],
            bearer: [],
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
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
}
fs.writeFileSync(path.join(dir, 'openapi.yaml'), yaml);
