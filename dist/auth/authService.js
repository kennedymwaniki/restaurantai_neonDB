"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginAuthService = exports.createAuthUserServce = void 0;
const db_1 = require("../drizzle/db");
const drizzle_orm_1 = require("drizzle-orm");
const schema_1 = require("../drizzle/schema");
const createAuthUserServce = async (user) => {
    await db_1.db.insert(schema_1.authUsers).values(user);
    return "User created successfully";
};
exports.createAuthUserServce = createAuthUserServce;
const loginAuthService = async (user) => {
    const { username, password } = user;
    console.log(user);
    return await db_1.db.query.authUsers.findFirst({
        columns: {
            username: true,
            role: true,
            password: true
        }, where: (0, drizzle_orm_1.sql) ` ${schema_1.authUsers.username} = ${username}`,
        with: {
            user: {
                columns: {
                    id: true,
                    name: true,
                    contact_phone: true,
                    email: true
                }
            }
        }
    });
};
exports.loginAuthService = loginAuthService;
