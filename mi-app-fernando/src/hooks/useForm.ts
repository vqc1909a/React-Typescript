import { useState } from "react";

export const useForm = <T>(initialForm: T) => {
	const [formState, setFormState] = useState(initialForm);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const {name, value} = e.target;
		setFormState((state) => ({
			...state,
			[name]: value,
		}));
	};

	const handleResetForm = () => {
		setFormState(initialForm);
	};

	return {
		formState,
		...formState,
		handleInputChange,
		handleResetForm,
	};
};
