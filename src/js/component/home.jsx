import React, { useState, useEffect } from "react";
import ListaTarea from "./listaTarea.jsx";

const Home = () => {
	const [task, setTask] = useState("");
	const [list, setList] = useState([]);

	let todo = list.length;
	if (todo === 0) {
		todo = "No tasks, add a task";
	} else {
		todo = list.length + " " + "Items left";
	}

	const handleKeyDown = (event) => {
		if (event.key === "Enter") {
			setList([...list, { label: task, done: false }]);
			setTask("");
		}
	};

	//Get Fetch
	useEffect(() => {
		fetchTask();
	}, []);

	const fetchTask = async () => {
		const response = await fetch(
			"https://assets.breatheco.de/apis/fake/todos/user/sergi",
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
		//Transforma de JSON a objeto
		const tasks = await response.json();
		setList(tasks);
	};

	//Put Fetch
	useEffect(() => {
		fetchLista();
	}, [list]);

	const fetchLista = async () => {
		const resp = await fetch(
			"https://assets.breatheco.de/apis/fake/todos/user/sergi",
			{
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				//Transforma de objeto a JSON
				body: JSON.stringify(list),
			}
		);
	};

	return (
		<div className="back">
			<div className="container">
				<h1 className="row mx-auto">TODOS</h1>
				<div className="d-table-row mx-auto">
					<input
						className="shadow bas"
						id="tasks"
						value={task}
						onKeyDown={handleKeyDown}
						onChange={(e) => {
							setTask(e.target.value);
						}}
					/>
					<ListaTarea
						list={list}
						removeTask={(a) =>
							setList(list.filter((e, i) => i != a))
						}
					/>
					<div className="shadow basic counter border border-seconday ps-2">
						{todo}
					</div>
					<div className="shadow basic1 counter border border-dark mx-auto"></div>
					<div className="shadow basic2 counter border border-seconday mx-auto"></div>
					<div className="shadow basic3 counter border border-seconday mx-auto"></div>
				</div>
			</div>
		</div>
	);
};

export default Home;
