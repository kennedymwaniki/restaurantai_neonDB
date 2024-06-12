"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const authBearer_1 = require("../middleware/authBearer");
const userController_1 = require("./userController");
const hono_1 = require("hono");
exports.userRouter = new hono_1.Hono();
// userRouter.use("*", adminRoleAuth);
// get users route
exports.userRouter.get("/users", authBearer_1.bothRoleAuth, userController_1.listUsers);
exports.userRouter.get("/users/:id", userController_1.getUser);
exports.userRouter.post("/users", userController_1.createUser);
// create a user
//update a user
exports.userRouter.put("/users/:id", userController_1.updateUser);
// delete user
exports.userRouter.delete("/users/:id", userController_1.deleteUser);
//delete user
exports.userRouter.post("/users/:id", userController_1.deleteUser);
// userRouter.put("/users/:id", updateUser);
