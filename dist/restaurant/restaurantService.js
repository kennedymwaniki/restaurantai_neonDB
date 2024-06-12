"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleterestaurantService = exports.updaterestaurantService = exports.createrestaurantService = exports.getrestaurantService = exports.restaurantService = void 0;
const schema_1 = require("../drizzle/schema");
const db_1 = __importDefault(require("../drizzle/db"));
const drizzle_orm_1 = require("drizzle-orm");
const restaurantService = async () => {
    return await db_1.default.query.restaurantTable.findMany();
};
exports.restaurantService = restaurantService;
//byID
const getrestaurantService = async (id) => {
    return await db_1.default.query.restaurantTable.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.restaurantTable.id, id),
    });
};
exports.getrestaurantService = getrestaurantService;
const createrestaurantService = async (user) => {
    await db_1.default.insert(schema_1.restaurantTable).values(user);
    return "restaurant created successfully";
};
exports.createrestaurantService = createrestaurantService;
const updaterestaurantService = async (id, user) => {
    await db_1.default.update(schema_1.restaurantTable).set(user).where((0, drizzle_orm_1.eq)(schema_1.restaurantTable.id, id));
    return "restaurant updated successfully";
};
exports.updaterestaurantService = updaterestaurantService;
const deleterestaurantService = async (id) => {
    await db_1.default.delete(schema_1.restaurantTable).where((0, drizzle_orm_1.eq)(schema_1.restaurantTable.id, id));
    return "restaurant deleted successfully";
};
exports.deleterestaurantService = deleterestaurantService;
