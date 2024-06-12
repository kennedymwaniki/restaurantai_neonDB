"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteState = exports.updateState = exports.createState = exports.getState = exports.listState = void 0;
const stateService_1 = require("./stateService");
// get all users
const listState = async (c) => {
    const data = await (0, stateService_1.stateService)();
    return c.json(data);
};
exports.listState = listState;
const getState = async (c) => {
    try {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id))
            return c.text("Invalid ID", 400);
        const state = await (0, stateService_1.getStateService)(id);
        if (!state) {
            return c.text("State not found", 404);
        }
        return c.json(state, 200);
    }
    catch (error) {
        console.error(error?.message);
        return c.json({ error: error?.message }, 500);
    }
};
exports.getState = getState;
// Create state
const createState = async (c) => {
    try {
        const stateData = await c.req.json();
        const createdStateMsg = await (0, stateService_1.createStateService)(stateData);
        if (!createdStateMsg)
            return c.text("State not created", 500);
        return c.json({ msg: createdStateMsg }, 201);
    }
    catch (error) {
        console.error(error?.message);
        return c.json({ error: error?.message }, 500);
    }
};
exports.createState = createState;
// Update state by ID
const updateState = async (c) => {
    try {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id))
            return c.text("Invalid ID", 400);
        const stateData = await c.req.json();
        const updatedStateMsg = await (0, stateService_1.updateStateService)(id, stateData);
        if (!updatedStateMsg)
            return c.text("State not updated", 404);
        return c.json({ msg: updatedStateMsg }, 200);
    }
    catch (error) {
        console.error(error?.message);
        return c.json({ error: error?.message }, 500);
    }
};
exports.updateState = updateState;
// Delete state by ID
const deleteState = async (c) => {
    try {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id))
            return c.text("Invalid ID", 400);
        const deletedStateMsg = await (0, stateService_1.deletestateService)(id);
        if (!deletedStateMsg)
            return c.text("State not deleted", 404);
        return c.json({ msg: deletedStateMsg }, 200);
    }
    catch (error) {
        console.error(error?.message);
        return c.json({ error: error?.message }, 500);
    }
};
exports.deleteState = deleteState;
