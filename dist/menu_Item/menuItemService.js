"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletemenuService = exports.updatemenuService = exports.createmenuService = exports.getmenuService = exports.menuService = void 0;
const schema_1 = require("../drizzle/schema");
const db_1 = __importDefault(require("../drizzle/db"));
const drizzle_orm_1 = require("drizzle-orm");
const menuService = async () => {
    return await db_1.default.query.menuItemTable.findMany();
};
exports.menuService = menuService;
//byID
const getmenuService = async (id) => {
    return await db_1.default.query.menuItemTable.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.menuItemTable.id, id),
    });
};
exports.getmenuService = getmenuService;
const createmenuService = async (user) => {
    await db_1.default.insert(schema_1.menuItemTable).values(user);
    return "menuItem created successfully";
};
exports.createmenuService = createmenuService;
const updatemenuService = async (id, user) => {
    await db_1.default.update(schema_1.menuItemTable).set(user).where((0, drizzle_orm_1.eq)(schema_1.menuItemTable.id, id));
    return "menuItem updated successfully";
};
exports.updatemenuService = updatemenuService;
const deletemenuService = async (id) => {
    await db_1.default.delete(schema_1.menuItemTable).where((0, drizzle_orm_1.eq)(schema_1.menuItemTable.id, id));
    return "menuItem deleted successfully";
};
exports.deletemenuService = deletemenuService;
