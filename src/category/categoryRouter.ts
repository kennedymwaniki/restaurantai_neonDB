import { Hono } from "hono";
import {
  listCategory,
  createCategory,
  getCategory,
  deleteCategory,
  updateCategory,
} from "./categoryController";
import {
  adminRoleAuth,
  authMiddleware,
  bothRoleAuth,
} from "../middleware/authBearer";

export const categoryRouter = new Hono();
// categoryRouter.use("*", authenticateAdmin);

categoryRouter.get("/category", bothRoleAuth, listCategory);
categoryRouter.get("/category/:id", bothRoleAuth, getCategory);
categoryRouter.post("/category", adminRoleAuth, createCategory);
categoryRouter.put("/category/:id", adminRoleAuth, updateCategory);
categoryRouter.delete("/category/:id", adminRoleAuth, deleteCategory);
