import "dotenv/config";
import { verify } from "hono/jwt";
import { Context, Next } from "hono";

// where we are authenticating
export const verifyToken = async (token: string, secret: string) => {
  try {
    const decoded = await verify(token as string, secret);
    return decoded;
  } catch (error: any) {
    return null;
  }
};
// where we are authorizing
export const authMiddleware = async (
  c: Context,
  next: Next,
  requiredRole: string
) => {
  const token = c.req.header("Authorization");

  if (!token) return c.json({ error: "Please provide a token" }, 401);

  const decoded = await verifyToken(token, process.env.JWT_SECRET as string);

  if (!decoded) return c.json({ error: "Invalid token" }, 401);

  // check roles 'Forbidden'
  if (decoded.role !== requiredRole)
    return c.json({ error: "Access denied ❌🚫💔" }, 401);

  return next();
};
// roles
export const authenticateAdmin = async (c: Context, next: Next) =>
  authMiddleware(c, next, "admin");

export const authenticateUser = async (c: Context, next: Next) =>
  authMiddleware(c, next, "user");
