"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUser = exports.listUsers = void 0;
const userServices_1 = require("./userServices");
const users = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Doe", email: "jane@example.com" },
    { id: 3, name: "Allison", email: "allison@gmail.com" },
    { id: 4, name: "neddy mwaniki", email: "kennedymwaniki@hotmail.com" },
    { id: 5, name: "ivy kimani", email: "ivykimani@example.com" },
];
// get all users
const listUsers = async (c) => {
    const data = await (0, userServices_1.usersService)();
    return c.json(data);
};
exports.listUsers = listUsers;
//get one user
const getUser = (c) => {
    const id = c.req.param("id");
    console.log(id);
    const user = users.find((user) => user.id === parseInt(id, 10));
    if (!user) {
        return c.json({ error: "User not found" }, 404);
    }
    return c.json(user, 200);
};
exports.getUser = getUser;
// create a new user
const createUser = async (c) => {
    try {
        const user = await c.req.json();
        console.log(user);
        const createdUser = await (0, userServices_1.createUserService)(user);
        if (!createdUser) {
            return c.text("no user created");
        }
        return c.json({ msg: createdUser }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.createUser = createUser;
const updateUser = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    const user = await c.req.json();
    try {
        // search for the user
        const searchedUser = await (0, userServices_1.getUserService)(id);
        if (searchedUser == undefined)
            return c.text("User not found", 404);
        // get the data and update it
        const res = await (0, userServices_1.updateUserService)(id, user);
        // return a success message
        if (!res)
            return c.text("User not updated", 404);
        return c.json({ msg: res }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.updateUser = updateUser;
//delete user
const deleteUser = async (c) => {
    const id = Number(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    try {
        //search for the user
        const user = await (0, userServices_1.getUserService)(id);
        if (user == undefined)
            return c.text("User not found", 404);
        //deleting the user
        const res = await (0, userServices_1.deleteUserService)(id);
        if (!res)
            return c.text("User not deleted", 404);
        return c.json({ msg: res }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.deleteUser = deleteUser;
