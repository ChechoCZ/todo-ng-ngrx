import { Component, OnInit, Input } from '@angular/core';

import { Store } from '@ngrx/store';

interface AppState {
  todos: [];
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input() todo: object = {};

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  completeTodo(todo) {
    this.store.dispatch({ type: 'COMPLETE_TODO', payload: todo });
  }

}
