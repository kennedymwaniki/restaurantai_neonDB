"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMenu = exports.updateMenu = exports.createmenu = exports.getMenu = exports.listmenu = void 0;
const menuItemService_1 = require("./menuItemService");
// get all users
const listmenu = async (c) => {
    const data = await (0, menuItemService_1.menuService)();
    return c.json(data);
};
exports.listmenu = listmenu;
const getMenu = async (c) => {
    try {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id))
            return c.text("Invalid ID", 400);
        const menu = await (0, menuItemService_1.getmenuService)(id);
        if (!menu) {
            return c.text("menu not found", 404);
        }
        return c.json(menu, 200);
    }
    catch (error) {
        console.error(error?.message);
        return c.json({ error: error?.message }, 500);
    }
};
exports.getMenu = getMenu;
// Create menu
const createmenu = async (c) => {
    try {
        const menuData = await c.req.json();
        const createdmenuMsg = await (0, menuItemService_1.createmenuService)(menuData);
        if (!createdmenuMsg)
            return c.text("menuItem not created", 500);
        return c.json({ msg: createdmenuMsg }, 201);
    }
    catch (error) {
        console.error(error?.message);
        return c.json({ error: error?.message }, 500);
    }
};
exports.createmenu = createmenu;
// Update menu by ID
const updateMenu = async (c) => {
    try {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id))
            return c.text("Invalid ID", 400);
        const menuData = await c.req.json();
        const updatedmenuMsg = await (0, menuItemService_1.updatemenuService)(id, menuData);
        if (!updatedmenuMsg)
            return c.text("menuItem not updated", 404);
        return c.json({ msg: updatedmenuMsg }, 200);
    }
    catch (error) {
        console.error(error?.message);
        return c.json({ error: error?.message }, 500);
    }
};
exports.updateMenu = updateMenu;
// Delete state by ID
const deleteMenu = async (c) => {
    try {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id))
            return c.text("Invalid ID", 400);
        const deletedStateMsg = await (0, menuItemService_1.deletemenuService)(id);
        if (!deletedStateMsg)
            return c.text("MenuItem not deleted", 404);
        return c.json({ msg: deletedStateMsg }, 200);
    }
    catch (error) {
        console.error(error?.message);
        return c.json({ error: error?.message }, 500);
    }
};
exports.deleteMenu = deleteMenu;
