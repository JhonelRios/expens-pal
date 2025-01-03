import { int, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const usersTable = sqliteTable('users', {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  email: text().notNull().unique(),
});

export const expensesTypesTable = sqliteTable('expenses_types', {
  id: int().primaryKey(),
  name: text({ length: 50 }).notNull().unique(),
});
