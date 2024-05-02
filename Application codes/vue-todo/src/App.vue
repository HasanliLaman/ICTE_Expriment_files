<template>
  <div class="App">
    <main>
      <h1>TODO APP</h1>
      <div class="add-todo">
        <input
          type="text"
          v-model="newTodo"
          placeholder="Add Task"
          class="todo-input"
        />
        <button @click="addTodo" class="add-btn">Add</button>
      </div>
      <div class="todo-list">
        <TodoItem
          v-for="todo in todos"
          :key="todo.id"
          :id="todo.id"
          :todo="todo"
          @onDelete="deleteTodo"
          @onToggle="toggleTodo"
        />
      </div>
    </main>
  </div>
</template>

<script>
import TodoItem from "./components/TodoItem.vue";

export default {
  name: "App",
  components: {
    TodoItem,
  },
  data() {
    return {
      todos: [],
      newTodo: "",
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim() !== "") {
        this.todos.push({
          id: Date.now(),
          text: this.newTodo,
          completed: false,
        });
        this.newTodo = "";
      }
    },
    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
    toggleTodo(id) {
      this.todos = this.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
    },
  },
};
</script>

<style scoped>
.App {
  padding: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

main {
  width: 100%;
  max-width: 600px;
  padding: 30px;
  background-color: #f8f8ff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.09);
}

h1 {
  color: #646681;
  font-size: 35px;
  margin: 18px 0 25px;
}

.add-todo {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  gap: 15px;
}

.todo-input {
  flex-grow: 1;
  padding: 14px 13px;
  border: 2px solid #dfdfe9;
  border-radius: 5px;
  font-size: 16px;
  outline: 0;
}

.add-btn {
  padding: 14.5px 25px;
  border: none;
  background-color: #6370f0;
  color: #fff;
  border-radius: 5px;
  font-size: 17px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.add-btn:hover {
  background-color: #4c5df6;
}

.todo-list {
  list-style: none;
  padding: 0;
}
</style>
