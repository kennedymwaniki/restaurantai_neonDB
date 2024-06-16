// import { usersTable } from './../drizzle/schema';

import { db } from "../drizzle/db";
import { sql } from "drizzle-orm";
import {
  TIAuthUser,
  TIUser,
  TSAuthUser,
  authUsers,
  usersTable,
} from "../drizzle/schema";

export const createAuthUserServce = async (user:any) => {
  try {
    // Insert user into `usersTable` table
    const createdUser = await db
      .insert(usersTable)
      .values({
        name: user.name,
        contact_phone: user.contact_phone,
        phone_verified: false,
        email: user.email,
        email_verified: false,
        confirmation_code: user.confirmation_code,
        password: user.password,
      })
      .returning();

    // Extract the created user ID
    const userId = createdUser[0].id;

    // Insert user into `auth_user` table
    await db.insert(authUsers).values({
      userId,
      password: user.password,
      username: user.username,
      role: user.role || "user",
    });

    return createdUser[0]; // Return the created user
  } catch (error) {
    console.error("Error creating user:", error);
    throw new Error("User creation failed");
  }
};

export const loginAuthService = async (user: TSAuthUser) => {
  const { username, password } = user;
  console.log(user);
  return await db.query.authUsers.findFirst({
    columns: {
      username: true,
      role: true,
      password: true,
    },
    where: sql` ${authUsers.username} = ${username}`,
    with: {
      user: {
        columns: {
          id: true,
          name: true,
          contact_phone: true,
          email: true,
        },
      },
    },
  });
};
