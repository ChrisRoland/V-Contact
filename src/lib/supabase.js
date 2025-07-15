import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://bcmopuckxrbewurankzf.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJjbW9wdWNreHJiZXd1cmFua3pmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI1ODQ5MTEsImV4cCI6MjA2ODE2MDkxMX0.xo0yfjIafBVEE1Q7xNPYYPL6DaaGciQ7bSaFTYi3pds'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)