"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOrderStatus = exports.updateOrderStatus = exports.createOrderStatus = exports.getStatusOrder = exports.listOrderStatus = void 0;
const orderStatusService_1 = require("./orderStatusService");
// get all users
const listOrderStatus = async (c) => {
    const data = await (0, orderStatusService_1.orderStatusService)();
    return c.json(data);
};
exports.listOrderStatus = listOrderStatus;
const getStatusOrder = async (c) => {
    try {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id))
            return c.text("Invalid ID", 400);
        const order = await (0, orderStatusService_1.getOrderStatusService)(id);
        if (!order) {
            return c.text("OrderStatus not found", 404);
        }
        return c.json(order, 200);
    }
    catch (error) {
        console.error(error?.message);
        return c.json({ error: error?.message }, 500);
    }
};
exports.getStatusOrder = getStatusOrder;
// Create order
const createOrderStatus = async (c) => {
    try {
        const orderData = await c.req.json();
        const createdStateMsg = await (0, orderStatusService_1.createOrderStatusService)(orderData);
        if (!createdStateMsg)
            return c.text("Order not created", 500);
        return c.json({ msg: createdStateMsg }, 201);
    }
    catch (error) {
        console.error(error?.message);
        return c.json({ error: error?.message }, 500);
    }
};
exports.createOrderStatus = createOrderStatus;
// Update order by ID
const updateOrderStatus = async (c) => {
    try {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id))
            return c.text("Invalid ID", 400);
        const orderData = await c.req.json();
        const updatedStateMsg = await (0, orderStatusService_1.updateOrderStatusService)(id, orderData);
        if (!updatedStateMsg)
            return c.text("Order not updated", 404);
        return c.json({ msg: updatedStateMsg }, 200);
    }
    catch (error) {
        console.error(error?.message);
        return c.json({ error: error?.message }, 500);
    }
};
exports.updateOrderStatus = updateOrderStatus;
// Delete order by ID
const deleteOrderStatus = async (c) => {
    try {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id))
            return c.text("Invalid ID", 400);
        const deletedStateMsg = await (0, orderStatusService_1.deleteOrderStatusService)(id);
        if (!deletedStateMsg)
            return c.text("Order not deleted", 404);
        return c.json({ msg: deletedStateMsg }, 200);
    }
    catch (error) {
        console.error(error?.message);
        return c.json({ error: error?.message }, 500);
    }
};
exports.deleteOrderStatus = deleteOrderStatus;
