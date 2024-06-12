import {Todo, TodoState} from "../interfaces/interfaces";

type TodoAction =
	| {type: "add"; payload: Todo}
	| {type: "delete"; payload: {id: string}}
	| {type: "toggle"; payload: {id: string}};

export const todoReducer = (state: TodoState, action: TodoAction) => {
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
				todos: state.todos.filter(
					(todo) => todo.id.toString() !== action.payload.id.toString()
				),
				pending: state.pending - 1,
				completed: state.completed - 1,
			};
		case "toggle":
			return {
				...state,
				todos: state.todos.map((todo) =>
					todo.id.toString() === action.payload.id.toString()
						? {...todo, completed: !todo.completed}
						: todo
				),
				pending:
					state.pending +
					(state.todos.find(
						(todo) => todo.id.toString() === action.payload.id.toString()
					)?.completed
						? 1
						: -1),
				completed:
					state.completed +
					(state.todos.find(
						(todo) => todo.id.toString() === action.payload.id.toString()
					)?.completed
						? -1
						: 1),
			};
		default:
			return state;
	}
};
