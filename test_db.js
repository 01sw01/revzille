// check-table.js
import dotenv from 'dotenv';
import pkg from 'pg';
const { Client } = pkg;

dotenv.config();

async function checkTable() {
  const client = new Client({
    connectionString: process.env.DATABASE_URL
  });
  
  try {
    await client.connect();
    console.log('Connected to database successfully');
    
    // Check if trial_signups table exists
    const result = await client.query(`
      SELECT column_name, data_type, is_nullable
      FROM information_schema.columns 
      WHERE table_name = 'customer'
      ORDER BY ordinal_position
    `);
    
    if (result.rows.length > 0) {
      console.log('✅ trial_signups table found with columns:');
      result.rows.forEach(row => {
        console.log(`  - ${row.column_name}: ${row.data_type} ${row.is_nullable === 'NO' ? '(NOT NULL)' : ''}`);
      });
    } else {
      console.log('❌ trial_signups table does NOT exist');
      
      // Show what tables do exist
      const tables = await client.query(`
        SELECT table_name FROM information_schema.tables 
        WHERE table_schema = 'public'
        ORDER BY table_name
      `);
      
      if (tables.rows.length > 0) {
        console.log('\nAvailable tables in database:');
        tables.rows.forEach(row => {
          console.log(`  - ${row.table_name}`);
        });
      } else {
        console.log('\nNo tables found in database');
      }
    }
    
  } catch (error) {
    console.error('❌ Error checking table:', error.message);
    console.error('Full error:', error);
  } finally {
    await client.end();
  }
}

checkTable();