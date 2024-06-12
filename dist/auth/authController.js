"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.registerUser = void 0;
require("dotenv/config");
const authService_1 = require("./authService");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jwt_1 = require("hono/jwt");
const registerUser = async (c) => {
    try {
        //await user from
        const user = await c.req.json();
        // console.log(user); for debugging
        //get user password
        const pass = user.password;
        // console.log(pass); //for debugging
        //hash the pasword
        const hashedPassword = await bcrypt_1.default.hash(pass, 10);
        user.password = hashedPassword;
        const createdUser = await (0, authService_1.createAuthUserServce)(user);
        if (!createdUser)
            return c.text("User not created ", 404);
        return c.json({ msg: createdUser }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 500);
    }
};
exports.registerUser = registerUser;
const loginUser = async (c) => {
    try {
        //await the user and convert to json
        const user = await c.req.json();
        // console.log(user) for debugging
        // check if user exists
        const foundUser = await (0, authService_1.loginAuthService)(user);
        console.log(foundUser);
        if (!foundUser)
            return c.text("User not found", 404);
        // validate password
        const isValid = await bcrypt_1.default.compare(user.password, foundUser?.password);
        if (!isValid) {
            return c.json({ error: "Invalid credentials" }, 401); // unauthorized
        }
        else {
            // create a payload
            let payload = {
                sub: foundUser?.username,
                role: foundUser?.role,
                //session to expire after 3hours
                exp: Math.floor(Date.now() / 1000) + 60 * 180,
            };
            // secret key from env
            let secret = process.env.JWT_SECRET;
            const token = await (0, jwt_1.sign)(payload, secret); // create a JWT token
            let user = foundUser?.user;
            let role = foundUser?.role;
            return c.json({ token, user: { role, ...user } }, 200); // return token and user details
        }
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.loginUser = loginUser;
