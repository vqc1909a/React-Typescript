import { useContext } from 'react'
import { TodoContext } from '../context/TodoContext';

export const useTodos = () => {
  const { addTodo, deleteTodo, todoState, toggleTodo } = useContext(TodoContext);
  const { todos, todosCount, completed, pending } = todoState;
  return {
    addTodo,
    deleteTodo,
    toggleTodo,
    todos,
    todosCount,
    completed,
    pending
  }
}
