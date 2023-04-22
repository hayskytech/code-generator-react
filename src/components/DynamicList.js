import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react';
export default function DynamicList() {
	// const [list, setList] = React.useState([{ name: 'John' }]);
	const [list, setList] = React.useState([]);
	const [name, setName] = React.useState('');

	function handleChange(event) {
		setName(event.target.value);
	}
	function handleAdd() {
		const newList = list.concat({ name, id: uuidv4() });
		setList(newList);
		setName('')
		document.getElementById("MainInput").focus()
	}
	function handleKeyDown(e) {
		if (e.key === 'Enter') {
			handleAdd()
		}
	}
	return (
		<div>
			<div className="container my-2">
				<h2>Dynamic List</h2>
				<input type="text" id="MainInput" value={name} onChange={handleChange} onKeyDown={handleKeyDown} placeholder="write here" autoFocus />
				<button type="button" onClick={handleAdd}>Add</button>
				<ul>
					{list.map((item) => (
						<li key={item.id}>{item.name}</li>
					))}
				</ul>
			</div>
		</div>
	)
}
