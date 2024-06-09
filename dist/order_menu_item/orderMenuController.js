"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOrderMenuItem = exports.updateOrderMenuItem = exports.createOrderMenuItem = exports.getOrderMenuItem = exports.listOrderMenuItem = void 0;
const orderMenuService_1 = require("./orderMenuService");
// get all users
const listOrderMenuItem = async (c) => {
    const data = await (0, orderMenuService_1.orderMenuService)();
    return c.json(data);
};
exports.listOrderMenuItem = listOrderMenuItem;
const getOrderMenuItem = async (c) => {
    try {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id))
            return c.text("Invalid ID", 400);
        const orderMenuItem = await (0, orderMenuService_1.getOrderMenuItemService)(id);
        if (!orderMenuItem) {
            return c.text("OrderMenu Item not found", 404);
        }
        return c.json(orderMenuItem, 200);
    }
    catch (error) {
        console.error(error?.message);
        return c.json({ error: error?.message }, 500);
    }
};
exports.getOrderMenuItem = getOrderMenuItem;
// Create orderMenuItem
const createOrderMenuItem = async (c) => {
    try {
        const stateData = await c.req.json();
        const createdStateMsg = await (0, orderMenuService_1.createOrderMenuItemService)(stateData);
        if (!createdStateMsg)
            return c.text("State not created", 500);
        return c.json({ msg: createdStateMsg }, 201);
    }
    catch (error) {
        console.error(error?.message);
        return c.json({ error: error?.message }, 500);
    }
};
exports.createOrderMenuItem = createOrderMenuItem;
// Update orderMenuItem by ID
const updateOrderMenuItem = async (c) => {
    try {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id))
            return c.text("Invalid ID", 400);
        const stateData = await c.req.json();
        const updatedStateMsg = await (0, orderMenuService_1.updateOrderMenuItemService)(id, stateData);
        if (!updatedStateMsg)
            return c.text("State not updated", 404);
        return c.json({ msg: updatedStateMsg }, 200);
    }
    catch (error) {
        console.error(error?.message);
        return c.json({ error: error?.message }, 500);
    }
};
exports.updateOrderMenuItem = updateOrderMenuItem;
// Delete orderMenuItem by ID
const deleteOrderMenuItem = async (c) => {
    try {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id))
            return c.text("Invalid ID", 400);
        const deletedStateMsg = await (0, orderMenuService_1.deleteOrderMenuItemService)(id);
        if (!deletedStateMsg)
            return c.text("OrderMenuItem not deleted", 404);
        return c.json({ msg: deletedStateMsg }, 200);
    }
    catch (error) {
        console.error(error?.message);
        return c.json({ error: error?.message }, 500);
    }
};
exports.deleteOrderMenuItem = deleteOrderMenuItem;
