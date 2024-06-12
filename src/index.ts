import { serve } from "@hono/node-server";
import { Hono } from "hono";
import "dotenv/config";
import { userRouter } from "./users/usersRouter";
import { cityRouter } from "./city/cityRouter";
import { stateRouter } from "./state/stateRouter";
import { addressRouter } from "./address/addressRouter";
import { categoryRouter } from "./category/categoryRouter";
import { restaurantRouter } from "./restaurant/restaurantRouters";
import { menuRouter } from "./menu_Item/menuItemRouter";
import { commentRouter } from "./comments/commentRouter";
import { driverRouter } from "./driver/driverRouter";
import { orderRouter } from "./orders/orderRouter";
import { orderMenuItemRouter } from "./order_menu_item/orderMenuRouter";
import { authRouter } from "./auth/authRouter";
import { ownerRouter } from "./restaurant_owner/restaurantOwnerRouter";
import { catalogueRouter } from "./statusCatalogue/statusCatalogueRouter";
import { orderStatusRouter } from "./orderStatus/orderStatusRouter";
import fs from "fs";
import path from "path";

const app = new Hono();

// app.get("/", (c) => {
//   return c.text("Hello Hono!");
// });

app.get("/", async (c) => {
  try {
    const filePath = path.join(__dirname, "index.html");
    const fileContent = await fs.promises.readFile(filePath, "utf-8");
    return c.html(fileContent);
  } catch (error) {
    console.error("Error reading HTML file:", error);
    return c.text("Internal Server Error", 500);
  }
});

app.get("/news", (c) => {
  return c.text("Hello ken");
});

app.route("/api", userRouter);
app.route("/api", cityRouter);
app.route("/api", stateRouter);
app.route("/api", addressRouter);
app.route("/api", categoryRouter);
app.route("/api", restaurantRouter);
app.route("/api", menuRouter);
app.route("/api", commentRouter);
app.route("/api", driverRouter);
app.route("/api", orderRouter);
app.route("/api", orderMenuItemRouter);
app.route("/api", ownerRouter);
app.route("/api", catalogueRouter);
app.route("/api", orderStatusRouter);
app.route("/api/auth", authRouter); /// api/auth/register  or api/

// example

const port = 3000;
console.log(`Server is running on port ${process.env.PORT}`);

serve({
  fetch: app.fetch,
  port: Number(process.env.PORT),
});
