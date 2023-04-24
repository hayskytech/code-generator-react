
import './CodeGen.scss'
import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
export default function CodeGen() {

	var [list, setList] = React.useState([{ id: 1, type: "text", ans: "first_name", index: 0 }]);
	const [htmlCode, setHtmlCode] = React.useState('');


	const handleAdd = () => {
		var l = list.length
		const newList = list.concat({ id: uuidv4(), ans: "field_name", type: "text", index: l });
		setList(newList);
		updateCode()
	}
	const updateCode = () => {
		setTimeout(() => {
			const targetElem = document.getElementById('out');
			if (targetElem) {
				setHtmlCode(format(targetElem.innerHTML));
			}
		}, 200);
	}
	const handleInputChange = (event) => {
		const x = event.target.id
		var newList = JSON.parse(JSON.stringify(list))
		newList[x].ans = event.target.value;
		setList(newList)
		updateCode()
	}
	updateCode()
	const handleTypeChange = (event) => {
		const x = event.target.id
		var newList = JSON.parse(JSON.stringify(list))
		newList[x].type = event.target.value;
		setList(newList)
		updateCode()
	}
	function small(x) {
		x = x.replace(" ", "_");
		x = x.toLowerCase()
		return x
	}
	function format(html) {
		var tab = '\t';
		var result = '';
		var indent = '';

		html.split(/>\s*</).forEach(function (element) {
			if (element.match(/^\/\w/)) {
				indent = indent.substring(tab.length);
			}

			result += indent + '<' + element + '>\r\n';

			if (element.match(/^<?\w[^>]*[^\/]$/) && !element.startsWith("input")) {
				indent += tab;
			}
		});
		return result.substring(1, result.length - 1);
	}
	return (
		<div className="container">
			<h2>HTML Form Generator using React</h2>
			<div className="lhs">
				<div className="content">
					<button id="add-row" autoFocus onClick={handleAdd}>Add row</button>
					<table id="main-form">
						<tbody>
							{list.map((item) => (
								<tr key={item.id}>
									<td>
										<select onChange={handleTypeChange} value={item.type} id={item.index}>
											<option value="text">text</option>
											<option value="date">date</option>
											<option value="datetime-local">datetime-local</option>
											<option value="email">email</option>
											<option value="number">number</option>
											<option value="range">range</option>
											<option value="radio">radio</option>
											<option value="password">password</option>
											<option value="submit">submit</option>
											<option value="file">file</option>
											<option value="button">button</option>
											<option value="checkbox">checkbox</option>
											<option value="color">color</option>
											<option value="hidden">hidden</option>
											<option value="image">image</option>
											<option value="month">month</option>
											<option value="reset">reset</option>
											<option value="search">search</option>
											<option value="tel">tel</option>
											<option value="time">time</option>
											<option value="url">url</option>
											<option value="week">week</option>
										</select>
									</td>
									<td>
										<input id={item.index} type="text" value={item.ans} onChange={handleInputChange} />
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
			<div className="rhs">
				<h3>Preview</h3>
				<div id="out">
					<form>
						<table>
							<tbody>
								{list.map((item) => (
									<tr key={item.id}>
										<td>{item.ans}</td>
										<td>
											<input type={item.type} name={small(item.ans)} />
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</form>
				</div>
			</div>

			{htmlCode && (
				<>
					<hr />
					<pre id='code'>{htmlCode}</pre>
				</>
			)}
		</div>
	)
}
