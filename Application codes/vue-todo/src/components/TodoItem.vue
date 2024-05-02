<template>
  <div :class="{ 'todo-item': true, completed: todo.completed }">
    <input type="checkbox" v-model="todo.completed" @change="toggleTodo" />
    <span class="todo-text">{{ todo.text }}</span>
    <button class="delete-btn" @click="deleteTodo">✖</button>
  </div>
</template>

<script>
export default {
  props: {
    todo: Object,
  },
  methods: {
    toggleTodo() {
      this.$emit("onToggle");
    },
    deleteTodo() {
      this.$emit("onDelete", this.todo.id);
    },
  },
};
</script>

<style scoped>
.todo-item {
  display: flex;
  align-items: center;
  padding: 15px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 15px;
}

.todo-item.completed .todo-text {
  text-decoration: line-through;
  font-style: italic;
}

.todo-text {
  flex-grow: 1;
  color: #646681;
  font-weight: 500;
  font-size: 19px;
}

.delete-btn {
  border: 1px solid #dfdfe9;
  background: #fdfdfd;
  color: #b8b8c2;
  padding: 6px 11px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s;
}

input[type="checkbox"] {
  -webkit-appearance: none;
  appearance: none;
  width: 21px;
  height: 21px;
  border-radius: 3px;
  margin-right: 13px;
  border: 1px solid #dfdfe9;
  background: #fdfdfd;
  outline: none;
  cursor: pointer;
}

input:checked {
  background-color: #6370f0;
  position: relative;
}

input:checked::before {
  content: "✓";
  font-size: 15px;
  color: #fff;
  position: absolute;
  right: 3.5px;
}
</style>
