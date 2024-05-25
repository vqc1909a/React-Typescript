import {FC, useEffect, useState} from "react";


interface TimerProps {
  milisegundos: number;
}
export const Timer: FC<TimerProps> = ({milisegundos}) => {
	const [segundos, setSegundos] = useState(0);

	useEffect(() => {
		const interval: number = setInterval(() => setSegundos((s) => s + 1), milisegundos);

		//It is executed when the component is unmounted or when the milisegundos value changes
		return () => {
			interval && clearInterval(interval);
		};
	}, [milisegundos]);

	return (
		<div>
			<h4>
				Timer: <small>{segundos}</small>
			</h4>
		</div>
	);
};
