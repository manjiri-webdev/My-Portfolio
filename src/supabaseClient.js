import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://cmibxrdmxotankqieeof.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNtaWJ4cmRteG90YW5rcWllZW9mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ5NzU5MjksImV4cCI6MjA5MDU1MTkyOX0.y6wATPBgMVEGlCdBGAdOjymdcM-CBgxYCgqZ_SWaH60";

export const supabase = createClient(supabaseUrl, supabaseKey);