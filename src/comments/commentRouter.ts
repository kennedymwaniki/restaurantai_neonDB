import { Hono } from "hono";
import {
  listComments,
  createComment,
  deleteComment,
  getComments,
  updateComment,
} from "./commentController";

export const commentRouter = new Hono();

commentRouter.get("/comments", listComments);
commentRouter.get("/comments/:id", getComments);
commentRouter.post("/comments", createComment);
commentRouter.delete("/comments/:id", deleteComment);
commentRouter.put("/comments/:id", updateComment);
