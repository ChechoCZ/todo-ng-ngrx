import { Action } from '@ngrx/store';

export const todos = [];
let id = 0;

export function todosReducer(state = todos, action: Action) {
  switch (action.type) {
    case 'ADD_TODO':
      state = [ ...state, { id: id++, description: action.payload.description, completed: false }];
      return state;
    case 'COMPLETE_TODO':
      state = state.map(todo => todo.id === action.payload ? { ...todo, completed:true } : todo);
      return state;
    default:
      return state;
  }
}
