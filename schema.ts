import { pgEnum, pgTable, text, timestamp, varchar, numeric, integer, boolean, uuid } from "drizzle-orm/pg-core";

// Enums
export const roleEnum = pgEnum("role", ["user", "admin"]);
export const classificationTypeEnum = pgEnum("classification_type", ["RECEITA", "DESPESA", "INVESTIMENTO"]);
export const paymentTypeEnum = pgEnum("payment_type", ["DINHEIRO", "DÉBITO", "CRÉDITO", "TRANSFERÊNCIA", "PIX", "OUTRO"]);
export const investmentTypeEnum = pgEnum("investment_type", ["AÇÃO", "FUNDO", "RENDA_FIXA", "CRIPTO", "OUTRO"]);

// Users
export const users = pgTable("users", {
  id: varchar("id", { length: 64 }).primaryKey(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: roleEnum("role").notNull().default("user"),
  createdAt: timestamp("createdAt").defaultNow(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

// Classifications
export const classifications = pgTable("classifications", {
  id: uuid("id").primaryKey().defaultRandom(),
  code: varchar("code", { length: 10 }).notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  type: classificationTypeEnum("type").notNull(),
  userId: varchar("userId", { length: 64 }).notNull(),
  createdAt: timestamp("createdAt").defaultNow(),
});

export type Classification = typeof classifications.$inferSelect;
export type InsertClassification = typeof classifications.$inferInsert;

// Centers
export const centers = pgTable("centers", {
  id: uuid("id").primaryKey().defaultRandom(),
  code: varchar("code", { length: 10 }).notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  classificationId: uuid("classificationId").notNull(),
  userId: varchar("userId", { length: 64 }).notNull(),
  createdAt: timestamp("createdAt").defaultNow(),
});

export type Center = typeof centers.$inferSelect;
export type InsertCenter = typeof centers.$inferInsert;

// Accounts
export const accounts = pgTable("accounts", {
  id: uuid("id").primaryKey().defaultRandom(),
  code: varchar("code", { length: 20 }).notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  centerId: uuid("centerId").notNull(),
  userId: varchar("userId", { length: 64 }).notNull(),
  createdAt: timestamp("createdAt").defaultNow(),
});

export type Account = typeof accounts.$inferSelect;
export type InsertAccount = typeof accounts.$inferInsert;

// Payment Methods
export const paymentMethods = pgTable("paymentMethods", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 255 }).notNull(),
  type: paymentTypeEnum("type").notNull(),
  userId: varchar("userId", { length: 64 }).notNull(),
  isActive: boolean("isActive").notNull().default(true),
  createdAt: timestamp("createdAt").defaultNow(),
});

export type PaymentMethod = typeof paymentMethods.$inferSelect;
export type InsertPaymentMethod = typeof paymentMethods.$inferInsert;

// Transactions
export const transactions = pgTable("transactions", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: varchar("userId", { length: 64 }).notNull(),
  accountId: uuid("accountId").notNull(),
  paymentMethodId: uuid("paymentMethodId").notNull(),
  description: varchar("description", { length: 255 }).notNull(),
  amount: numeric("amount", { precision: 12, scale: 2 }).notNull(),
  transactionDate: timestamp("transactionDate").notNull(),
  installments: integer("installments").notNull().default(1),
  currentInstallment: integer("currentInstallment").notNull().default(1),
  parentTransactionId: uuid("parentTransactionId"),
  notes: text("notes"),
  createdAt: timestamp("createdAt").defaultNow(),
  updatedAt: timestamp("updatedAt").defaultNow(),
});

export type Transaction = typeof transactions.$inferSelect;
export type InsertTransaction = typeof transactions.$inferInsert;

// Investments
export const investments = pgTable("investments", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: varchar("userId", { length: 64 }).notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  ticker: varchar("ticker", { length: 20 }),
  quantity: numeric("quantity", { precision: 12, scale: 4 }).notNull(),
  purchasePrice: numeric("purchasePrice", { precision: 12, scale: 2 }).notNull(),
  currentPrice: numeric("currentPrice", { precision: 12, scale: 2 }).notNull(),
  type: investmentTypeEnum("type").notNull(),
  recordDate: timestamp("recordDate").notNull(),
  createdAt: timestamp("createdAt").defaultNow(),
  updatedAt: timestamp("updatedAt").defaultNow(),
});

export type Investment = typeof investments.$inferSelect;
export type InsertInvestment = typeof investments.$inferInsert;

