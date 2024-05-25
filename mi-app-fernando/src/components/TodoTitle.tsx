import { useTodos } from "../hooks/useTodos";

export const TodoTitle = () => {
  const { pending } = useTodos();
  return <h1>Todo: {pending}</h1>;
}
