import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { supabase } from './lib/supabase'
import './style.css'

const app = createApp(App)

// keep track of login/logout events (optional store integration here)
supabase.auth.onAuthStateChange((event, session) => {
  // console.log('Auth event:', event, session)
})

app
  .use(router)   // <-- register the router
  .mount('#app')