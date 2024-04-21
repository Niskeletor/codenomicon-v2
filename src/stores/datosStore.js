// stores/datosStore.js
import { atom } from 'nanostores';
import { supabase } from '../lib/supabaseClient.js';
export const datosStore = atom([]);

console.log(supabase);
console.log(supabase.from);


export async function cargarDatos() {
  let { data, error } = await supabase

    .from('resources')
    .select('url, titulo');
    console.log(supabase);
    console.log(supabase.from);

  if (error) {
    console.error('Error cargando los datos:', error);
    datosStore.set([]);
  } else {
    console.log('Datos cargados:', data);
    datosStore.set(data);
  }
}
