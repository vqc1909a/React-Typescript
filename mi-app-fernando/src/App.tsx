import ContadorRed from "./components/CounterReducer";
import {Counter} from "./components/Counter";
import {TimerPadre} from "./components/TimerPadre";
import {Usuario} from "./components/Usuario";
import { Formulario } from "./components/Formulario";
import { Todo } from "./components/Todo";

function App() {
	return (
		<>
			<h1>React + Typescript</h1>
			<hr />
			<h2>useState</h2>
			<Counter />
			<Usuario />
			<hr />
			<h2>useEffect - useRef</h2>
			<TimerPadre />
			<hr />
			<h2>useReducer</h2>
			<ContadorRed />
			<hr />
			<h2>CustomHooks</h2>
			<Formulario />
			<hr />
			<h2>useContext & createContext & ContextProvider</h2>
			<Todo />

		</>
	);
}

export default App;
