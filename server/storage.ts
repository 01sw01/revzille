import { drizzle } from "drizzle-orm/neon-serverless";
import { Pool } from "@neondatabase/serverless";
import { eq } from "drizzle-orm";
import { type User, type InsertUser, type TrialSignup, type InsertTrialSignup, users, trialSignups } from "@shared/schema";

const pool = new Pool({ connectionString: process.env.DATABASE_URL! });
const db = drizzle(pool);

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getTrialSignupByEmail(email: string): Promise<TrialSignup | undefined>;
  createTrialSignup(signupData: Omit<InsertTrialSignup, 'confirmPassword'>): Promise<TrialSignup>;
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

  async getTrialSignupByEmail(email: string): Promise<TrialSignup | undefined> {
    const result = await db.select().from(trialSignups).where(eq(trialSignups.email, email));
    return result[0];
  }

  async createTrialSignup(signupData: Omit<InsertTrialSignup, 'confirmPassword'>): Promise<TrialSignup> {
    const result = await db.insert(trialSignups).values(signupData).returning();
    return result[0];
  }
}

export const storage = new DbStorage();
