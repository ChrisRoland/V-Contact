<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '@/lib/supabase'

const router = useRouter()
const email    = ref('')
const password = ref('')
const error    = ref(null)

async function signIn() {
  const { error: err } = await supabase.auth.signInWithPassword({
    email:    email.value,
    password: password.value
  })

  if (err) {
    error.value = err.message
  } else {
    // alert('Welcome back!')
    // Navigate to Dashboard by route name:
    router.push({ name: 'Dashboard' })
  }
}
</script>

<template>
  <div class="form-wrapper">
    <h2>Log In</h2>
    <form @submit.prevent="signIn">
      <input v-model="email"    type="email"    placeholder="Email"    required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Log In</button>
    </form>
    <p class="error" v-if="error">{{ error }}</p>
  </div>
</template>

<style scoped>
h2 {
  margin-bottom: 1rem;
  text-align: center;
}

.error {
  color: red;
  margin-top: 1rem;
  text-align: center;
}
</style>
