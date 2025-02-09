import { useState } from 'react'
import './TodoList.css';
import { TasksType } from "./App"

export function TodoList( { title, tasks }: any) {

	


	const [text, setText] = useState('')


	function inputHandler(event: any) {
		setText(event.currentTarget.value)
	}

	function onClickHandler() {
		console.log(text)
	}

	const [filter, setfilter] = useState('all')

	function onClickFilterHandler(value: any) {
		setfilter(value)
	}

	function onChangeHandler(value: any) {
		console.log(value.currentTarget.checked)
	}
	

	return (
		<div>
			<h3>{title}</h3>
			<div>
				<input onChange={(event) => inputHandler(event)} />
				<button onClick={onClickHandler}>+</button>
			</div>
			<ul>

				{tasks.map((task: TasksType) => {

					return (
						<li key={task.id}>
							<input onChange={(event) => onChangeHandler(event)} type="checkbox" checked={task.isDone} />
							<span>{task.title}</span>
						</li>
					)
				})}



			</ul>
			<div>
				<button className={filter === "all" ? "active": ""} onClick={() => onClickFilterHandler("all")}>All</button>
				<button className={filter === "active" ? "active": ""} onClick={() => onClickFilterHandler("active")}>Active</button>
				<button className={filter === "completed" ? "active": ""} onClick={() => onClickFilterHandler("completed")}>Completed</button>
			</div>
		</div>

	)
}