<template>
  <div class="todo-app">
    <h1>📝 My To-Do List</h1>

    <form @submit.prevent="addTodo">
      <input
        v-model="newTodo"
        type="text"
        placeholder="Enter a new task"
        required
      />
      <button type="submit">Add</button>
    </form>

    <ul>
      <li
        v-for="(todo, index) in todos"
        :key="index"
        :class="{ completed: todo.done }"
      >
        <span @click="toggleTodo(index)">
          {{ todo.text }}
        </span>
        <button @click="removeTodo(index)">❌</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'

const newTodo = ref('')
const todos = ref([])

// Load from localStorage on mount
onMounted(() => {
  const saved = localStorage.getItem('vue-todos')
  if (saved) todos.value = JSON.parse(saved)
})

// Save to localStorage whenever todos change
watch(todos, (newVal) => {
  localStorage.setItem('vue-todos', JSON.stringify(newVal))
}, { deep: true })

function addTodo() {
  if (newTodo.value.trim()) {
    todos.value.push({ text: newTodo.value.trim(), done: false })
    newTodo.value = ''
  }
}

function toggleTodo(index) {
  todos.value[index].done = !todos.value[index].done
}

function removeTodo(index) {
  todos.value.splice(index, 1)
}
</script>

<style scoped>
.todo-app {
  max-width: 500px;
  margin: 2rem auto;
  padding: 1rem;
  font-family: sans-serif;
  text-align: center;
}

input {
  padding: 0.5rem;
  width: 70%;
  margin-right: 0.5rem;
}

button {
  padding: 0.5rem 1rem;
  cursor: pointer;
}

ul {
  list-style: none;
  padding: 0;
  margin-top: 1rem;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f3f3f3;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background 0.2s ease;
}

li.completed span {
  text-decoration: line-through;
  color: #aaa;
}

li span {
  flex: 1;
  text-align: left;
  cursor: pointer;
}
</style>
