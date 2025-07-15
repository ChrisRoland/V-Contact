// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import { supabase } from '@/lib/supabase'

import Landing      from '@/views/Landing.vue'
import Login        from '@/views/Login.vue'
import Register     from '@/views/Register.vue'
import Dashboard    from '@/views/Dashboard.vue'
import ContactForm  from '@/components/ContactForm.vue'
import Todo from '@/views/Todo.vue'

const routes = [
  { path: '/',         name: 'Landing',   component: Landing },
  { path: '/login',    name: 'Login',     component: Login },
  { path: '/register', name: 'Register',  component: Register },
  { path: '/todo', name: 'Todo', component: Todo },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    beforeEnter: async (_, __, next) => {
      const { data: { session } } = await supabase.auth.getSession()
      session ? next() : next('/login')
    }
  },
  { path: '/contact',  name: 'Contact',   component: ContactForm },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
