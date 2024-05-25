import {Todo, TodoState} from "../interfaces/interfaces";

type TodoAction =
	| {type: "add"; payload: Todo}
	| {type: "delete"; payload: {id: string}}
	| {type: "toggle"; payload: {id: string}};

interface TodoReducerProps {
	(state: TodoState, action: TodoAction): TodoState;
}

export const todoReducer: TodoReducerProps = (state, action) => {
	switch (action.type) {
		case "add":
			return {
				...state,
        todos: [...state.todos, action.payload],
				pending: state.pending + 1,
				completed: state.completed,
			};
		case "delete":
			return {
				...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
				pending: state.pending - 1,
				completed: state.completed - 1,
			};
		case "toggle":
			return {
				...state,
        todos: state.todos.map((todo) => todo.id === action.payload.id ? {...todo, completed: !todo.completed} : todo),
				pending: state.pending + (state.todos.find((todo) => todo.id === action.payload.id)?.completed ? 1 : -1),
				completed: state.completed + (state.todos.find((todo) => todo.id === action.payload.id)?.completed ? -1 : 1),
			};
		default:
			return state;
	}
};
