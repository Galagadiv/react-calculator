import React, {useState} from "react";
import "./Display.css";

function Display({value}) {
	return (
		<div className="valBar">
			<p className="valText">{value}</p>
		</div>
	);
}

export default Display;
