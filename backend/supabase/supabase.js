// backend/config/supabase.js

import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://rcosxurdjmngpfbiewhm.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJjb3N4dXJkam1uZ3BmYmlld2htIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2ODAyNDE5MiwiZXhwIjoyMDgzNjAwMTkyfQ.rI_nAP0vvzRlL42yIm_2iCyaAh5WzPCQ2ryTC6t453g"
);
