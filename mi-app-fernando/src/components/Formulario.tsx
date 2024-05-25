import { useForm } from "../hooks/useForm";

interface FormData {
  email: string;
  nombre: string;
  edad: number;
}
export const Formulario = () => {

  const {formState: formulario, handleInputChange, email, nombre, edad} = useForm<FormData>({
		email: "vqc1909a@gmail.com",
		nombre: "vqc1909a",
    edad: 30
	});
  return (
		<form autoComplete="off">
			<div className="mb-3">
				<label htmlFor="email" className="form-label">
					Email:
				</label>
				<input
					type="email"
					className="form-control"
					name="email"
					value={email}
					onChange={handleInputChange}
				/>
			</div>
			<div className="mb-3">
				<label htmlFor="nombre" className="form-label">
					Nombre:
				</label>
				<input
					type="text"
					className="form-control"
					name="nombre"
					value={nombre}
					onChange={handleInputChange}
				/>
			</div>
			<div className="mb-3">
				<label htmlFor="edad" className="form-label">
					Edad:
				</label>
				<input
					type="text"
					className="form-control"
					name="edad"
					value={edad}
					onChange={handleInputChange}
				/>
			</div>
			<pre>{JSON.stringify(formulario)}</pre>
		</form>
	);
}
