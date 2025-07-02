<template>
  <div class="form-wrapper">
    <h2>Register</h2>
    <form @submit.prevent="signUp">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Register</button>
    </form>
    <p class="error" v-if="error">{{ error }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { supabase } from '@/lib/supabase'

const email = ref('')
const password = ref('')
const error = ref(null)

async function signUp() {
  const { error: err } = await supabase.auth.signUp({ email: email.value, password: password.value })
  if (err) error.value = err.message
  else alert('Check your email to confirm!')
}
</script>

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
