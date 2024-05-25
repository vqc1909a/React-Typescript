import { createContext } from "react";
import { Todo, TodoState } from "../interfaces/interfaces";

export interface TodoContextProps {
  todoState: TodoState,
  toggleTodo: (id: string) => void,
  deleteTodo: (id: string) => void,
  addTodo: (todo: Todo) => void
}

//the object is the data that we want to share with the components
export const TodoContext = createContext<TodoContextProps>({} as TodoContextProps);