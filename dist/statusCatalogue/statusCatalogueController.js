"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCatalogue = exports.updateCatalogue = exports.createCatalogue = exports.getCatalogue = exports.getCatalogues = void 0;
const statusCatalogueService_1 = require("./statusCatalogueService");
// get all users
const getCatalogues = async (c) => {
    const data = await (0, statusCatalogueService_1.statusCatalogueService)();
    return c.json(data);
};
exports.getCatalogues = getCatalogues;
const getCatalogue = async (c) => {
    try {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id))
            return c.text("Invalid ID", 400);
        const statusCatalogue = await (0, statusCatalogueService_1.getStatusCatalogueService)(id);
        if (!statusCatalogue) {
            return c.text("Catalogue not found", 404);
        }
        return c.json(statusCatalogue, 200);
    }
    catch (error) {
        console.error(error?.message);
        return c.json({ error: error?.message }, 500);
    }
};
exports.getCatalogue = getCatalogue;
// Create statusCatalogue
const createCatalogue = async (c) => {
    try {
        const catalogueData = await c.req.json();
        const createdStateMsg = await (0, statusCatalogueService_1.createStatusCategoryService)(catalogueData);
        if (!createdStateMsg)
            return c.text("catalogue not created", 500);
        return c.json({ msg: createdStateMsg }, 201);
    }
    catch (error) {
        console.error(error?.message);
        return c.json({ error: error?.message }, 500);
    }
};
exports.createCatalogue = createCatalogue;
// Update statusCatalogue by ID
const updateCatalogue = async (c) => {
    try {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id))
            return c.text("Invalid ID", 400);
        const catalogueData = await c.req.json();
        const updatedStateMsg = await (0, statusCatalogueService_1.updateStatusCategoryService)(id, catalogueData);
        if (!updatedStateMsg)
            return c.text("statusCatalogue not updated", 404);
        return c.json({ msg: updatedStateMsg }, 200);
    }
    catch (error) {
        console.error(error?.message);
        return c.json({ error: error?.message }, 500);
    }
};
exports.updateCatalogue = updateCatalogue;
// Delete statusCatalogue by ID
const deleteCatalogue = async (c) => {
    try {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id))
            return c.text("Invalid ID", 400);
        const deletedStateMsg = await (0, statusCatalogueService_1.deleteStatusCategoryService)(id);
        if (!deletedStateMsg)
            return c.text("statusCatalogue not deleted", 404);
        return c.json({ msg: deletedStateMsg }, 200);
    }
    catch (error) {
        console.error(error?.message);
        return c.json({ error: error?.message }, 500);
    }
};
exports.deleteCatalogue = deleteCatalogue;
