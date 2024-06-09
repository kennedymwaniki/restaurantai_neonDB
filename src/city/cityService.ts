import db from "../drizzle/db";
import { cityTable, TScity, TIcity } from "../drizzle/schema";

import { eq } from "drizzle-orm";

export const cityService = async () => {
  return await db.query.cityTable.findMany();
};

//byID
export const getCityService = async (id: number): Promise<TScity> => {
  return await db.query.cityTable.findFirst({
    where: eq(cityTable.id, id),
  });
};

export const createCityService = async (user: TIcity) => {
  await db.insert(cityTable).values(user);
  return "city created successfully";
};

export const updateStateService = async (id: number, user: TIcity) => {
  await db.update(cityTable).set(user).where(eq(cityTable.id, id));
  return "city updated successfully";
};

export const deletestateService = async (id: number) => {
  await db.delete(cityTable).where(eq(cityTable.id, id));
  return "city deleted successfully";
};
