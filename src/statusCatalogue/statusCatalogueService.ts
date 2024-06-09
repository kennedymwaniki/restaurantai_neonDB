import { statusCatalogueTable, TIstatusCatalogue, TSstatusCatalogue } from "../drizzle/schema";
import db from "../drizzle/db";

import { eq } from "drizzle-orm";

export const statusCatalogueService = async () => {
  return await db.query.statusCatalogueTable.findMany();
};

//byID
export const getStatusCatalogueService = async (
  id: number
): Promise<TSstatusCatalogue | undefined> => {
  return await db.query.statusCatalogueTable.findFirst({
    where: eq(statusCatalogueTable.id, id),
  });
};

export const createStatusCategoryService = async (user: TIstatusCatalogue) => {
  await db.insert(statusCatalogueTable).values(user);
  return "driver created successfully";
};

export const updateStatusCategoryService = async (id: number, user: TIstatusCatalogue) => {
  await db.update(statusCatalogueTable).set(user).where(eq(statusCatalogueTable.id, id));
  return "statusCatalogue updated successfully";
};

export const deleteStatusCategoryService = async (id: number) => {
  await db.delete(statusCatalogueTable).where(eq(statusCatalogueTable.id, id));
  return "statusCatalogue deleted successfully";
};
