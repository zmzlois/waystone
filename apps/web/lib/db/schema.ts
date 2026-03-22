import {
  pgTable,
  uuid,
  text,
  timestamp,
  jsonb,
  pgEnum,
} from "drizzle-orm/pg-core"

export const messageRoleEnum = pgEnum("message_role", [
  "user",
  "assistant",
  "system",
])

export const base = {
  id: uuid("id").defaultRandom().primaryKey(),
  created_at: timestamp("created_at").defaultNow().notNull(),
  updated_at: timestamp("updated_at").defaultNow().notNull(),
}

export const users = pgTable("users", {
  workos_user_id: text("workos_user_id").unique().notNull(),
  email: text("email").notNull(),
  name: text("name"),
  avatar_url: text("avatar_url"),
  ...base,
})

export const conversations = pgTable("conversations", {
  user_id: uuid("user_id")
    .references(() => users.id, { onDelete: "cascade" })
    .notNull(),
  title: text("title").default("new conversation").notNull(),
  ...base,
})

export const messages = pgTable("messages", {
  conversation_id: uuid("conversation_id")
    .references(() => conversations.id, { onDelete: "cascade" })
    .notNull(),
  role: messageRoleEnum("role").notNull(),
  parts: jsonb("parts").notNull(),
  ...base,
})
