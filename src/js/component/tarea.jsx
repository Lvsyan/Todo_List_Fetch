import React, { useState } from "react";
import PropTypes from "prop-types";

const Tarea = (props) => {
	const [display, setDisplay] = useState();

	const handleMouseOver = () => {
		console.log("out");
		setDisplay(true);
	};

	const handleMouseOut = () => {
		console.log("in");
		setDisplay(false);
	};

	return (
		<div
			className="d-flex tasks"
			onMouseEnter={handleMouseOver}
			onMouseLeave={handleMouseOut}>
			<div className="shadow bas task border border-secondary ps-5">
				{props.tasks.label}
				{display ? (
					<button
						onClick={() => {
							props.removeTask();
						}}
						className="button">
						X
					</button>
				) : null}
			</div>
		</div>
	);
};

Tarea.propTypes = {
	tasks: PropTypes.string,
	removeTask: PropTypes.func,
};

export default Tarea;
