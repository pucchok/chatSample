import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todos', () => {
  const todos = ref([{ id: 0, todoContent: 'サンプルタスク', status: 'TODO', date: '2024-08-02' }])
  let id = 1

  const addTodo = (todo) => {
    todo.id = id
    todos.value.push(todo)
    id++
  }

  const updateTodo = (updateTodo) => {
    const idx = todos.value.findIndex((todo) => {
      return todo.id === updateTodo.id
    })
    todos.value.splice(idx, 1, updateTodo)
  }

  const deleteTodo = (id: string) => {
    const idx = todos.value.findIndex((todo) => {
      return todo.id === id
    })
    todos.value.splice(idx, 1)
  }

  return { todos, addTodo, updateTodo, deleteTodo }
})
