"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCommentService = exports.updateCommentService = exports.createCommentService = exports.getCommentService = exports.commentService = void 0;
const schema_1 = require("../drizzle/schema");
const db_1 = __importDefault(require("../drizzle/db"));
const drizzle_orm_1 = require("drizzle-orm");
const commentService = async () => {
    return await db_1.default.query.commentTable.findMany();
};
exports.commentService = commentService;
//byID
const getCommentService = async (id) => {
    return await db_1.default.query.commentTable.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.commentTable.id, id),
    });
};
exports.getCommentService = getCommentService;
const createCommentService = async (user) => {
    await db_1.default.insert(schema_1.commentTable).values(user);
    return "comment created successfully";
};
exports.createCommentService = createCommentService;
const updateCommentService = async (id, user) => {
    await db_1.default.update(schema_1.commentTable).set(user).where((0, drizzle_orm_1.eq)(schema_1.commentTable.id, id));
    return "comment updated successfully";
};
exports.updateCommentService = updateCommentService;
const deleteCommentService = async (id) => {
    await db_1.default.delete(schema_1.commentTable).where((0, drizzle_orm_1.eq)(schema_1.commentTable.id, id));
    return "comment deleted successfully";
};
exports.deleteCommentService = deleteCommentService;
