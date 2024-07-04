import { eq } from "drizzle-orm";
import db from "../drizzle/db";
import { TIUser, TSUser, usersTable, ordersTable } from "../drizzle/schema";

export const usersService = async () => {
  return await db.query.usersTable.findMany({
    columns: {
      id: true,
      name: true,
      email: true,
      contact_phone: true,
    },
  });
};

//byID
export const getUserService = async (
  id: number
): Promise<TSUser | undefined> => {
  return await db.query.usersTable.findFirst({
    where: eq(usersTable.id, id),
  });
};

export const createUserService = async (user: TIUser) => {
  await db.insert(usersTable).values(user);
  return "user created successfully";
};

export const updateUserService = async (id: number, user: TIUser) => {
  await db.update(usersTable).set(user).where(eq(usersTable.id, id));
  return "User updated successfully";
};

export const deleteUserService = async (id: number) => {
  await db.delete(usersTable).where(eq(usersTable.id, id));
  return "User deleted successfully";
};

//get oorder by a user

export const getUserOrdersService = async (id: number) => {
  return await db.query.usersTable.findFirst({
    where: eq(usersTable.id, id),
    columns: {
      name: true,
      contact_phone: true,
      email: true,
    },
    with: {
      orders: {
        columns: {
          price: true,
          discount: true,
        },
      },
    },
  });
};
