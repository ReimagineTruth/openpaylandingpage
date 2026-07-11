import { supabase } from './supabase';

// Test Supabase connection
async function testConnection() {
  try {
    console.log('Testing Supabase connection...');
    console.log('Supabase URL:', import.meta.env.VITE_SUPABASE_URL);
    
    // Test basic connection
    const { data, error } = await supabase.from('blog_posts').select('count').limit(1);
    
    if (error) {
      console.error('Connection failed:', error);
      return false;
    }
    
    console.log('Connection successful!');
    console.log('Data:', data);
    return true;
  } catch (err) {
    console.error('Test failed:', err);
    return false;
  }
}

// Run test
testConnection();
