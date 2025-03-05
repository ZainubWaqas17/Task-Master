import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  standalone: true,
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent {
  //This allows the parent component to pass a todo object (or any data) to the TodoItemComponent.
  @Input() todo: any;
  //These properties allow the TodoItemComponent to send custom events (delete or toggle) to its parent component.
  @Output() delete = new EventEmitter();
  @Output() toggle = new EventEmitter();

  handleAction(action: 'delete' | 'toggle') {
    if (action === 'delete') {
      this.delete.emit(this.todo);
    } else if (action === 'toggle') {
      console.log('Toggle event emitted:', this.todo);
      this.toggle.emit(this.todo);
    }
  }
}
