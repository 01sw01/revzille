import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const customerResources = pgTable("customer_resources", {
  id: varchar("id").primaryKey(),
  network_name: text("network_name"),
  es_port: text("es_port"),
  kb_port: text("kb_port"),
  status: integer("status"),
  subnet: text("subnet"),
});

export const customer = pgTable("customer", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  domain: text("domain"),
  plan: text("plan").notNull(),
  adminPassword: text("admin_password").notNull(),
  companyName: text("company_name").notNull(),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  phoneNumber: text("phone_number").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
}).extend({
  username: z.string()
    .min(1, "Username cannot be blank")
    .min(3, "Username must be at least 3 characters long")
    .max(30, "Username cannot be longer than 30 characters")
    .regex(/^[a-zA-Z0-9_.-]+$/, "Username can only contain letters, numbers, dots, hyphens, and underscores")
    .trim(),
  password: z.string()
    .min(8, "Password must be at least 8 characters long")
    .max(128, "Password cannot be longer than 128 characters")
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/, 
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"),
});

export const insertCustomerSchema = createInsertSchema(customer).pick({
  name: true,
  companyName: true,
  email: true,
  password: true,
  phoneNumber: true,
  plan:true,
  adminPassword: true
}).extend({
  name: z.string()
    .min(1, "Name cannot be blank")
    .min(2, "Name must be at least 2 characters long")
    .max(100, "Name cannot be longer than 100 characters")
    .regex(/^[a-zA-Z\s'-]+$/, "Name can only contain letters, spaces, apostrophes, and hyphens")
    .trim(),
  companyName: z.string()
    .min(1, "Company name cannot be blank")
    .min(2, "Company name must be at least 2 characters long")
    .max(200, "Company name cannot be longer than 200 characters")
    .regex(/^[a-zA-Z0-9\s&.,'-]+$/, "Company name contains invalid characters")
    .trim(),
  email: z.string()
    .min(1, "Email cannot be blank")
    .email("Invalid email format")
    .max(254, "Email cannot be longer than 254 characters")
    .toLowerCase()
    .trim(),
  password: z.string()
    .min(8, "Password must be at least 8 characters long")
    .max(128, "Password cannot be longer than 128 characters")
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/, 
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"),
  phoneNumber: z.string()
    .min(1, "Phone number cannot be blank")
    .trim()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number cannot be longer than 15 digits")
    .regex(/^\+?[\d\s()-]+$/, "Phone number can only contain digits, spaces, parentheses, hyphens, and plus sign")
    .transform((val) => val.replace(/\s+/g, '')),
  confirmPassword: z.string()
    .min(8, "Confirm password must be at least 8 characters long"),
  adminPassword: z.string()
    .min(8, "Password must be at least 8 characters long")
    .max(128, "Password cannot be longer than 128 characters")
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/, 
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"),

    plan: z.string()
    .min(1, "Company name cannot be blank")
    .trim(),

}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

export const insertCustomerResourcesSchema = createInsertSchema(customerResources).pick({
  id: true,
  network_name: true,
  es_port: true,
  kb_port: true,
  status: true,
  subnet: true
})

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertCustomer = z.infer<typeof insertCustomerSchema>;
export type Customer = typeof customer.$inferSelect;
export type InsertCustomerResources = z.infer<typeof insertCustomerResourcesSchema>;
export type CustomerResources = typeof customerResources.$inferSelect;