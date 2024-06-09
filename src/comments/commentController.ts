import { Hono } from "hono";
import { type Context } from "hono";
import {
  commentService,
  createCommentService,
  deleteCommentService,
  getCommentService,
  updateCommentService,
} from "./commentService";

// get all users
export const listComments = async (c: Context) => {
  const data = await commentService();
  return c.json(data);
};

export const getComments = async (c: Context) => {
  try {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    const comment = await getCommentService(id);
    if (!comment) {
      return c.text("comment not found", 404);
    }
    return c.json(comment, 200);
  } catch (error: any) {
    console.error(error?.message);
    return c.json({ error: error?.message }, 500);
  }
};

// Create comment
export const createComment = async (c: Context) => {
  try {
    const commentData = await c.req.json();
    const createdStateMsg = await createCommentService(commentData);

    if (!createdStateMsg) return c.text("comment not created", 500);
    return c.json({ msg: createdStateMsg }, 201);
  } catch (error: any) {
    console.error(error?.message);
    return c.json({ error: error?.message }, 500);
  }
};

// Update comment by ID
export const updateComment = async (c: Context) => {
  try {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    const commentData = await c.req.json();
    const updatedStateMsg = await updateCommentService(id, commentData);

    if (!updatedStateMsg) return c.text("Comment not updated", 404);
    return c.json({ msg: updatedStateMsg }, 200);
  } catch (error: any) {
    console.error(error?.message);
    return c.json({ error: error?.message }, 500);
  }
};

// Delete comment by ID
export const deleteComment = async (c: Context) => {
  try {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    const deletedStateMsg = await deleteCommentService(id);

    if (!deletedStateMsg) return c.text("comment not deleted", 404);
    return c.json({ msg: deletedStateMsg }, 200);
  } catch (error: any) {
    console.error(error?.message);
    return c.json({ error: error?.message }, 500);
  }
};
