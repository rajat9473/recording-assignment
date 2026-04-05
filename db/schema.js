import { pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const chunks = pgTable("chunks", {
  id: text("id").primaryKey(),
  filename: text("filename"),
  createdAt: timestamp("created_at").defaultNow(),
});