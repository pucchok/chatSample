<script setup lang="ts">
import TodoRow from '@/components/TodoRow.vue'
import { useTodoStore } from '@/stores/todos'

const todoStore = useTodoStore()
</script>
<template>
  <div v-for="todoItem in todoStore.todos" :key="todoItem.id" class="flex mx-2">
    <TodoRow :todo='todoItem' />
  </div>
</template>
