import React from "react";
import PropTypes from "prop-types";
import Tarea from "./tarea.jsx";

const ListaTarea = (props) => {
	return (
		<div>
			{props.list
				? props.list.map((task, index) => (
						<Tarea
							key={index}
							tasks={task}
							removeTask={() => props.removeTask(index)}></Tarea>
				  ))
				: null}
		</div>
	);
};

ListaTarea.propTypes = {
	list: PropTypes.array,
	removeTask: PropTypes.func,
};

export default ListaTarea;
