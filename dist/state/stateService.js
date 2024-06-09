"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletestateService = exports.updateStateService = exports.createStateService = exports.getStateService = exports.stateService = void 0;
const schema_1 = require("../drizzle/schema");
const db_1 = __importDefault(require("../drizzle/db"));
const drizzle_orm_1 = require("drizzle-orm");
const stateService = async () => {
    return await db_1.default.query.stateTable.findMany();
};
exports.stateService = stateService;
//byID
const getStateService = async (id) => {
    return await db_1.default.query.stateTable.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.stateTable.id, id),
    });
};
exports.getStateService = getStateService;
const createStateService = async (user) => {
    await db_1.default.insert(schema_1.stateTable).values(user);
    return "state created successfully";
};
exports.createStateService = createStateService;
const updateStateService = async (id, user) => {
    await db_1.default.update(schema_1.stateTable).set(user).where((0, drizzle_orm_1.eq)(schema_1.stateTable.id, id));
    return "state updated successfully";
};
exports.updateStateService = updateStateService;
const deletestateService = async (id) => {
    await db_1.default.delete(schema_1.stateTable).where((0, drizzle_orm_1.eq)(schema_1.stateTable.id, id));
    return "state deleted successfully";
};
exports.deletestateService = deletestateService;
