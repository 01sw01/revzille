import dotenv from 'dotenv';
import { neon } from '@neondatabase/serverless';
import pkg from 'pg';
const { Pool } = pkg;

dotenv.config();


const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});


//const sql = neon(process.env.DATABASE_URL);

async function testNeon() {
  try {
    console.log('Testing Neon connection...');
    const result = await sql`SELECT NOW() as current_time`;
    console.log('✅ Neon connected:', result[0]);
    
    // Test if trial_signups table exists
    const tables = await sql`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public'
    `;
    console.log('📋 Available tables:', tables.map(t => t.table_name));
    
  } catch (error) {
    console.error('❌ Neon connection failed:', error.message);
  }

  // Add this to test-neon.js after the existing code
try {
    // Check existing records
    const existingSignups = await sql`SELECT * FROM trial_signups`;
    console.log('📝 Existing trial signups:', existingSignups.length, 'records');
    
    if (existingSignups.length > 0) {
      console.log('Latest signup:', existingSignups[existingSignups.length - 1]);
    }
    
    // Test inserting a record
    console.log('🧪 Testing insert...');
    const testInsert = await sql`
      INSERT INTO trial_signups (name, company_name, email, password, phone_number) 
      VALUES ('Test User', 'Test Company', 'test@example.com', 'hashed_password', '1234567890')
      RETURNING *
    `;
    console.log('✅ Test insert successful:', testInsert[0]);
    
  } catch (error) {
    console.error('❌ Database operation failed:', error.message);
    console.error('Error details:', error);
  }
}

testNeon();