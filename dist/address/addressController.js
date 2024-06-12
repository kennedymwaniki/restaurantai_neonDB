"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAddress = exports.updateAddress = exports.createAddress = exports.getAddress = exports.listAddress = void 0;
const addressService_1 = require("./addressService");
// get all users
const listAddress = async (c) => {
    const data = await (0, addressService_1.addressService)();
    return c.json(data);
};
exports.listAddress = listAddress;
const getAddress = async (c) => {
    try {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id))
            return c.text("Invalid ID", 400);
        const address = await (0, addressService_1.getAddressService)(id);
        if (!address) {
            return c.text("Address not found", 404);
        }
        return c.json(address, 200);
    }
    catch (error) {
        console.error(error?.message);
        return c.json({ error: error?.message }, 500);
    }
};
exports.getAddress = getAddress;
// Create address
const createAddress = async (c) => {
    try {
        const stateData = await c.req.json();
        const createdStateMsg = await (0, addressService_1.createAddressService)(stateData);
        if (!createdStateMsg)
            return c.text("Address not created", 500);
        return c.json({ msg: createdStateMsg }, 201);
    }
    catch (error) {
        console.error(error?.message);
        return c.json({ error: error?.message }, 500);
    }
};
exports.createAddress = createAddress;
// Update address by ID
const updateAddress = async (c) => {
    try {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id))
            return c.text("Invalid ID", 400);
        const stateData = await c.req.json();
        const updatedStateMsg = await (0, addressService_1.updateAddressService)(id, stateData);
        if (!updatedStateMsg)
            return c.text("Address not updated", 404);
        return c.json({ msg: updatedStateMsg }, 200);
    }
    catch (error) {
        console.error(error?.message);
        return c.json({ error: error?.message }, 500);
    }
};
exports.updateAddress = updateAddress;
// Delete address by ID
const deleteAddress = async (c) => {
    try {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id))
            return c.text("Invalid ID", 400);
        const deletedStateMsg = await (0, addressService_1.deleteAddressService)(id);
        if (!deletedStateMsg)
            return c.text("Address not deleted", 404);
        return c.json({ msg: deletedStateMsg }, 200);
    }
    catch (error) {
        console.error(error?.message);
        return c.json({ error: error?.message }, 500);
    }
};
exports.deleteAddress = deleteAddress;
