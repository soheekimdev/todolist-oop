'use strict';

import { TodoList } from '../components/TodoList.js';

const newTodoInput = document.getElementById('newTodoInput');
const addTodoBtn = document.getElementById('addTodoBtn');

// ToDo 목록 관리 객체 생성
const todoList = new TodoList();

addTodoBtn.addEventListener('click', () => {
  const newTodoText = newTodoInput.value.trim();
  if (newTodoText) {
    todoList.addTodo(newTodoText);
    newTodoInput.value = '';
  }
});

// ToDo 목록을 렌더링
todoList.render();
