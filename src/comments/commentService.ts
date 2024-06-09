import { commentTable, TIcomments, TScomments } from "../drizzle/schema";
import db from "../drizzle/db";

import { eq } from "drizzle-orm";

export const commentService = async () => {
  return await db.query.commentTable.findMany();
};

//byID
export const getCommentService = async (
  id: number
): Promise<TScomments | undefined> => {
  return await db.query.commentTable.findFirst({
    where: eq(commentTable.id, id),
  });
};

export const createCommentService = async (user: TIcomments) => {
  await db.insert(commentTable).values(user);
  return "comment created successfully";
};

export const updateCommentService = async (id: number, user: TIcomments) => {
  await db.update(commentTable).set(user).where(eq(commentTable.id, id));
  return "comment updated successfully";
};

export const deleteCommentService = async (id: number) => {
  await db.delete(commentTable).where(eq(commentTable.id, id));
  return "comment deleted successfully";
};
