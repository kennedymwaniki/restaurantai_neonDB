import { restaurantOwnerTable, TIowner, TSowner } from "../drizzle/schema";
import db from "../drizzle/db";

import { eq } from "drizzle-orm";

export const ownerService = async () => {
  return await db.query.restaurantOwnerTable.findMany();
};

//byID
export const getOwnerService = async (
  id: number
): Promise<TSowner | undefined> => {
  return await db.query.restaurantOwnerTable.findFirst({
    where: eq(restaurantOwnerTable.id, id),
  });
};

export const createOwnerService = async (user: any) => {
  await db.insert(restaurantOwnerTable).values(user);
  return "owner created successfully";
};

export const updateOwnerService = async (id: number, user: TIowner) => {
  await db.update(restaurantOwnerTable).set(user).where(eq(restaurantOwnerTable.id, id));
  return "owner updated successfully";
};

export const deleteOwnerService = async (id: number) => {
  await db.delete(restaurantOwnerTable).where(eq(restaurantOwnerTable.id, id));
  return "owner deleted successfully";
};
