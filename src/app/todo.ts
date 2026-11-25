import { Injectable, signal } from '@angular/core';

export interface TodoItemData {
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({ providedIn: 'root' })
export class Todo {
  private readonly todos = signal<TodoItemData[]>([
    { id: 1, title: 'Aprender CI', completed: true },
    { id: 2, title: 'Desplegar con GitHub Actions', completed: false },
  ]);

  readonly items = this.todos.asReadonly();

  add(title: string): void {
    const cleanTitle = title.trim();
    if (!cleanTitle) {
      return;
    }
    this.todos.update((items) => [
      ...items,
      { id: Math.max(0, ...items.map((item) => item.id)) + 1, title: cleanTitle, completed: false },
    ]);
  }

  toggle(id: number): void {
    this.todos.update((items) =>
      items.map((item) => item.id === id ? { ...item, completed: !item.completed } : item),
    );
  }

  remove(id: number): void {
    this.todos.update((items) => items.filter((item) => item.id !== id));
  }
}
