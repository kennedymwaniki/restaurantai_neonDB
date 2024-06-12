"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteComment = exports.updateComment = exports.createComment = exports.getComments = exports.listComments = void 0;
const commentService_1 = require("./commentService");
// get all users
const listComments = async (c) => {
    const data = await (0, commentService_1.commentService)();
    return c.json(data);
};
exports.listComments = listComments;
const getComments = async (c) => {
    try {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id))
            return c.text("Invalid ID", 400);
        const comment = await (0, commentService_1.getCommentService)(id);
        if (!comment) {
            return c.text("comment not found", 404);
        }
        return c.json(comment, 200);
    }
    catch (error) {
        console.error(error?.message);
        return c.json({ error: error?.message }, 500);
    }
};
exports.getComments = getComments;
// Create comment
const createComment = async (c) => {
    try {
        const commentData = await c.req.json();
        const createdStateMsg = await (0, commentService_1.createCommentService)(commentData);
        if (!createdStateMsg)
            return c.text("comment not created", 500);
        return c.json({ msg: createdStateMsg }, 201);
    }
    catch (error) {
        console.error(error?.message);
        return c.json({ error: error?.message }, 500);
    }
};
exports.createComment = createComment;
// Update comment by ID
const updateComment = async (c) => {
    try {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id))
            return c.text("Invalid ID", 400);
        const commentData = await c.req.json();
        const updatedStateMsg = await (0, commentService_1.updateCommentService)(id, commentData);
        if (!updatedStateMsg)
            return c.text("Comment not updated", 404);
        return c.json({ msg: updatedStateMsg }, 200);
    }
    catch (error) {
        console.error(error?.message);
        return c.json({ error: error?.message }, 500);
    }
};
exports.updateComment = updateComment;
// Delete comment by ID
const deleteComment = async (c) => {
    try {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id))
            return c.text("Invalid ID", 400);
        const deletedStateMsg = await (0, commentService_1.deleteCommentService)(id);
        if (!deletedStateMsg)
            return c.text("comment not deleted", 404);
        return c.json({ msg: deletedStateMsg }, 200);
    }
    catch (error) {
        console.error(error?.message);
        return c.json({ error: error?.message }, 500);
    }
};
exports.deleteComment = deleteComment;
