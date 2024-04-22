'use strict';

class TodoItem {
  constructor(text) {
    this.id = Math.random().toString(36).substring(2, 9); // 고유 ID 생성
    this.text = text;
    this.isCompleted = false;
  }

  toggleCompleted() {
    this.isCompleted = !this.isCompleted;
  }

  createCheckbox() {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = this.isCompleted;
    checkbox.classList.add('checkbox');
    checkbox.addEventListener('change', () => {
      this.toggleCompleted();
    });
    return checkbox;
  }

  createTaskActions() {
    const taskActions = document.createElement('div');
    taskActions.classList.add('task-actions');

    const editBtn = document.createElement('button');
    editBtn.classList.add('edit-btn');
    editBtn.textContent = '수정';
    editBtn.addEventListener('click', () => {
      console.log('수정 버튼 클릭됨');
    });
    taskActions.appendChild(editBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.textContent = '삭제';
    deleteBtn.addEventListener('click', (event) => {
      event.target.parentNode.parentNode.remove();
    });
    taskActions.appendChild(deleteBtn);

    return taskActions;
  }

  render() {
    const todoItem = document.createElement('li');
    todoItem.id = this.id;

    const checkbox = this.createCheckbox();
    todoItem.appendChild(checkbox);

    const textSpan = document.createElement('span');
    textSpan.textContent = this.text;
    todoItem.appendChild(textSpan);

    const taskActions = this.createTaskActions();
    todoItem.appendChild(taskActions);

    return todoItem;
  }
}

export { TodoItem };