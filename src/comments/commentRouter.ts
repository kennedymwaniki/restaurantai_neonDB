import { Hono } from "hono";
import {
  listComments,
  createComment,
  deleteComment,
  getComments,
  updateComment,
} from "./commentController";
import { adminRoleAuth, bothRoleAuth } from "../middleware/authBearer";

export const commentRouter = new Hono();

commentRouter.get("/comments",bothRoleAuth, listComments);
commentRouter.get("/comments/:id", bothRoleAuth   ,getComments);
commentRouter.post("/comments",    adminRoleAuth,createComment);
commentRouter.delete("/comments/:id", adminRoleAuth,deleteComment);
commentRouter.put("/comments/:id", adminRoleAuth,updateComment);
