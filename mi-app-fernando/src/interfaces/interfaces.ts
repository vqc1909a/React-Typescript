export interface Todo {
  id: string,
  desc: string,
  completed: boolean
}

export interface TodoState {
  todosCount: number,
  todos: Todo[],
  completed: number,
  pending: number
}