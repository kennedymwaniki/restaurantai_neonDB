"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
const zod_1 = require("zod");
exports.userSchema = zod_1.z.object({
    id: zod_1.z.string(),
    name: zod_1.z.string(),
    contact_phone: zod_1.z.number(),
    phone_verified: zod_1.z.boolean(),
    email: zod_1.z.string(),
    email_verified: zod_1.z.boolean(),
    confirmation_code: zod_1.z.number(),
    password: zod_1.z.number(),
    created_at: zod_1.z.string().optional(),
    updated_at: zod_1.z.string().optional(),
});
