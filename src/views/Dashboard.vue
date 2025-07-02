<template>
  <div class="dashboard-container">
    <h1 class="title">Welcome to Your Dashboard</h1>
    <p class="subtitle">Here’s a quick overview of your activity:</p>

    <!-- Example content cards -->
    <div class="cards">
      <div class="card">
        <h2>Profile</h2>
        <p>View and edit your profile information.</p>
      </div>
      <div class="card">
        <h2>Settings</h2>
        <p>Manage your preferences and account settings.</p>
      </div>
      <div class="card">
        <h2>Analytics</h2>
        <p>See your recent usage stats at a glance.</p>
      </div>
    </div>

    <!-- Contact Us Button -->
    <button class="contact-button" @click="goToContact">
      Contact Us
    </button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function goToContact() {
  router.push({ name: 'Contact' })
}
</script>

<style scoped>
.dashboard-container {
  max-width: 800px;
  margin: 2rem auto;
  padding: 1rem;
  text-align: center;
  font-family: sans-serif;
}

.title {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.subtitle {
  color: #555;
  margin-bottom: 2rem;
}

.cards {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}

.card {
  flex: 1 1 200px;
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.contact-button {
  background-color: #42b983;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
}

.contact-button:hover {
  background-color: #369c71;
}
</style>