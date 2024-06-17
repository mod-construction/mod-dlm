import { z } from "zod";
import { ElementIdSchema, PrefabElementSchema } from "../entities/prefabElementSchema";
import { ZodOpenApiOperationObject } from "zod-openapi";

const ElementCreateSchema = PrefabElementSchema.omit({ id: true }).openapi({
    ref: "ElementCreate",
    description: "An element to create.",
});

export const GetElementQuerySchema = z
    .strictObject({
        /**
         * A unique identifier for an element
         * @example "4dd643ff-7ec7-4666-9c88-50b7d3da34e4"
         */
        id: ElementIdSchema,
    })
    .openapi({ description: 'Get Element Query Parameters' });

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
        "400": { description: "Bad request." },
        "401": { description: "Authorization information is missing or invalid." },
    },
};

const getElementOperation: ZodOpenApiOperationObject = {
    operationId: "getElement",
    summary: "Get an element",
    description: "Gets an element from the database.",
    requestParams: {
        query: GetElementQuerySchema,
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
        "400": { description: "Bad request." },
        "401": { description: "Authorization information is missing or invalid." },
        "404": { description: "An element with the specified ID was not found." },
    },
};

export { createElementOperation, getElementOperation }