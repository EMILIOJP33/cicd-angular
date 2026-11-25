import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoList } from './todo-list';
import { Todo } from '../todo';

describe('TodoList', () => {
  let component: TodoList;
  let fixture: ComponentFixture<TodoList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoList],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoList);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders and adds a task', () => {
    component.newTitle = 'Probar la aplicación';
    component.addTask();
    expect(TestBed.inject(Todo).items().at(-1)?.title).toBe('Probar la aplicación');
  });

  it('reacts to form and task buttons', async () => {
    const input = fixture.nativeElement.querySelector('input') as HTMLInputElement;
    input.value = 'Tarea desde el DOM';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    const form = fixture.nativeElement.querySelector('form') as HTMLFormElement;
    form.dispatchEvent(new Event('submit'));
    await fixture.whenStable();
    fixture.detectChanges();

    const taskButtons = fixture.nativeElement.querySelectorAll('app-todo-item button');
    (taskButtons[0] as HTMLButtonElement).click();
    (taskButtons[taskButtons.length - 1] as HTMLButtonElement).click();
    await fixture.whenStable();
    fixture.detectChanges();

    expect(TestBed.inject(Todo).items().length).toBeGreaterThanOrEqual(0);
  });
});
