"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDriverService = exports.updateDriverService = exports.createDriverService = exports.getDriverService = exports.driversService = void 0;
const schema_1 = require("../drizzle/schema");
const db_1 = __importDefault(require("../drizzle/db"));
const drizzle_orm_1 = require("drizzle-orm");
const driversService = async () => {
    return await db_1.default.query.driversTable.findMany();
};
exports.driversService = driversService;
//byID
const getDriverService = async (id) => {
    return await db_1.default.query.driversTable.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.driversTable.id, id),
    });
};
exports.getDriverService = getDriverService;
const createDriverService = async (user) => {
    await db_1.default.insert(schema_1.driversTable).values(user);
    return "driver created successfully";
};
exports.createDriverService = createDriverService;
const updateDriverService = async (id, user) => {
    await db_1.default.update(schema_1.driversTable).set(user).where((0, drizzle_orm_1.eq)(schema_1.driversTable.id, id));
    return "driver updated successfully";
};
exports.updateDriverService = updateDriverService;
const deleteDriverService = async (id) => {
    await db_1.default.delete(schema_1.driversTable).where((0, drizzle_orm_1.eq)(schema_1.driversTable.id, id));
    return "driver deleted successfully";
};
exports.deleteDriverService = deleteDriverService;
