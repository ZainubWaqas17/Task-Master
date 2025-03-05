import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent, TodoItemComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  todos: { id: number; text: string; completed: boolean }[] = [];
  newTodo: string = '';

  addTodo() {
    if (this.newTodo.trim()) {
      this.todos.push({
        id: Date.now(),
        text: this.newTodo,
        completed: false,
      });
      this.newTodo = '';
    }
  }

  toggleTodo(todo: any) {
    console.log('Toggling todo:', todo);
    todo.completed = !todo.completed;
    console.log('Updated todo:', todo);

  }

  deleteTodo(todo: any) {
    this.todos = this.todos.filter((t) => t.id !== todo.id);
  }
  
}
