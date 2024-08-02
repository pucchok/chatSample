<script setup lang="ts">
import { ref } from 'vue'
import { useTodoStore } from '@/stores/todos'

const todoStore = useTodoStore()

interface Props {
  todo: { id: number; todoContent: string; status: string; date: string }
}

const props = defineProps<Props>()

// 各フォームの初期値設定
const todoContent = ref(props.todo.todoContent)
const todoStatus = ref(props.todo.status)

// タスク内容更新
const updateTodoContent = () => {
  const updateTodo = todoStore.todos.find((todo) => {
    return todo.id === props.todo.id
  })
  updateTodo.todoContent = todoContent.value
  todoStore.updateTodo(updateTodo)
}

// ステータス更新
const updateTodoStatus = () => {
  const updateTodo = todoStore.todos.find((todo) => {
    return todo.id === props.todo.id
  })

  updateTodo.status = todoStatus.value
  todoStore.updateTodo(updateTodo)
}

// タスク削除
const deleteTodo = () => {
  todoStore.deleteTodo(props.todo.id)
}
</script>
<template>
  <div class="flex flex-col w-full mt-4">
    <input
      type="text"
      v-model.lazy="todoContent"
      class="input input-bordered w-full mb-2"
      @change="updateTodoContent"
    />
    <div class="flex gap-2">
      <select
        class="select select-bordered w-36"
        v-model.lazy="todoStatus"
        @change="updateTodoStatus"
      >
        <option value="TODO">TODO</option>
        <option value="DOING">DOING</option>
        <option value="DONE">DONE</option>
      </select>
      <input type="date" class="input input-bordered w-38" :value="props.todo.date" disabled />
      <div>
        <button class="btn btn-error" @click="deleteTodo">削除</button>
      </div>
    </div>
    <div class="divider"></div>
  </div>
</template>
