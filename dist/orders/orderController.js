"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOrder = exports.updateOrder = exports.createOrder = exports.getOrder = exports.listOrders = void 0;
const orderService_1 = require("./orderService");
// get all users
const listOrders = async (c) => {
    const data = await (0, orderService_1.ordersService)();
    return c.json(data);
};
exports.listOrders = listOrders;
const getOrder = async (c) => {
    try {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id))
            return c.text("Invalid ID", 400);
        const order = await (0, orderService_1.getOrdersService)(id);
        if (!order) {
            return c.text("Order not found", 404);
        }
        return c.json(order, 200);
    }
    catch (error) {
        console.error(error?.message);
        return c.json({ error: error?.message }, 500);
    }
};
exports.getOrder = getOrder;
// Create order
const createOrder = async (c) => {
    try {
        const orderData = await c.req.json();
        const createdStateMsg = await (0, orderService_1.createOrdersService)(orderData);
        if (!createdStateMsg)
            return c.text("Order not created", 500);
        return c.json({ msg: createdStateMsg }, 201);
    }
    catch (error) {
        console.error(error?.message);
        return c.json({ error: error?.message }, 500);
    }
};
exports.createOrder = createOrder;
// Update order by ID
const updateOrder = async (c) => {
    try {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id))
            return c.text("Invalid ID", 400);
        const orderData = await c.req.json();
        const updatedStateMsg = await (0, orderService_1.updateOrdersService)(id, orderData);
        if (!updatedStateMsg)
            return c.text("Order not updated", 404);
        return c.json({ msg: updatedStateMsg }, 200);
    }
    catch (error) {
        console.error(error?.message);
        return c.json({ error: error?.message }, 500);
    }
};
exports.updateOrder = updateOrder;
// Delete order by ID
const deleteOrder = async (c) => {
    try {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id))
            return c.text("Invalid ID", 400);
        const deletedStateMsg = await (0, orderService_1.deleteOrdersService)(id);
        if (!deletedStateMsg)
            return c.text("Order not deleted", 404);
        return c.json({ msg: deletedStateMsg }, 200);
    }
    catch (error) {
        console.error(error?.message);
        return c.json({ error: error?.message }, 500);
    }
};
exports.deleteOrder = deleteOrder;
