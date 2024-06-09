import { Hono } from "Hono";
import {
  listCategory,
  createCategory,
  getCategory,
  deleteCategory,
  updateCategory,
} from "./categoryController";

export const categoryRouter = new Hono();

categoryRouter.get("/category", listCategory);
categoryRouter.get("/category/:id", getCategory);
categoryRouter.post("/category", createCategory);
categoryRouter.put("/category/:id", updateCategory);
categoryRouter.delete("/category/:id", deleteCategory);
