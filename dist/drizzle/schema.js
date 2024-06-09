"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRelations = exports.commentRelations = exports.driverRelations = exports.statusCatalogueRelations = exports.orderStatusRelations = exports.orderMenuItemRelations = exports.orderRelations = exports.addressRelations = exports.stateRelations = exports.cityRestaurantRelations = exports.restaurantOwnerRelations = exports.restaurantRelations = exports.categoryMenuRelations = exports.menuItemRelations = exports.restaurantOwnerTable = exports.usersTable = exports.statusCatalogueTable = exports.restaurantTable = exports.ordersTable = exports.orderStatusTable = exports.orderMenuItemTable = exports.driversTable = exports.commentTable = exports.categoryTable = exports.addressTable = exports.stateTable = exports.cityTable = exports.menuItemTable = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const drizzle_orm_1 = require("drizzle-orm"); // Import the sql template tag used to write raw SQL queries
const drizzle_orm_2 = require("drizzle-orm");
// Tables
exports.menuItemTable = (0, pg_core_1.pgTable)("menu_item", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    name: (0, pg_core_1.varchar)("name", { length: 256 }),
    restaurant_id: (0, pg_core_1.integer)("restaurant_id").references(() => exports.restaurantTable.id, {
        onDelete: "cascade",
    }),
    category_id: (0, pg_core_1.integer)("category_id").references(() => exports.categoryTable.id, {
        onDelete: "cascade",
    }),
    description: (0, pg_core_1.varchar)("description", { length: 256 }),
    ingredients: (0, pg_core_1.varchar)("ingredients", { length: 256 }),
    price: (0, pg_core_1.varchar)("price", { length: 256 }),
    active: (0, pg_core_1.boolean)("active"),
    created_at: (0, pg_core_1.timestamp)("created_at")
        .default((0, drizzle_orm_1.sql) `NOW()`)
        .notNull(),
    updated_at: (0, pg_core_1.timestamp)("updated_at")
        .default((0, drizzle_orm_1.sql) `NOW()`)
        .notNull(),
});
exports.cityTable = (0, pg_core_1.pgTable)("city", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    name: (0, pg_core_1.varchar)("name", { length: 256 }),
    state_id: (0, pg_core_1.integer)("state_id").references(() => exports.stateTable.id, {
        onDelete: "cascade",
    }),
});
exports.stateTable = (0, pg_core_1.pgTable)("state", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    name: (0, pg_core_1.varchar)("name", { length: 256 }),
    code: (0, pg_core_1.varchar)("code", { length: 20 }),
});
exports.addressTable = (0, pg_core_1.pgTable)("address", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    street_address_1: (0, pg_core_1.varchar)("street_address_1", { length: 256 }),
    street_address_2: (0, pg_core_1.varchar)("street_address_2", { length: 256 }),
    zip_code: (0, pg_core_1.varchar)("zip_code", { length: 10 }),
    delivery_instructions: (0, pg_core_1.varchar)("delivery_instructions", { length: 256 }),
    user_id: (0, pg_core_1.integer)("user_id").references(() => exports.usersTable.id, {
        onDelete: "cascade",
    }),
    city_id: (0, pg_core_1.integer)("city_id").references(() => exports.cityTable.id, {
        onDelete: "cascade",
    }),
    created_at: (0, pg_core_1.timestamp)("created_at")
        .default((0, drizzle_orm_1.sql) `NOW()`)
        .notNull(),
    updated_at: (0, pg_core_1.timestamp)("updated_at")
        .default((0, drizzle_orm_1.sql) `NOW()`)
        .notNull(),
});
exports.categoryTable = (0, pg_core_1.pgTable)("category", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    name: (0, pg_core_1.varchar)("name", { length: 256 }),
});
exports.commentTable = (0, pg_core_1.pgTable)("comments", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    order_id: (0, pg_core_1.integer)("order_id").references(() => exports.ordersTable.id, {
        onDelete: "cascade",
    }),
    user_id: (0, pg_core_1.integer)("user_id").references(() => exports.usersTable.id, {
        onDelete: "cascade",
    }),
    comment_text: (0, pg_core_1.varchar)("comment_text", { length: 256 }),
    is_complaint: (0, pg_core_1.boolean)("is_complaint"),
    is_praise: (0, pg_core_1.boolean)("is_praise"),
    created_at: (0, pg_core_1.timestamp)("created_at")
        .default((0, drizzle_orm_1.sql) `NOW()`)
        .notNull(),
    updated_at: (0, pg_core_1.timestamp)("updated_at")
        .default((0, drizzle_orm_1.sql) `NOW()`)
        .notNull(),
});
exports.driversTable = (0, pg_core_1.pgTable)("driver", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    car_make: (0, pg_core_1.varchar)("car_make", { length: 256 }),
    car_model: (0, pg_core_1.varchar)("car_model", { length: 256 }),
    car_year: (0, pg_core_1.integer)("car_year"),
    user_id: (0, pg_core_1.integer)("user_id").references(() => exports.usersTable.id, {
        onDelete: "cascade",
    }),
    online: (0, pg_core_1.boolean)("online"),
    delivering: (0, pg_core_1.boolean)("delivering"),
    created_at: (0, pg_core_1.timestamp)("created_at")
        .default((0, drizzle_orm_1.sql) `NOW()`)
        .notNull(),
    updated_at: (0, pg_core_1.timestamp)("updated_at")
        .default((0, drizzle_orm_1.sql) `NOW()`)
        .notNull(),
});
exports.orderMenuItemTable = (0, pg_core_1.pgTable)("order_menu_item", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    order_id: (0, pg_core_1.integer)("order_id").references(() => exports.ordersTable.id, {
        onDelete: "cascade",
    }),
    menu_item_id: (0, pg_core_1.integer)("menu_item_id").references(() => exports.menuItemTable.id, {
        onDelete: "cascade",
    }),
    quantity: (0, pg_core_1.integer)("quantity"),
    item_price: (0, pg_core_1.integer)("item_price"),
    price: (0, pg_core_1.integer)("price"),
    comment: (0, pg_core_1.varchar)("comment"),
});
exports.orderStatusTable = (0, pg_core_1.pgTable)("order_status", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    order_id: (0, pg_core_1.integer)("order_id")
        .notNull()
        .references(() => exports.ordersTable.id, { onDelete: "cascade" }),
    status_catalog_id: (0, pg_core_1.integer)("status_catalog_id")
        .notNull()
        .references(() => exports.statusCatalogueTable.id, { onDelete: "cascade" }),
    created_at: (0, pg_core_1.timestamp)("created_at")
        .default((0, drizzle_orm_1.sql) `NOW()`)
        .notNull(),
});
exports.ordersTable = (0, pg_core_1.pgTable)("orders", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    restaurant_id: (0, pg_core_1.integer)("restaurant_id").references(() => exports.restaurantTable.id, {
        onDelete: "cascade",
    }),
    estimated_delivery_time: (0, pg_core_1.varchar)("estimated_delivery_time", { length: 256 }),
    actual_delivery_time: (0, pg_core_1.varchar)("actual_delivery_time", { length: 256 }),
    delivery_address_id: (0, pg_core_1.integer)("delivery_address_id").references(() => exports.addressTable.id, { onDelete: "cascade" }),
    user_id: (0, pg_core_1.integer)("user_id").references(() => exports.usersTable.id, {
        onDelete: "cascade",
    }),
    driver_id: (0, pg_core_1.integer)("driver_id").references(() => exports.driversTable.id, {
        onDelete: "cascade",
    }),
    price: (0, pg_core_1.varchar)("price", { length: 256 }),
    discount: (0, pg_core_1.varchar)("discount", { length: 256 }),
    final_price: (0, pg_core_1.varchar)("final_price", { length: 256 }),
    comment: (0, pg_core_1.varchar)("comment", { length: 256 }),
    created_at: (0, pg_core_1.timestamp)("created_at")
        .default((0, drizzle_orm_1.sql) `NOW()`)
        .notNull(),
    updated_at: (0, pg_core_1.timestamp)("updated_at")
        .default((0, drizzle_orm_1.sql) `NOW()`)
        .notNull(),
});
exports.restaurantTable = (0, pg_core_1.pgTable)("restaurant", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    name: (0, pg_core_1.varchar)("name", { length: 256 }),
    street_address: (0, pg_core_1.varchar)("street_address", { length: 256 }),
    zip_code: (0, pg_core_1.varchar)("zip_code", { length: 10 }),
    city_id: (0, pg_core_1.integer)("city_id").references(() => exports.cityTable.id, {
        onDelete: "cascade",
    }),
    created_at: (0, pg_core_1.timestamp)("created_at")
        .default((0, drizzle_orm_1.sql) `NOW()`)
        .notNull(),
    updated_at: (0, pg_core_1.timestamp)("updated_at")
        .default((0, drizzle_orm_1.sql) `NOW()`)
        .notNull(),
});
exports.statusCatalogueTable = (0, pg_core_1.pgTable)("status_catalog", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    name: (0, pg_core_1.varchar)("name", { length: 256 }),
});
exports.usersTable = (0, pg_core_1.pgTable)("users", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    name: (0, pg_core_1.varchar)("name", { length: 256 }),
    contact_phone: (0, pg_core_1.varchar)("contact_phone", { length: 20 }),
    phone_verified: (0, pg_core_1.boolean)("phone_verified"),
    email: (0, pg_core_1.varchar)("email", { length: 256 }),
    email_verified: (0, pg_core_1.boolean)("email_verified"),
    confirmation_code: (0, pg_core_1.varchar)("confirmation_code", { length: 256 }),
    password: (0, pg_core_1.varchar)("password", { length: 256 }),
});
exports.restaurantOwnerTable = (0, pg_core_1.pgTable)("restaurant_owner", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    restaurant_id: (0, pg_core_1.integer)("restaurant_id").references(() => exports.restaurantTable.id, {
        onDelete: "cascade",
    }),
    owner_id: (0, pg_core_1.integer)("owner_id").references(() => exports.usersTable.id, {
        onDelete: "cascade",
    }),
});
// relationships
//1 menu_item
exports.menuItemRelations = (0, drizzle_orm_2.relations)(exports.menuItemTable, ({ one }) => ({
    restaurant: one(exports.restaurantTable, {
        fields: [exports.menuItemTable.restaurant_id],
        references: [exports.restaurantTable.id],
    }),
    category: one(exports.categoryTable, {
        fields: [exports.menuItemTable.category_id],
        references: [exports.categoryTable.id],
    }),
}));
//2 category
exports.categoryMenuRelations = (0, drizzle_orm_2.relations)(exports.categoryTable, ({ many }) => ({
    menuItems: many(exports.menuItemTable),
}));
//3 restaurant
//one restaurant contains many menu items and orders
exports.restaurantRelations = (0, drizzle_orm_2.relations)(exports.restaurantTable, ({ many, one }) => ({
    menuItem: many(exports.menuItemTable),
    orders: many(exports.ordersTable),
    city: one(exports.cityTable, {
        fields: [exports.restaurantTable.city_id],
        references: [exports.cityTable.id],
    }),
    restaurantOwner: one(exports.restaurantOwnerTable, {
        fields: [exports.restaurantTable.id],
        references: [exports.restaurantOwnerTable.restaurant_id],
    }),
}));
//4 A restaurant owner can own many restaurants
exports.restaurantOwnerRelations = (0, drizzle_orm_2.relations)(exports.restaurantOwnerTable, ({ one }) => ({
    user: one(exports.usersTable, {
        fields: [exports.restaurantOwnerTable.owner_id],
        references: [exports.usersTable.id],
    }),
    restaurant: one(exports.restaurantTable, {
        fields: [exports.restaurantOwnerTable.restaurant_id],
        references: [exports.restaurantTable.id],
    }),
}));
//4 city
// a city can have many restaurants and addresses
exports.cityRestaurantRelations = (0, drizzle_orm_2.relations)(exports.cityTable, ({ many, one }) => ({
    restaurants: many(exports.restaurantTable),
    addresses: many(exports.addressTable),
    // one city belongs to one state
    state: one(exports.stateTable, {
        fields: [exports.cityTable.state_id],
        references: [exports.stateTable.id],
    }),
}));
//5 state
// one state can have many cities
exports.stateRelations = (0, drizzle_orm_2.relations)(exports.stateTable, ({ many }) => ({
    cities: many(exports.cityTable),
}));
//7. address
// An address belongs to one city and can be associated with many orders
exports.addressRelations = (0, drizzle_orm_2.relations)(exports.addressTable, ({ one, many }) => ({
    city: one(exports.cityTable, {
        fields: [exports.addressTable.city_id],
        references: [exports.cityTable.id],
    }),
    user: one(exports.usersTable, {
        fields: [exports.addressTable.user_id],
        references: [exports.usersTable.id],
    }),
    orders: many(exports.ordersTable),
}));
//8. order
// An order is associated with one restaurant, one delivery address, one user, and can have many order items, order statuses, and commentTable
exports.orderRelations = (0, drizzle_orm_2.relations)(exports.ordersTable, ({ one, many }) => ({
    restaurant: one(exports.restaurantTable, {
        fields: [exports.ordersTable.restaurant_id],
        references: [exports.restaurantTable.id],
    }),
    deliveryAddress: one(exports.addressTable, {
        fields: [exports.ordersTable.delivery_address_id],
        references: [exports.addressTable.id],
    }),
    user: one(exports.usersTable, {
        fields: [exports.ordersTable.user_id],
        references: [exports.usersTable.id],
    }),
    driver: one(exports.driversTable, {
        fields: [exports.ordersTable.driver_id],
        references: [exports.driversTable.id],
    }),
    orderMenuItems: many(exports.orderMenuItemTable),
    orderStatuses: many(exports.orderStatusTable),
    commentTable: many(exports.commentTable),
}));
//9. order_menu_item
// An order menu item is associated with one order and one menu item
exports.orderMenuItemRelations = (0, drizzle_orm_2.relations)(exports.orderMenuItemTable, ({ one }) => ({
    order: one(exports.ordersTable, {
        fields: [exports.orderMenuItemTable.order_id],
        references: [exports.ordersTable.id],
    }),
    menuItem: one(exports.menuItemTable, {
        fields: [exports.orderMenuItemTable.menu_item_id],
        references: [exports.menuItemTable.id],
    }),
}));
//10. order_status
// An order status is associated with one order and one status catalogue entry
exports.orderStatusRelations = (0, drizzle_orm_2.relations)(exports.orderStatusTable, ({ one }) => ({
    order: one(exports.ordersTable, {
        fields: [exports.orderStatusTable.order_id],
        references: [exports.ordersTable.id],
    }),
    statusCatalogue: one(exports.statusCatalogueTable, {
        fields: [exports.orderStatusTable.status_catalog_id],
        references: [exports.statusCatalogueTable.id],
    }),
}));
//11. status_catalogue
// A status catalogue can have many order statuses
exports.statusCatalogueRelations = (0, drizzle_orm_2.relations)(exports.statusCatalogueTable, ({ many }) => ({
    orderStatuses: many(exports.orderStatusTable),
}));
//12. drivers
// A driver is associated with one user and can have many orders
exports.driverRelations = (0, drizzle_orm_2.relations)(exports.driversTable, ({ one, many }) => ({
    user: one(exports.usersTable, {
        fields: [exports.driversTable.user_id],
        references: [exports.usersTable.id],
    }),
    orders: many(exports.ordersTable),
}));
//13. comment
// A comment is associated with one order and one user
exports.commentRelations = (0, drizzle_orm_2.relations)(exports.commentTable, ({ one }) => ({
    order: one(exports.ordersTable, {
        fields: [exports.commentTable.order_id],
        references: [exports.ordersTable.id],
    }),
    user: one(exports.usersTable, {
        fields: [exports.commentTable.user_id],
        references: [exports.usersTable.id],
    }),
}));
// 14. users
// A user can have many addresses, orders, comments, and can be a driver or a restaurant owner
exports.userRelations = (0, drizzle_orm_2.relations)(exports.usersTable, ({ many }) => ({
    addresses: many(exports.addressTable),
    orders: many(exports.ordersTable),
    comments: many(exports.commentTable),
    drivers: many(exports.driversTable),
    restaurantOwners: many(exports.restaurantOwnerTable),
}));
