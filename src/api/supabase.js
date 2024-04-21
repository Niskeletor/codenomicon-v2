// src/pages/api/supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function get() {
  const { data, error } = await supabase
    .from('resources')
    .select('*');

  if (error) {
    return {
      status: 500,
      body: { error: 'Failed to fetch data' }
    };
  }

  return {
    status: 200,
    body: { data }
  };
}
