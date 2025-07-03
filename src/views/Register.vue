<script setup>
import { ref, computed } from 'vue'
import { supabase } from '@/lib/supabase'

const name = ref('')
const email = ref('')
const password = ref('')
const error = ref(null)

// Password validation
const isPasswordValid = computed(() => {
    return password.value.length >= 6 && password.value.length <= 12
})

const passwordError = computed(() => {
    if (password.value.length === 0) return ''
    if (password.value.length < 6) return 'Password must be at least 6 characters'
    if (password.value.length > 12) return 'Password must be no more than 12 characters'
    return ''
})

async function signUp() {
    // Check if password is valid before submitting
    if (!isPasswordValid.value) {
        error.value = 'Please enter a valid password (6-12 characters)'
        return
    }
    
    const { error: err } = await supabase.auth.signUp({ 
        name: name.value,
        email: email.value, 
        password: password.value
    })
    
    if (err) {
        error.value = err.message
    } else {
        alert('Check your email to confirm!')
    }
}
</script>

<template>
  <div class="form-wrapper">
    <h2>Register</h2>
    <form @submit.prevent="signUp">
      <input v-model="name" type="name" placeholder="Name" required />
      <input v-model="email" type="email" placeholder="Email" required />
      <input 
        v-model="password" 
        type="password" 
        placeholder="Password" 
        :class="{ 'error': passwordError }"
        minlength="6"
        maxlength="12"
        required 
      />
      <p v-if="passwordError" class="error-message">{{ passwordError }}</p>
      <button type="submit" :disabled="!isPasswordValid && password.length > 0">
        Register
      </button>
      <p>Already have an account? <router-link to="/login">Log In!</router-link></p>
    </form>
    <p class="error" v-if="error">{{ error }}</p>
  </div>
</template>

<style scoped>
h2 {
  margin-bottom: 1rem;
  text-align: center;
}

p {
    font-size: 14px;
    text-align: center;
    a {
        text-decoration: none;
        color: green;
    }
}

.error {
  color: red;
  margin-top: 1rem;
  text-align: center;
}

.error-message {
  color: red;
  font-size: 0.875rem;
  margin-top: 0.25rem;
}

input.error {
  border-color: red;
}

button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
