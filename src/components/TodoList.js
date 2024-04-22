'use strict';

import { TodoItem } from './TodoItem.js';

class TodoList {
  constructor() {
    this.todoList = [];
    this.todoListElement = document.createElement('ul');
  }

  addTodo(text) {
    const newTodoItem = new TodoItem(text);
    this.todoList.push(newTodoItem);
    this.render();
  }

  removeTodo(todoItem) {
    this.todoList = this.todoList.filter((item) => item !== todoItem);
    this.render();
  }

  render() {
    // 기존 인풋 내용 삭제
    this.todoListElement.innerHTML = '';

    // 모든 Todo 항목을 DOM 요소로 변환하여 목록에 추가
    this.todoList.forEach((todoItem) => {
      const todoItemElement = todoItem.render();
      todoItemElement
        .querySelector('.delete-btn')
        .addEventListener('click', () => {
          this.removeTodo(todoItem);
        });
      this.todoListElement.appendChild(todoItemElement);
    });

    // 목록을 렌더링할 때마다 기존 목록을 대체
    const todoListContainer = document.getElementById('todoListContainer');
    todoListContainer.innerHTML = '';
    todoListContainer.appendChild(this.todoListElement);
  }
}

export { TodoList };
