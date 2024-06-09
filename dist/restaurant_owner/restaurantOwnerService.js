"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOwnerService = exports.updateOwnerService = exports.createOwnerService = exports.getOwnerService = exports.ownerService = void 0;
const schema_1 = require("../drizzle/schema");
const db_1 = __importDefault(require("../drizzle/db"));
const drizzle_orm_1 = require("drizzle-orm");
const ownerService = async () => {
    return await db_1.default.query.restaurantOwnerTable.findMany();
};
exports.ownerService = ownerService;
//byID
const getOwnerService = async (id) => {
    return await db_1.default.query.restaurantOwnerTable.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.restaurantOwnerTable.id, id),
    });
};
exports.getOwnerService = getOwnerService;
const createOwnerService = async (user) => {
    await db_1.default.insert(schema_1.restaurantOwnerTable).values(user);
    return "owner created successfully";
};
exports.createOwnerService = createOwnerService;
const updateOwnerService = async (id, user) => {
    await db_1.default.update(schema_1.restaurantOwnerTable).set(user).where((0, drizzle_orm_1.eq)(schema_1.restaurantOwnerTable.id, id));
    return "owner updated successfully";
};
exports.updateOwnerService = updateOwnerService;
const deleteOwnerService = async (id) => {
    await db_1.default.delete(schema_1.restaurantOwnerTable).where((0, drizzle_orm_1.eq)(schema_1.restaurantOwnerTable.id, id));
    return "owner deleted successfully";
};
exports.deleteOwnerService = deleteOwnerService;
