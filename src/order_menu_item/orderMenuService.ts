import { orderMenuItemTable, TIorderMenu, TSorderMenu } from "../drizzle/schema";
import db from "../drizzle/db";

import { eq } from "drizzle-orm";

export const orderMenuService = async () => {
  return await db.query.orderMenuItemTable.findMany();
};

//byID
export const getOrderMenuItemService = async (
  id: number
): Promise<TSorderMenu | undefined> => {
  return await db.query.orderMenuItemTable.findFirst({
    where: eq(orderMenuItemTable.id, id),
  });
};

export const createOrderMenuItemService = async (user: TIorderMenu) => {
  await db.insert(orderMenuItemTable).values(user);
  return "orderMenuItem created successfully";
};

export const updateOrderMenuItemService = async (id: number, user: TIorderMenu) => {
  await db.update(orderMenuItemTable).set(user).where(eq(orderMenuItemTable.id, id));
  return "orderMenuItem updated successfully";
};

export const deleteOrderMenuItemService = async (id: number) => {
  await db.delete(orderMenuItemTable).where(eq(orderMenuItemTable.id, id));
  return "orderMenuItem  deleted successfully";
};
