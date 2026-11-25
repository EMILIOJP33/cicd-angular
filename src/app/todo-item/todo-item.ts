import { Component, input, output } from '@angular/core';
import { TodoItemData } from '../todo';

@Component({
  imports: [],
  selector: 'app-todo-item',
  styleUrl: './todo-item.css',
  templateUrl: './todo-item.html',
})
export class TodoItem {
  readonly item = input.required<TodoItemData>();
  readonly toggle = output<void>();
  readonly remove = output<void>();
}
