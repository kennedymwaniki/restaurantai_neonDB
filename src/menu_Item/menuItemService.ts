import { menuItemTable, TImenu, TSmenu } from "../drizzle/schema";
import db from "../drizzle/db";

import { eq } from "drizzle-orm";

export const menuService = async () => {
  return await db.query.menuItemTable.findMany();
};

//byID
export const getmenuService = async (
  id: number
): Promise<TSmenu | undefined> => {
  return await db.query.menuItemTable.findFirst({
    where: eq(menuItemTable.id, id),
  });
};

export const createmenuService = async (user: TImenu) => {
  await db.insert(menuItemTable).values(user);
  return "menuItem created successfully";
};

export const updatemenuService = async (id: number, user: TImenu) => {
  await db.update(menuItemTable).set(user).where(eq(menuItemTable.id, id));
  return "menuItem updated successfully";
};

export const deletemenuService = async (id: number) => {
  await db.delete(menuItemTable).where(eq(menuItemTable.id, id));
  return "menuItem deleted successfully";
};
