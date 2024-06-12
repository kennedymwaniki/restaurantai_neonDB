"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOwner = exports.updateOwner = exports.createOwner = exports.getOwner = exports.getOwners = void 0;
const restaurantOwnerService_1 = require("./restaurantOwnerService");
// get all users
const getOwners = async (c) => {
    const data = await (0, restaurantOwnerService_1.ownerService)();
    return c.json(data);
};
exports.getOwners = getOwners;
const getOwner = async (c) => {
    try {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id))
            return c.text("Invalid ID", 400);
        const owner = await (0, restaurantOwnerService_1.getOwnerService)(id);
        if (!owner) {
            return c.text("Owner not found", 404);
        }
        return c.json(owner, 200);
    }
    catch (error) {
        console.error(error?.message);
        return c.json({ error: error?.message }, 500);
    }
};
exports.getOwner = getOwner;
// Create driver
const createOwner = async (c) => {
    try {
        const ownerData = await c.req.json();
        const createdStateMsg = await (0, restaurantOwnerService_1.createOwnerService)(ownerData);
        if (!createdStateMsg)
            return c.text("owner not created", 500);
        return c.json({ msg: createdStateMsg }, 201);
    }
    catch (error) {
        console.error(error?.message);
        return c.json({ error: error?.message }, 500);
    }
};
exports.createOwner = createOwner;
// Update driver by ID
const updateOwner = async (c) => {
    try {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id))
            return c.text("Invalid ID", 400);
        const ownerData = await c.req.json();
        const updatedStateMsg = await (0, restaurantOwnerService_1.updateOwnerService)(id, ownerData);
        if (!updatedStateMsg)
            return c.text("driver not updated", 404);
        return c.json({ msg: updatedStateMsg }, 200);
    }
    catch (error) {
        console.error(error?.message);
        return c.json({ error: error?.message }, 500);
    }
};
exports.updateOwner = updateOwner;
// Delete driver by ID
const deleteOwner = async (c) => {
    try {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id))
            return c.text("Invalid ID", 400);
        const deletedStateMsg = await (0, restaurantOwnerService_1.deleteOwnerService)(id);
        if (!deletedStateMsg)
            return c.text("owner not deleted", 404);
        return c.json({ msg: deletedStateMsg }, 200);
    }
    catch (error) {
        console.error(error?.message);
        return c.json({ error: error?.message }, 500);
    }
};
exports.deleteOwner = deleteOwner;
