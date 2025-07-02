<template>
  <form @submit.prevent="handleSubmit" class="contact-form">
    <div>
      <label for="name">Name:</label>
      <input id="name" v-model="form.name" required />
    </div>

    <div>
      <label for="email">Email:</label>
      <input id="email" type="email" v-model="form.email" required />
    </div>

    <div>
      <label for="message">Message:</label>
      <textarea id="message" v-model="form.message" required />
    </div>

    <button type="submit">Send</button>
  </form>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  message: ''
})

function handleSubmit() {
  // For now, just log the data
  console.log('Contact form submitted:', { ...form })

  // Clear form
  form.name = ''
  form.email = ''
  form.message = ''

  alert('Thanks for reaching out!')
}
</script>

<style>
.contact-form {
  max-width: 400px;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.contact-form label {
  font-weight: bold;
}
.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 0.5rem;
  box-sizing: border-box;
}
.contact-form button {
  padding: 0.75rem;
  cursor: pointer;
}
</style>
