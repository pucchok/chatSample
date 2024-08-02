<script setup lang="ts">
import { ref } from 'vue'
import { useTodoStore } from '@/stores/todos'
import dayjs from 'dayjs'
import ja from 'dayjs/locale/ja'

dayjs.locale(ja)

const taskMemo = ref('')
const todoStore = useTodoStore()
const post = () => {
  const date = dayjs().format('YYYY-MM-DD')
  const todo = { todoContent: taskMemo.value, status: 'TODO', date }
  todoStore.addTodo(todo)
  taskMemo.value = ''
}
</script>
<template>
  <div class="fixed bottom-0 flex w-full bg-black p-2 animate-slide-in-bottom">
    <input
      type="text"
      placeholder="タスクメモを入力してください"
      class="input input-bordered input-primary w-2/3"
      v-model="taskMemo"
    />
    <button class="btn btn-primary w-1/3 ml-4 mr-2" @click="post">投稿</button>
  </div>
</template>
