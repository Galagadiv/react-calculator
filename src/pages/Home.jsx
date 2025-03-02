import React, {useState} from "react";
import "../assets/styles/App.css";
import Display from "../components/Display";
import ButtonPanel from "../components/ButtonPanel";
import calculate from "../logic/calculate";

export default function Home() {
	const [state, setState] = useState({
		total: null,
		next: null,
		operation: null,
	});

	const handleClick = (buttonName) => {
		setState((prevState) => calculate(prevState, buttonName));
	};

	return (
		<div className="field">
			<div className="calc">
				<Display value={state.next || state.total || "0"} />
				{/* Тут має бути clickHandler, а не handleClick */}
				<ButtonPanel handleClick={handleClick} />
			</div>
		</div>
	);
}
