"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCity = exports.updateCity = exports.createCity = exports.getCity = exports.listCities = void 0;
const cityService_1 = require("./cityService");
const listCities = async (c) => {
    const data = await (0, cityService_1.cityService)();
    return c.json(data);
};
exports.listCities = listCities;
const getCity = async (c) => {
    try {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id))
            return c.text("Invalid ID", 400);
        const state = await (0, cityService_1.getCityService)(id);
        if (!state) {
            return c.text("City not found", 404);
        }
        return c.json(state, 200);
    }
    catch (error) {
        console.error(error?.message);
        return c.json({ error: error?.message }, 500);
    }
};
exports.getCity = getCity;
// Create state
const createCity = async (c) => {
    try {
        const stateData = await c.req.json();
        const createdStateMsg = await (0, cityService_1.createCityService)(stateData);
        if (!createdStateMsg)
            return c.text("State not created", 500);
        return c.json({ msg: createdStateMsg }, 201);
    }
    catch (error) {
        console.error(error?.message);
        return c.json({ error: error?.message }, 500);
    }
};
exports.createCity = createCity;
// Update state by ID
const updateCity = async (c) => {
    try {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id))
            return c.text("Invalid ID", 400);
        const stateData = await c.req.json();
        const updatedStateMsg = await (0, cityService_1.updateStateService)(id, stateData);
        if (!updatedStateMsg)
            return c.text("State not updated", 404);
        return c.json({ msg: updatedStateMsg }, 200);
    }
    catch (error) {
        console.error(error?.message);
        return c.json({ error: error?.message }, 500);
    }
};
exports.updateCity = updateCity;
// Delete state by ID
const deleteCity = async (c) => {
    try {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id))
            return c.text("Invalid ID", 400);
        const deletedStateMsg = await (0, cityService_1.deletestateService)(id);
        if (!deletedStateMsg)
            return c.text("State not deleted", 404);
        return c.json({ msg: deletedStateMsg }, 200);
    }
    catch (error) {
        console.error(error?.message);
        return c.json({ error: error?.message }, 500);
    }
};
exports.deleteCity = deleteCity;
