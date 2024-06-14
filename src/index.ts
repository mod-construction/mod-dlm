import 'zod-openapi/extend';
import { createDocument } from "zod-openapi";
import { stringify } from "yaml";
import { createElementOperation, getElementOperation } from "./types/api/prefabElement";
import * as fs from "node:fs";
import path from "node:path";

const document = createDocument({
    openapi: "3.1.0",
    info: {
        title: "MOD-dlm API",
        description: "A CRUD API to manage prefab elements using the open-source MOD-dlm",
        version: "1.0.0",
        license: {
            name: "MIT",
            url: "https://opensource.org/licenses/MIT"
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
const dir = "build"
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}
fs.writeFileSync(path.join(dir, 'openapi.yaml'), yaml);
