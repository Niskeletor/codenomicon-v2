//lib/fetchSupabaseData.js

import { supabase } from '../lib/supabaseClient.js';

export async function fetchSupabaseData() {
  let { data, error } = await supabase.from('resources').select('url, titulo');
  if (error) console.error('Error fetching data:', error);
  return data;
}