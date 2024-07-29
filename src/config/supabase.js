
import {createClient} from '@supabase/supabase-js';
const supabaseUrl='https://ewhhyyblbduchmrpufrr.supabase.co';
const supabaseKey='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV3aGh5eWJsYmR1Y2htcnB1ZnJyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE5OTIxOTEsImV4cCI6MjAzNzU2ODE5MX0.CE9AbBJ_6dlma4anThtlzHwzXQsX3rFJRoExV7Bkzh8';

const supabase = createClient(supabaseUrl, supabaseKey);


export default supabase
