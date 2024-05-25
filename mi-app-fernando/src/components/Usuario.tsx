import {useState} from "react";

interface User {
	uid: string;
	name: string;
}
const USER_DEFAULT: User = {
	uid: "ABC567",
	name: "Fernando",
};
export const Usuario = () => {
	const [user, setUser] = useState<User>(USER_DEFAULT);

	const login = () => {
		setUser({
			uid: "ABC123",
			name: "Fernando Herrera",
		});
	};
	return (
		<div className="mt-5">
			<h3>Usuario: useState</h3>
			<button className="btn btn-outline-primary" onClick={login}>
				Login
			</button>
			{!user ? <pre>No hay usuario</pre> : <pre>{JSON.stringify(user)}</pre>}
		</div>
	);
};
