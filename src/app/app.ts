import { Component, signal } from '@angular/core';
import { TodoList } from './todo-list/todo-list';

@Component({
  imports: [TodoList],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  readonly title = signal('CI/CD Angular');

  readonly compilationError = missingCompilationVariable;
}
