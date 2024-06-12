"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletestateService = exports.updateStateService = exports.createCityService = exports.getCityService = exports.cityService = void 0;
const db_1 = __importDefault(require("../drizzle/db"));
const schema_1 = require("../drizzle/schema");
const drizzle_orm_1 = require("drizzle-orm");
const cityService = async () => {
    return await db_1.default.query.cityTable.findMany();
};
exports.cityService = cityService;
//byID
const getCityService = async (id) => {
    return await db_1.default.query.cityTable.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.cityTable.id, id),
    });
};
exports.getCityService = getCityService;
const createCityService = async (user) => {
    await db_1.default.insert(schema_1.cityTable).values(user);
    return "city created successfully";
};
exports.createCityService = createCityService;
const updateStateService = async (id, user) => {
    await db_1.default.update(schema_1.cityTable).set(user).where((0, drizzle_orm_1.eq)(schema_1.cityTable.id, id));
    return "city updated successfully";
};
exports.updateStateService = updateStateService;
const deletestateService = async (id) => {
    await db_1.default.delete(schema_1.cityTable).where((0, drizzle_orm_1.eq)(schema_1.cityTable.id, id));
    return "city deleted successfully";
};
exports.deletestateService = deletestateService;
