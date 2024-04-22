// stores/datosStore.js
import { atom } from 'nanostores';
import { supabase } from '../lib/supabaseClient.js';

export const datosStore = atom([]);

export async function cargarDatos(categoria) {
  let query = supabase.from('resources').select('*');

  // Si se proporciona una categoría, filtramos los resultados
  if (categoria) {
    query = query.eq('categoria', categoria);
  }

  let { data, error } = await query;
  console.log('Respuesta de Supabase:', data, error); 

  if (error) {
    console.error('Error cargando los datos:', error);
    datosStore.set([]);
  } else {
    console.log('Datos cargados:', data);
    datosStore.set(data);
  }
}