import React from "react";
import PropTypes from "prop-types";
import Button from "./common/Buttons";

function ButtonPanel({handleClick}) {
	return (
		<div className="component-button-panel">
			<div>
				<Button name="AC" clickHandler={handleClick} />
				<Button name="+/-" clickHandler={handleClick} />
				<Button name="%" clickHandler={handleClick} />
				<Button name="÷" clickHandler={handleClick} orange />
			</div>
			<div>
				<Button name="7" clickHandler={handleClick} />
				<Button name="8" clickHandler={handleClick} />
				<Button name="9" clickHandler={handleClick} />
				<Button name="x" clickHandler={handleClick} orange />
			</div>
			<div>
				<Button name="4" clickHandler={handleClick} />
				<Button name="5" clickHandler={handleClick} />
				<Button name="6" clickHandler={handleClick} />
				<Button name="-" clickHandler={handleClick} orange />
			</div>
			<div>
				<Button name="1" clickHandler={handleClick} />
				<Button name="2" clickHandler={handleClick} />
				<Button name="3" clickHandler={handleClick} />
				<Button name="+" clickHandler={handleClick} orange />
			</div>
			<div>
				<Button name="0" clickHandler={handleClick} wide />
				<Button name="." clickHandler={handleClick} />
				<Button name="=" clickHandler={handleClick} orange />
			</div>
		</div>
	);
}

ButtonPanel.propTypes = {
	handleClick: PropTypes.func.isRequired,
};

export default ButtonPanel;
