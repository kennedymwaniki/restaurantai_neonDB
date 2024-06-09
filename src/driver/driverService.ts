import { driversTable, TIdriver, TSdriver } from "../drizzle/schema";
import db from "../drizzle/db";

import { eq } from "drizzle-orm";

export const driversService = async () => {
  return await db.query.driversTable.findMany();
};

//byID
export const getDriverService = async (
  id: number
): Promise<TSdriver | undefined> => {
  return await db.query.driversTable.findFirst({
    where: eq(driversTable.id, id),
  });
};

export const createDriverService = async (user: TIdriver) => {
  await db.insert(driversTable).values(user);
  return "driver created successfully";
};

export const updateDriverService = async (id: number, user: TIdriver) => {
  await db.update(driversTable).set(user).where(eq(driversTable.id, id));
  return "driver updated successfully";
};

export const deleteDriverService = async (id: number) => {
  await db.delete(driversTable).where(eq(driversTable.id, id));
  return "driver deleted successfully";
};
