import React from "react";
import PropTypes from "prop-types";
import "./Buttons.css";

const Button = ({name, orange, wide, clickHandler}) => {
	const handleClick = () => clickHandler(name);

	const className = ["buttons", orange ? "orange" : "", wide ? "wide" : ""]
		.join(" ")
		.trim();

	return (
		<button className={className} onClick={handleClick}>
			<p className="btnsText">{name}</p>
		</button>
	);
};

Button.propTypes = {
	name: PropTypes.string.isRequired,
	orange: PropTypes.bool,
	wide: PropTypes.bool,
	clickHandler: PropTypes.func.isRequired,
};

export default React.memo(Button);
