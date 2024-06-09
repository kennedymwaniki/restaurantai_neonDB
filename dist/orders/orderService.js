"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOrdersService = exports.updateOrdersService = exports.createOrdersService = exports.getOrdersService = exports.ordersService = void 0;
const schema_1 = require("../drizzle/schema");
const db_1 = __importDefault(require("../drizzle/db"));
const drizzle_orm_1 = require("drizzle-orm");
const ordersService = async () => {
    return await db_1.default.query.ordersTable.findMany();
};
exports.ordersService = ordersService;
//byID
const getOrdersService = async (id) => {
    return await db_1.default.query.ordersTable.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.ordersTable.id, id),
    });
};
exports.getOrdersService = getOrdersService;
const createOrdersService = async (user) => {
    await db_1.default.insert(schema_1.ordersTable).values(user);
    return "order created successfully";
};
exports.createOrdersService = createOrdersService;
const updateOrdersService = async (id, user) => {
    await db_1.default.update(schema_1.ordersTable).set(user).where((0, drizzle_orm_1.eq)(schema_1.ordersTable.id, id));
    return "order updated successfully";
};
exports.updateOrdersService = updateOrdersService;
const deleteOrdersService = async (id) => {
    await db_1.default.delete(schema_1.ordersTable).where((0, drizzle_orm_1.eq)(schema_1.ordersTable.id, id));
    return "order deleted successfully";
};
exports.deleteOrdersService = deleteOrdersService;
