"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const userController_1 = require("./userController");
const hono_1 = require("hono");
exports.userRouter = new hono_1.Hono();
// get users route
exports.userRouter.get("/users", userController_1.listUsers);
exports.userRouter.post("/users", userController_1.createUser);
exports.userRouter.get("/users/:id", userController_1.getUser);
// create a user
//update a user
exports.userRouter.put("/users/:id", userController_1.updateUser);
// delete user
exports.userRouter.delete("/users/:id", userController_1.deleteUser);
//delete user
exports.userRouter.post("/users/:id", userController_1.deleteUser);
// userRouter.put("/users/:id", updateUser);
