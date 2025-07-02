<template>
  <div class="landing-container">
    <h1 class="landing-title">Welcome to Your App</h1>
    <p class="landing-subtitle">A quick, simple Vue + Supabase starter</p>
    <div class="landing-actions">
      <router-link to="/register">
        <button class="btn">Get Started</button>
      </router-link>
      <router-link to="/login">
        <button class="btn btn-outline">Log In</button>
      </router-link>
    </div>
  </div>
</template>

<script setup>
 // no logic needed here yet
</script>

<style scoped>
.landing-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  font-family: sans-serif;
}

.landing-title {
  font-size: 3rem;
  margin-bottom: 0.5rem;
}

.landing-subtitle {
  color: #666;
  margin-bottom: 2rem;
}

.landing-actions {
  display: flex;
  gap: 1rem;
}

.btn {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
}

.btn-outline {
  background: transparent;
  color: #42b983;
  border: 2px solid #42b983;
}
</style>
