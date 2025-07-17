import {FC, useEffect, useState} from "react";
interface TimerProps {
  milisegundos: number;
}
export const Timer: FC<TimerProps> = ({milisegundos}) => {
	const [segundos, setSegundos] = useState(0);

	useEffect(() => {
		const interval: number = setInterval(
			() => setSegundos((s) => s + 1),
			milisegundos
		);

		//It's executed both when the component unmounts and before the effect re-runs because milisegundos changed.
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
