import { TestBed } from '@angular/core/testing';
import { Todo } from './todo';

describe('Todo', () => {
  let service: Todo;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Todo);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('adds a task', () => {
    service.add('Crear la práctica');
    expect(service.items().at(-1)?.title).toBe('Crear la práctica');
  });

  it('ignores empty tasks and toggles and removes tasks', () => {
    service.add('   ');
    expect(service.items()).toHaveLength(2);
    service.toggle(1);
    expect(service.items()[0].completed).toBe(false);
    service.remove(2);
    expect(service.items().some((item) => item.id === 2)).toBe(false);
  });
});
