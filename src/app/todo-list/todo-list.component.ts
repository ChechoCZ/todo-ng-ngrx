import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

interface AppState {
  todos: [];
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos$: Observable<any[]>

  constructor(private store: Store<AppState>) {
    this.todos$ = this.store.select('todos');
  }

  ngOnInit() {}

}
