
import {orderStatusTable,TIorderstatus,TSorderstatus} from "../drizzle/schema"
import db from "../drizzle/db";

import { eq } from "drizzle-orm";

export const orderStatusService = async () => {
    return await db.query.orderStatusTable.findMany();
  };
  
  //byID
  export const getOrderStatusService = async (
    id: number
  ): Promise<TSorderstatus | undefined> => {
    return await db.query.orderStatusTable.findFirst({
      where: eq(orderStatusTable.id, id),
    });
  };
  
  export const createOrderStatusService = async (user: TIorderstatus) => {
    await db.insert(orderStatusTable).values(user);
    return "orderStatus created successfully";
  };
  
  export const updateOrderStatusService = async (id: number, user: TIorderstatus) => {
    await db.update(orderStatusTable).set(user).where(eq(orderStatusTable.id, id));
    return "orderStatus updated successfully";
  };
  
  export const deleteOrderStatusService = async (id: number) => {
    await db.delete(orderStatusTable).where(eq(orderStatusTable.id, id));
    return "orderStatus deleted successfully";
  };
  