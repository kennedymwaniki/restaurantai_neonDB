import {
  addressTable,
  TIaddress,
  TSaddress,
  cityTable,
} from "../drizzle/schema";
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
  return "address created successfully";
};

export const updateAddressService = async (id: number, user: TIaddress) => {
  await db.update(addressTable).set(user).where(eq(addressTable.id, id));
  return "address updated successfully";
};

//Service to get an address by ID
export const getAddressByIdService = async (id: number) => {
  return await db.query.addressTable.findFirst({
    where: eq(addressTable.id, id),
  });
};

export const deleteAddressService = async (id: number) => {
  const address = await getAddressByIdService(id);
  if (!address) {
    return "No such address exists"; // Indicate that the address does not exist
  }
  await db.delete(addressTable).where(eq(addressTable.id, id));
  return "address deleted successfully";
};
