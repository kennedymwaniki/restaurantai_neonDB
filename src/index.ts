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

const app = new Hono().basePath("/api");

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.get("/news", (c) => {
  return c.text("Hello ken");
});

app.route("/", userRouter);
app.route("/", cityRouter);
app.route("/", stateRouter);
app.route("/", addressRouter);
app.route("/", categoryRouter);
app.route("/", restaurantRouter);
app.route("/", menuRouter);
app.route("/", commentRouter);
app.route("/", driverRouter);
app.route("/", orderRouter);
app.route("/", orderMenuItemRouter);

// example

const port = 3000;
console.log(`Server is running on port ${process.env.PORT}`);

serve({
  fetch: app.fetch,
  port: Number(process.env.PORT),
});
