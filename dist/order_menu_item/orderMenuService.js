"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOrderMenuItemService = exports.updateOrderMenuItemService = exports.createOrderMenuItemService = exports.getOrderMenuItemService = exports.orderMenuService = void 0;
const schema_1 = require("../drizzle/schema");
const db_1 = __importDefault(require("../drizzle/db"));
const drizzle_orm_1 = require("drizzle-orm");
const orderMenuService = async () => {
    return await db_1.default.query.orderMenuItemTable.findMany();
};
exports.orderMenuService = orderMenuService;
//byID
const getOrderMenuItemService = async (id) => {
    return await db_1.default.query.orderMenuItemTable.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.orderMenuItemTable.id, id),
    });
};
exports.getOrderMenuItemService = getOrderMenuItemService;
const createOrderMenuItemService = async (user) => {
    await db_1.default.insert(schema_1.orderMenuItemTable).values(user);
    return "orderMenuItem created successfully";
};
exports.createOrderMenuItemService = createOrderMenuItemService;
const updateOrderMenuItemService = async (id, user) => {
    await db_1.default.update(schema_1.orderMenuItemTable).set(user).where((0, drizzle_orm_1.eq)(schema_1.orderMenuItemTable.id, id));
    return "orderMenuItem updated successfully";
};
exports.updateOrderMenuItemService = updateOrderMenuItemService;
const deleteOrderMenuItemService = async (id) => {
    await db_1.default.delete(schema_1.orderMenuItemTable).where((0, drizzle_orm_1.eq)(schema_1.orderMenuItemTable.id, id));
    return "orderMenuItem  deleted successfully";
};
exports.deleteOrderMenuItemService = deleteOrderMenuItemService;
