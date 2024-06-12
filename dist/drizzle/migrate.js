"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const db_1 = __importDefault(require("./db"));
const migrator_1 = require("drizzle-orm/neon-http/migrator");
console.log("Database_URL:", process.env.Database_URL);
async function migration() {
    await (0, migrator_1.migrate)(db_1.default, { migrationsFolder: __dirname + "/migrations" });
    // await client.end();  it is serverless so no need of closing connection
    console.log("======== Migrations ended ========");
    process.exit(0);
}
migration();
