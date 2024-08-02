<script setup lang="ts">
import TheFooter from '@/components/TheFooter.vue'
import { useTodoStore } from '@/stores/todos'
import { computed } from 'vue'
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiAccount } from '@mdi/js'

const todoStore = useTodoStore()
const displayTodo = computed(() => {
  return todoStore.todos.filter((todo) => {
    return todo.status === 'TODO' || todo.status === 'DOING'
  })
})
</script>
<template>
  <div class="animate-slide-in-right responsive-height">
    <div class="flex flex-col" v-for="todo in displayTodo" :key="todo.id">
      <div class="chat chat-end mr-4 mt-4">
        <div class="chat-image avatar">
          <div class="w-[60px] relative">
            <svg-icon type="mdi" :path="mdiAccount" :size="48" class="absolute top-6"></svg-icon>
          </div>
        </div>
        <div class="chat-header">
          Me
          <time class="text-xs opacity-50">{{ todo.date }}</time>
          <span></span>
        </div>
        <div
          class="chat-bubble"
          :class="{
            'chat-bubble-primary': todo.status === 'TODO',
            'chat-bubble-secondary': todo.status === 'DOING'
          }"
        >
          {{ todo.todoContent }}
        </div>
      </div>
    </div>
    <TheFooter />
  </div>
</template>

<style scoped>
.responsive-height {
  height: calc(100dvh - 68px);
}
</style>
