import { useTodos } from "../hooks/useTodos";
import { Todo } from "../interfaces/interfaces"

interface TodoItemProps {
  (props: {todo: Todo}) : JSX.Element;
}

export const TodoItem: TodoItemProps = ({todo}) => {
  const { toggleTodo } = useTodos();
  return (
		<li
			style={{
				cursor: "pointer",
				textDecoration: todo.completed ? "line-through" : "",
			}}
			onDoubleClick={() => toggleTodo(todo.id)}
		>
			<span>{todo.desc}</span>
			<button>X</button>
		</li>
	);
};
