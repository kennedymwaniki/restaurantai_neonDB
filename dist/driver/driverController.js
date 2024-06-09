"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDriver = exports.updateDriver = exports.createDriver = exports.getDriver = exports.getDrivers = void 0;
const driverService_1 = require("./driverService");
// get all users
const getDrivers = async (c) => {
    const data = await (0, driverService_1.driversService)();
    return c.json(data);
};
exports.getDrivers = getDrivers;
const getDriver = async (c) => {
    try {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id))
            return c.text("Invalid ID", 400);
        const driver = await (0, driverService_1.getDriverService)(id);
        if (!driver) {
            return c.text("Driver not found", 404);
        }
        return c.json(driver, 200);
    }
    catch (error) {
        console.error(error?.message);
        return c.json({ error: error?.message }, 500);
    }
};
exports.getDriver = getDriver;
// Create driver
const createDriver = async (c) => {
    try {
        const driverData = await c.req.json();
        const createdStateMsg = await (0, driverService_1.createDriverService)(driverData);
        if (!createdStateMsg)
            return c.text("State not created", 500);
        return c.json({ msg: createdStateMsg }, 201);
    }
    catch (error) {
        console.error(error?.message);
        return c.json({ error: error?.message }, 500);
    }
};
exports.createDriver = createDriver;
// Update driver by ID
const updateDriver = async (c) => {
    try {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id))
            return c.text("Invalid ID", 400);
        const driverData = await c.req.json();
        const updatedStateMsg = await (0, driverService_1.updateDriverService)(id, driverData);
        if (!updatedStateMsg)
            return c.text("driver not updated", 404);
        return c.json({ msg: updatedStateMsg }, 200);
    }
    catch (error) {
        console.error(error?.message);
        return c.json({ error: error?.message }, 500);
    }
};
exports.updateDriver = updateDriver;
// Delete driver by ID
const deleteDriver = async (c) => {
    try {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id))
            return c.text("Invalid ID", 400);
        const deletedStateMsg = await (0, driverService_1.deleteDriverService)(id);
        if (!deletedStateMsg)
            return c.text("driver not deleted", 404);
        return c.json({ msg: deletedStateMsg }, 200);
    }
    catch (error) {
        console.error(error?.message);
        return c.json({ error: error?.message }, 500);
    }
};
exports.deleteDriver = deleteDriver;
