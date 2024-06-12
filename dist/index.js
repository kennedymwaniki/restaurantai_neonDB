"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
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
const authRouter_1 = require("./auth/authRouter");
const restaurantOwnerRouter_1 = require("./restaurant_owner/restaurantOwnerRouter");
const statusCatalogueRouter_1 = require("./statusCatalogue/statusCatalogueRouter");
const orderStatusRouter_1 = require("./orderStatus/orderStatusRouter");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const app = new hono_1.Hono();
// app.get("/", (c) => {
//   return c.text("Hello Hono!");
// });
app.get("/", async (c) => {
    try {
        const filePath = path_1.default.join(__dirname, "index.html");
        const fileContent = await fs_1.default.promises.readFile(filePath, "utf-8");
        return c.html(fileContent);
    }
    catch (error) {
        console.error("Error reading HTML file:", error);
        return c.text("Internal Server Error", 500);
    }
});
app.get("/news", (c) => {
    return c.text("Hello ken");
});
app.route("/api", usersRouter_1.userRouter);
app.route("/api", cityRouter_1.cityRouter);
app.route("/api", stateRouter_1.stateRouter);
app.route("/api", addressRouter_1.addressRouter);
app.route("/api", categoryRouter_1.categoryRouter);
app.route("/api", restaurantRouters_1.restaurantRouter);
app.route("/api", menuItemRouter_1.menuRouter);
app.route("/api", commentRouter_1.commentRouter);
app.route("/api", driverRouter_1.driverRouter);
app.route("/api", orderRouter_1.orderRouter);
app.route("/api", orderMenuRouter_1.orderMenuItemRouter);
app.route("/api", restaurantOwnerRouter_1.ownerRouter);
app.route("/api", statusCatalogueRouter_1.catalogueRouter);
app.route("/api", orderStatusRouter_1.orderStatusRouter);
app.route("/api/auth", authRouter_1.authRouter); /// api/auth/register  or api/
// example
const port = 3000;
console.log(`Server is running on port ${process.env.PORT}`);
(0, node_server_1.serve)({
    fetch: app.fetch,
    port: Number(process.env.PORT),
});
