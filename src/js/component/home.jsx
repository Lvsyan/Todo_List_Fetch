import React, { useState, useEffect } from "react";

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
		const tasks = await response.json();

		console.log(tasks);
	};

	//Put Fetch
	useEffect(() => {
		fetchLista();
	}, []);

	const fetchLista = async () => {
		const resp = await fetch("https://github.com/Lvsyan/Todo_List_Fetch", {
			method: "PUT",
		});
		const tas = await resp.json();
		console.log(tas);
	};

	const handleMouseOver = () => {
		setDisplay(true);
	};

	const handleMouseOut = () => {
		setDisplay(false);
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
					{list.map((items, index) => {
						return (
							<div key={index} className="d-flex tasks">
								<div
									className="shadow bas task border border-secondary ps-5"
									onMouseOver={handleMouseOver}
									onMouseOut={handleMouseOut}>
									{items.label}
									<button
										onClick={() => {
											setList(
												list.filter(
													(f, k) => k != index
												)
											);
											console.log(list);
										}}
										className="button">
										X
									</button>
								</div>
							</div>
						);
					})}
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
