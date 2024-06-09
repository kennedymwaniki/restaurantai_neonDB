"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAddressService = exports.updateAddressService = exports.createAddressService = exports.getAddressService = exports.addressService = void 0;
const schema_1 = require("../drizzle/schema");
const db_1 = __importDefault(require("../drizzle/db"));
const drizzle_orm_1 = require("drizzle-orm");
//all addresses
const addressService = async () => {
    const data = db_1.default.query.addressTable.findMany();
    return data;
    console.log(data);
};
exports.addressService = addressService;
//byID
const getAddressService = async (id) => {
    return await db_1.default.query.addressTable.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.addressTable.id, id),
    });
};
exports.getAddressService = getAddressService;
const createAddressService = async (user) => {
    await db_1.default.insert(schema_1.addressTable).values(user);
    return "state created successfully";
};
exports.createAddressService = createAddressService;
const updateAddressService = async (id, user) => {
    await db_1.default.update(schema_1.addressTable).set(user).where((0, drizzle_orm_1.eq)(schema_1.addressTable.id, id));
    return "state updated successfully";
};
exports.updateAddressService = updateAddressService;
const deleteAddressService = async (id) => {
    await db_1.default.delete(schema_1.addressTable).where((0, drizzle_orm_1.eq)(schema_1.addressTable.id, id));
    return "state deleted successfully";
};
exports.deleteAddressService = deleteAddressService;
