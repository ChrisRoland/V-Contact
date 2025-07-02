import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://orvyxayblfarivfbzgrs.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9ydnl4YXlibGZhcml2ZmJ6Z3JzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE0ODczOTgsImV4cCI6MjA2NzA2MzM5OH0.0P0tKcctd__twIGQcGaQsX-BJm4bhQNiBREomP-Jrk4'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)