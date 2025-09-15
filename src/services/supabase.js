import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://yvdseozmwranyoflvxbt.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl2ZHNlb3ptd3JhbnlvZmx2eGJ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM2MTUwNDgsImV4cCI6MjA2OTE5MTA0OH0.spGByVqfpBsBoyQjFepbbeTiXILdPeMH1FC7nJkEARQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
