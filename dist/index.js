"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_server_1 = require("@hono/node-server");
const hono_1 = require("hono");
require("dotenv/config");
const usersRouter_1 = require("./users/usersRouter");
const cityRouter_1 = require("./city/cityRouter");
const stateRouter_1 = require("./state/stateRouter");
const addressRouter_1 = require("./address/addressRouter");
const categoryRouter_1 = require("./category/categoryRouter");
const restaurantRouters_1 = require("./restaurant/restaurantRouters");
const menuItemRouter_1 = require("./menu_Item/menuItemRouter");
const commentRouter_1 = require("./comments/commentRouter");
const driverRouter_1 = require("./driver/driverRouter");
const orderRouter_1 = require("./orders/orderRouter");
const orderMenuRouter_1 = require("./order_menu_item/orderMenuRouter");
const app = new hono_1.Hono().basePath("/api");
app.get("/", (c) => {
    return c.text("Hello Hono!");
});
app.get("/news", (c) => {
    return c.text("Hello ken");
});
app.route("/", usersRouter_1.userRouter);
app.route("/", cityRouter_1.cityRouter);
app.route("/", stateRouter_1.stateRouter);
app.route("/", addressRouter_1.addressRouter);
app.route("/", categoryRouter_1.categoryRouter);
app.route("/", restaurantRouters_1.restaurantRouter);
app.route("/", menuItemRouter_1.menuRouter);
app.route("/", commentRouter_1.commentRouter);
app.route("/", driverRouter_1.driverRouter);
app.route("/", orderRouter_1.orderRouter);
app.route("/", orderMenuRouter_1.orderMenuItemRouter);
// example
const port = 3000;
console.log(`Server is running on port ${process.env.PORT}`);
(0, node_server_1.serve)({
    fetch: app.fetch,
    port: Number(process.env.PORT),
});
