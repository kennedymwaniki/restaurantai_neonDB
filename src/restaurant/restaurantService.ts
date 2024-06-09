import { restaurantTable, TIrestaurant, TSrestaurant } from "../drizzle/schema";
import db from "../drizzle/db";

import { eq } from "drizzle-orm";

export const restaurantService = async () => {
  return await db.query.restaurantTable.findMany();
};

//byID
export const getrestaurantService = async (
  id: number
): Promise<TSrestaurant | undefined> => {
  return await db.query.restaurantTable.findFirst({
    where: eq(restaurantTable.id, id),
  });
};

export const createrestaurantService = async (user: TIrestaurant) => {
  await db.insert(restaurantTable).values(user);
  return "restaurant created successfully";
};

export const updaterestaurantService = async (id: number, user: TIrestaurant) => {
  await db.update(restaurantTable).set(user).where(eq(restaurantTable.id, id));
  return "restaurant updated successfully";
};

export const deleterestaurantService = async (id: number) => {
  await db.delete(restaurantTable).where(eq(restaurantTable.id, id));
  return "restaurant deleted successfully";
};
