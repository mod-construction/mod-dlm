import { z } from "zod";
import { ElementIdSchema, PrefabElementSchema } from "../entities/prefabElementSchema";
import { ZodOpenApiOperationObject } from "zod-openapi";

const ElementCreateSchema = PrefabElementSchema.omit({ id: true }).openapi({
    ref: "ElementCreate",
    description: "An element to create.",
});

const createElementOperation: ZodOpenApiOperationObject = {
    operationId: "createElement",
    summary: "Create a new element",
    description: "Creates a new element in the database.",
    requestBody: {
        description: "The element to create.",
        content: {
            "application/json": {
                schema: ElementCreateSchema,
            },
        },
    },
    responses: {
        "201": {
            description: "The element was created successfully.",
            content: {
                "application/json": {
                    schema: PrefabElementSchema,
                },
            },
        },
    },
};

const getElementOperation: ZodOpenApiOperationObject = {
    operationId: "getElement",
    summary: "Get an element",
    description: "Gets an element from the database.",
    requestParams: {
        path: z.object({ id: ElementIdSchema }),
    },
    responses: {
        "200": {
            description: "The element was retrieved successfully.",
            content: {
                "application/json": {
                    schema: PrefabElementSchema,
                },
            },
        },
    },
};

export { createElementOperation, getElementOperation }