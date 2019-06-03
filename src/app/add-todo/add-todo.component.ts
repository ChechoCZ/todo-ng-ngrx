import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

interface AppState {
  todos: [];
}

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  addTodo(todo) {
    this.store.dispatch({ type: 'ADD_TODO', payload: todo });
  }

}
