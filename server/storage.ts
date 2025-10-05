import { eq } from "drizzle-orm";
import { type User,  type InsertUser, Customer, CustomerResources, type InsertCustomer, InsertCustomerResources,  users, customer, customerResources } from "@shared/schema";
import { db } from "./db";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getCustomerByEmail(email: string): Promise<Customer | undefined>;
  createCustomer(signupData: Omit<InsertCustomer, 'confirmPassword'>): Promise<Customer>;
  createCustomerResource(customerResources: InsertCustomerResources): Promise<CustomerResources>;
}

export class DbStorage implements IStorage {
  
  async getUser(id: string): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.id, id));
    return result[0];
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.username, username));
    return result[0];
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const result = await db.insert(users).values(insertUser).returning();
    return result[0];
  }

  async getCustomerByEmail(email: string): Promise<Customer | undefined> {
    const result = await db.select().from(customer).where(eq(customer.email, email));
    return result[0];
  }

  async createCustomerResource(insertCustomerResources: InsertCustomerResources): Promise<CustomerResources> {
    const result = await db.insert(customerResources).values(insertCustomerResources).returning();
    return result[0];
  }

  async createCustomer(signupData: Omit<InsertCustomer, 'confirmPassword'>): Promise<Customer> {
    console.log("🔥 Customer CALLED! Request body:");
      
    const result = await db.insert(customer).values(signupData).returning();
        console.log("🔥 Customer CALLED! Request body:", result[0]);

    return result[0];
  }


}

export const storage = new DbStorage();
