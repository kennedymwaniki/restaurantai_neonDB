"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOrderStatusService = exports.updateOrderStatusService = exports.createOrderStatusService = exports.getOrderStatusService = exports.orderStatusService = void 0;
const schema_1 = require("../drizzle/schema");
const db_1 = __importDefault(require("../drizzle/db"));
const drizzle_orm_1 = require("drizzle-orm");
const orderStatusService = async () => {
    return await db_1.default.query.orderStatusTable.findMany();
};
exports.orderStatusService = orderStatusService;
//byID
const getOrderStatusService = async (id) => {
    return await db_1.default.query.orderStatusTable.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.orderStatusTable.id, id),
    });
};
exports.getOrderStatusService = getOrderStatusService;
const createOrderStatusService = async (user) => {
    await db_1.default.insert(schema_1.orderStatusTable).values(user);
    return "orderStatus created successfully";
};
exports.createOrderStatusService = createOrderStatusService;
const updateOrderStatusService = async (id, user) => {
    await db_1.default.update(schema_1.orderStatusTable).set(user).where((0, drizzle_orm_1.eq)(schema_1.orderStatusTable.id, id));
    return "orderStatus updated successfully";
};
exports.updateOrderStatusService = updateOrderStatusService;
const deleteOrderStatusService = async (id) => {
    await db_1.default.delete(schema_1.orderStatusTable).where((0, drizzle_orm_1.eq)(schema_1.orderStatusTable.id, id));
    return "orderStatus deleted successfully";
};
exports.deleteOrderStatusService = deleteOrderStatusService;
