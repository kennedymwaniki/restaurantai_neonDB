import { ordersTable, TIorders, TSorders } from "../drizzle/schema";
import db from "../drizzle/db";

import { eq } from "drizzle-orm";

export const ordersService = async () => {
  return await db.query.ordersTable.findMany();
};

//byID
export const getOrdersService = async (
  id: number
): Promise<TSorders | undefined> => {
  return await db.query.ordersTable.findFirst({
    where: eq(ordersTable.id, id),
  });
};

export const createOrdersService = async (user: TIorders) => {
  await db.insert(ordersTable).values(user);
  return "order created successfully";
};

export const updateOrdersService = async (id: number, user: TIorders) => {
  await db.update(ordersTable).set(user).where(eq(ordersTable.id, id));
  return "order updated successfully";
};

export const deleteOrdersService = async (id: number) => {
  await db.delete(ordersTable).where(eq(ordersTable.id, id));
  return "order deleted successfully";
};
