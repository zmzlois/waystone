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

export const users = pgTable("users", {
  id: uuid("id").defaultRandom().primaryKey(),
  workosUserId: text("workos_user_id").unique().notNull(),
  email: text("email").notNull(),
  name: text("name"),
  avatarUrl: text("avatar_url"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
})

export const conversations = pgTable("conversations", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: uuid("user_id")
    .references(() => users.id, { onDelete: "cascade" })
    .notNull(),
  title: text("title").default("new conversation").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
})

export const messages = pgTable("messages", {
  id: uuid("id").defaultRandom().primaryKey(),
  conversationId: uuid("conversation_id")
    .references(() => conversations.id, { onDelete: "cascade" })
    .notNull(),
  role: messageRoleEnum("role").notNull(),
  // stores the full UIMessage parts array as json
  parts: jsonb("parts").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
})
