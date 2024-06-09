import { addressTable, TIaddress, TSaddress } from "../drizzle/schema";
import db from "../drizzle/db";

import { eq } from "drizzle-orm";

//all addresses
export const addressService = async () => {
  const data = db.query.addressTable.findMany();
  return data;
  console.log(data);
};

//byID
export const getAddressService = async (
  id: number
): Promise<TSaddress | undefined> => {
  return await db.query.addressTable.findFirst({
    where: eq(addressTable.id, id),
  });
};

export const createAddressService = async (user: TIaddress) => {
  await db.insert(addressTable).values(user);
  return "state created successfully";
};

export const updateAddressService = async (id: number, user: TIaddress) => {
  await db.update(addressTable).set(user).where(eq(addressTable.id, id));
  return "state updated successfully";
};

export const deleteAddressService = async (id: number) => {
  await db.delete(addressTable).where(eq(addressTable.id, id));
  return "state deleted successfully";
};
