"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCategoryService = exports.updateCategoryService = exports.createCategoryService = exports.getCategoryService = exports.categoryService = void 0;
const schema_1 = require("../drizzle/schema");
const db_1 = __importDefault(require("../drizzle/db"));
const drizzle_orm_1 = require("drizzle-orm");
const categoryService = async () => {
    return await db_1.default.query.categoryTable.findMany();
};
exports.categoryService = categoryService;
//byID
const getCategoryService = async (id) => {
    return await db_1.default.query.categoryTable.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.categoryTable.id, id),
    });
};
exports.getCategoryService = getCategoryService;
const createCategoryService = async (user) => {
    await db_1.default.insert(schema_1.categoryTable).values(user);
    return "created successfully";
};
exports.createCategoryService = createCategoryService;
const updateCategoryService = async (id, user) => {
    await db_1.default.update(schema_1.categoryTable).set(user).where((0, drizzle_orm_1.eq)(schema_1.categoryTable.id, id));
    return "category updated successfully";
};
exports.updateCategoryService = updateCategoryService;
const deleteCategoryService = async (id) => {
    await db_1.default.delete(schema_1.categoryTable).where((0, drizzle_orm_1.eq)(schema_1.categoryTable.id, id));
    return "category deleted successfully";
};
exports.deleteCategoryService = deleteCategoryService;
