import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoItem } from './todo-item';

describe('TodoItem', () => {
  let component: TodoItem;
  let fixture: ComponentFixture<TodoItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoItem],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoItem);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('item', {
      id: 1,
      title: 'Tarea de prueba',
      completed: false,
    });
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders the task and emits actions', () => {
    let toggled = false;
    let removed = false;
    component.toggle.subscribe(() => { toggled = true; });
    component.remove.subscribe(() => { removed = true; });
    const buttons = fixture.nativeElement.querySelectorAll('button');

    buttons[0].click();
    buttons[1].click();

    expect(toggled).toBe(true);
    expect(removed).toBe(true);
    expect(fixture.nativeElement.textContent).toContain('Tarea de prueba');
  });
});
