<script>
// @ts-nocheck

  import { onMount } from 'svelte';
  import { createEventDispatcher } from 'svelte';

  let todos = [];
  let newTodo = '';

  const dispatch = createEventDispatcher();

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      todos = [...todos, { id: Date.now(), text: newTodo, completed: false }];
      newTodo = '';
    }
  };

  const deleteTodo = (id) => {
    todos = todos.filter(todo => todo.id !== id);
  };

  onMount(() => {
    // You can add any initial data fetching or setup here
  });
</script>

<style>
  :global(body) {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f8f8ffbd;
  }

  :global(.App) {
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

  .add-todo input[type="text"] {
    flex-grow: 1;
    padding: 14px 13px;
    border: 2px solid #dfdfe9;
    border-radius: 5px;
    font-size: 16px;
    outline: 0;
  }

  .add-todo button {
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

  .add-todo button:hover {
    background-color: #4c5df6;
  }

  .todo-list {
    list-style: none;
    padding: 0;
  }

  .todo-item {
    display: flex;
    align-items: center;
    padding: 15px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 15px;
  }

  .todo-item input[type="checkbox"] {
    margin-right: 10px;
  }

  .todo-item .todo-text {
    flex-grow: 1;
    color: #646681;
    font-weight: 500;
    font-size: 19px;
  }

  .todo-item .delete-btn {
    border: 1px solid #dfdfe9;
    background: #fdfdfd;
    color: #b8b8c2;
    padding: 6px 11px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: all 0.3s;
  }

  .todo-item.completed .todo-text {
    text-decoration: line-through;
    font-style: italic;
  }

  input[type="checkbox"] {
    /* removing default appearance */
    -webkit-appearance: none;
    appearance: none;
    /* creating a custom design */
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

<div class="App">
  <main>
    <h1>TODO APP</h1>
    <div class="add-todo">
      <input
        type="text"
        bind:value={newTodo}
        placeholder="Add Task"
      />
      <button on:click={addTodo}>Add</button>
    </div>
    <div class="todo-list">
      {#each todos as todo (todo.id)}
        <div class="todo-item {todo.completed ? 'completed' : ''}">
          <input
            type="checkbox"
            bind:checked={todo.completed}
          />
          <span class="todo-text {todo.completed ? 'completed' : ''}">
            {todo.text}
          </span>
          <button
            class="delete-btn"
            on:click={() => deleteTodo(todo.id)}
          >
            ✖
          </button>
        </div>
      {/each}
    </div>
  </main>
</div>
