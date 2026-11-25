import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../todo';
import { TodoItem } from '../todo-item/todo-item';

@Component({
  imports: [FormsModule, TodoItem],
  selector: 'app-todo-list',
  styleUrl: './todo-list.css',
  templateUrl: './todo-list.html',
})
export class TodoList {
  readonly todo = inject(Todo);
  newTitle = '';

  addTask(): void {
    this.todo.add(this.newTitle);
    this.newTitle = '';
  }
}
