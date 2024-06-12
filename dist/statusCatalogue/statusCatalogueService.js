"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteStatusCategoryService = exports.updateStatusCategoryService = exports.createStatusCategoryService = exports.getStatusCatalogueService = exports.statusCatalogueService = void 0;
const schema_1 = require("../drizzle/schema");
const db_1 = __importDefault(require("../drizzle/db"));
const drizzle_orm_1 = require("drizzle-orm");
const statusCatalogueService = async () => {
    return await db_1.default.query.statusCatalogueTable.findMany();
};
exports.statusCatalogueService = statusCatalogueService;
//byID
const getStatusCatalogueService = async (id) => {
    return await db_1.default.query.statusCatalogueTable.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.statusCatalogueTable.id, id),
    });
};
exports.getStatusCatalogueService = getStatusCatalogueService;
const createStatusCategoryService = async (user) => {
    await db_1.default.insert(schema_1.statusCatalogueTable).values(user);
    return "driver created successfully";
};
exports.createStatusCategoryService = createStatusCategoryService;
const updateStatusCategoryService = async (id, user) => {
    await db_1.default.update(schema_1.statusCatalogueTable).set(user).where((0, drizzle_orm_1.eq)(schema_1.statusCatalogueTable.id, id));
    return "statusCatalogue updated successfully";
};
exports.updateStatusCategoryService = updateStatusCategoryService;
const deleteStatusCategoryService = async (id) => {
    await db_1.default.delete(schema_1.statusCatalogueTable).where((0, drizzle_orm_1.eq)(schema_1.statusCatalogueTable.id, id));
    return "statusCatalogue deleted successfully";
};
exports.deleteStatusCategoryService = deleteStatusCategoryService;
