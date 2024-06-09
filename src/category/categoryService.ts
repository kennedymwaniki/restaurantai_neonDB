import { categoryTable, TIcategory, TScategory } from "../drizzle/schema";
import db from "../drizzle/db";

import { eq } from "drizzle-orm";

export const categoryService = async () => {
  return await db.query.categoryTable.findMany();
};

//byID
export const getCategoryService = async (
  id: number
): Promise<TScategory | undefined> => {
  return await db.query.categoryTable.findFirst({
    where: eq(categoryTable.id, id),
  });
};

export const createCategoryService = async (user: TIcategory) => {
  await db.insert(categoryTable).values(user);
  return "created successfully";
};

export const updateCategoryService = async (id: number, user: TIcategory) => {
  await db.update(categoryTable).set(user).where(eq(categoryTable.id, id));
  return "category updated successfully";
};

export const deleteCategoryService = async (id: number) => {
  await db.delete(categoryTable).where(eq(categoryTable.id, id));
  return "category deleted successfully";
};
