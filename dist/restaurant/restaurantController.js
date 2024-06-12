"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleterestaurant = exports.updaterestaurant = exports.createrestaurant = exports.getrestaurant = exports.listrestaurant = void 0;
const restaurantService_1 = require("./restaurantService");
// get all users
const listrestaurant = async (c) => {
    const data = await (0, restaurantService_1.restaurantService)();
    return c.json(data);
};
exports.listrestaurant = listrestaurant;
const getrestaurant = async (c) => {
    try {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id))
            return c.text("Invalid ID", 400);
        const restaurant = await (0, restaurantService_1.getrestaurantService)(id);
        if (!restaurant) {
            return c.text("restaurant not found", 404);
        }
        return c.json(restaurant, 200);
    }
    catch (error) {
        console.error(error?.message);
        return c.json({ error: error?.message }, 500);
    }
};
exports.getrestaurant = getrestaurant;
// Create restaurant
const createrestaurant = async (c) => {
    try {
        const restaurantData = await c.req.json();
        const createdrestaurantMsg = await (0, restaurantService_1.createrestaurantService)(restaurantData);
        if (!createdrestaurantMsg)
            return c.text("restaurant not created", 500);
        return c.json({ msg: createdrestaurantMsg }, 201);
    }
    catch (error) {
        console.error(error?.message);
        return c.json({ error: error?.message }, 500);
    }
};
exports.createrestaurant = createrestaurant;
// Update restaurant by ID
const updaterestaurant = async (c) => {
    try {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id))
            return c.text("Invalid ID", 400);
        const restaurantData = await c.req.json();
        const updatedrestaurantMsg = await (0, restaurantService_1.updaterestaurantService)(id, restaurantData);
        if (!updatedrestaurantMsg)
            return c.text("restaurant not updated", 404);
        return c.json({ msg: updatedrestaurantMsg }, 200);
    }
    catch (error) {
        console.error(error?.message);
        return c.json({ error: error?.message }, 500);
    }
};
exports.updaterestaurant = updaterestaurant;
// Delete restaurant by ID
const deleterestaurant = async (c) => {
    try {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id))
            return c.text("Invalid ID", 400);
        const deletedrestaurantMsg = await (0, restaurantService_1.deleterestaurantService)(id);
        if (!deletedrestaurantMsg)
            return c.text("restaurant not deleted", 404);
        return c.json({ msg: deletedrestaurantMsg }, 200);
    }
    catch (error) {
        console.error(error?.message);
        return c.json({ error: error?.message }, 500);
    }
};
exports.deleterestaurant = deleterestaurant;
