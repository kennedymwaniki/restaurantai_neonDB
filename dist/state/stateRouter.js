"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stateRouter = void 0;
const hono_1 = require("hono");
const stateController_1 = require("./stateController");
exports.stateRouter = new hono_1.Hono();
// get users route
exports.stateRouter.get("/state", stateController_1.listState);
exports.stateRouter.get("/state/:id", stateController_1.getState);
exports.stateRouter.post("/state", stateController_1.createState);
exports.stateRouter.delete("/state/:id", stateController_1.deleteState);
exports.stateRouter.put("/state/:id", stateController_1.updateState);
