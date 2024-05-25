import {Todo, TodoState} from "../interfaces/interfaces";
import {TodoContext} from "./TodoContext";
import { useReducer } from 'react';
import { todoReducer } from "./todoReducer";

interface TodoProviderProps {
	(props: {children: React.ReactNode}): JSX.Element;
}

const INITIAL_STATE: TodoState = {
	todosCount: 2,
	todos: [
		{
			id: "1",
			desc: "Todo 1",
			completed: false,
		},
		{
			id: "2",
			desc: "Todo 2",
			completed: false,
		},
	],
	completed: 0,
	pending: 2,
};

export const TodoProvider: TodoProviderProps = ({children}) => {
	const [todoState, dispatch] = useReducer(todoReducer, INITIAL_STATE);

	const toggleTodo = (id: string) => {
		dispatch({ type: "toggle", payload: { id } })
	}

	const deleteTodo = (id: string) => {
		dispatch({ type: "delete", payload: { id } })
	}

	const addTodo = (todo: Todo) => {
		dispatch({ type: "add", payload: todo })
	} 

	return (
		<TodoContext.Provider value={{todoState, toggleTodo, deleteTodo, addTodo}}>
			{children}
		</TodoContext.Provider>
	);
};
