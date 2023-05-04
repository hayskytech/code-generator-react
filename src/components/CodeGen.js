import './CodeGen.scss'
import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { HtmlInput, HtmlSelect, HtmlRadio, FormatHtml } from './Html';
import Cpt from '../wordpress/CustomPostType';
import { Large, Small } from './ChangeCase';
import { CustomTaxonomy } from '../wordpress/CustomTaxonomy';
import HtmlInputs from './HtmlInputs';
import RestApi from '../wordpress/RestApi';
import AdminMenu from '../wordpress/AdminMenu';

const td_hide = ['submit', 'checkbox', 'hidden', 'button', 'reset']
const dropdown = ['select', 'radio']
export default function CodeGen(props) {

	var [list, setList] = React.useState([
		{
			key: 1,
			type: "text",
			ans: "first_name",
			name: 'First Name',
			slug: 'first_name',
			index: 0
		}]);
	const [htmlCode, setHtmlCode] = React.useState('');

	const handleAdd = () => {
		var l = 0
		if (list.length > 0) {
			l = list[list.length - 1].index + 1
		}
		const newList = list.concat({ key: uuidv4(), ans: "", type: "text", index: l });
		setList(newList);
		updateCode()
		setTimeout(() => {
			const table = document.getElementById("main-form");
			const lastInput = table.rows[table.rows.length - 1].cells[1].childNodes[0];
			lastInput.value = ''
			lastInput.focus();
		}, 200);
	}
	const updateCode = () => {
		setTimeout(() => {
			const targetElem = document.getElementById('out');
			if (targetElem) {
				setHtmlCode(FormatHtml(targetElem.innerHTML));
			}
		}, 200);
	}
	function handleKeyPress(event) {
		if (event.key === 'Enter') {
			event.preventDefault();
			handleAdd()
		}
	}
	const handleInputChange = (event) => {
		const x = event.target.id
		var newList = JSON.parse(JSON.stringify(list))
		var i = 0;
		while (i < newList.length) {
			if (newList[i].index === parseInt(x)) {
				newList[i].ans = event.target.value;
				newList[i].name = Large(event.target.value);
				newList[i].slug = Small(event.target.value);
			}
			++i;
		}
		setList(newList)
		updateCode()
	}
	updateCode()
	const handleTypeChange = (event) => {
		const x = event.target.id
		var newList = JSON.parse(JSON.stringify(list))
		var i = 0;
		while (i < newList.length) {
			if (newList[i].index === parseInt(x)) {
				newList[i].type = event.target.value;
			}
			console.log(newList[i])
			++i;
		}
		setList(newList)
		updateCode()
	}
	function removeRow(event) {
		const a = event.target.id
		var newList = JSON.parse(JSON.stringify(list))
		var i = 0;
		while (i < newList.length) {
			if (newList[i].index === parseInt(a)) {
				newList.splice(i, 1);
			} else {
				++i;
			}
		}
		setList(newList)
		updateCode()
	}
	return (
		<div className="container-xxl">
			<div class="row py-3">
				<div class="col-3" id="sticky-sidebar">
					<div class="sticky-top">
						<div className="lhs0">
							<div className="content">
								<button id="add-row" autoFocus onClick={handleAdd}>Add row</button>
								<table id="main-form">
									<tbody>
										{list.map((item) => (
											<tr key={item.key}>
												<td>
													<select onChange={handleTypeChange} value={item.type} id={item.index}>
														<option value="text">text</option>
														<HtmlInputs />
													</select>
												</td>
												<td>
													<input id={item.index} type="text" value={item.ans}
														onChange={handleInputChange}
														onKeyDown={handleKeyPress}
													/>
													<span className='removeIcon'>
														<svg
															id={item.index}
															onClick={removeRow}
															xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash-circle" viewBox="0 0 16 16">
															<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
															<path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
														</svg>
													</span>
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
				<div class="col-9 order-2" id="main">

					{props.page === 'HTML Form' && <div className="rhs">
						<h3>Preview</h3>
						<div id="out">
							<form>
								<table>
									<tbody>
										{list.map((item) => (
											<tr key={item.key}>
												<td>{td_hide.includes(item.type) ? '' : item.name}</td>
												<td>
													{!dropdown.includes(item.type) && <HtmlInput item={item} />}
													{item.type === 'select' && <HtmlSelect item={item} />}
													{item.type === 'radio' && <HtmlRadio item={item} />}
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</form>
						</div>
					</div>}
					<hr />

					{Boolean(list.length) && props.page === 'HTML Form' && (
						<pre>{htmlCode.substring(0, htmlCode.length - 2)}</pre>
					)}

					{Boolean(list.length) && props.page === 'Custom Post Type' && (
						<pre>{list.map((item) => (<Cpt key={item.key} item={item} />))}</pre>
					)}

					{Boolean(list.length) && props.page === 'Custom Taxonomy' && <pre>
						{list.map((item) => (<CustomTaxonomy key={item.key} item={item} />))}
					</pre>}

					{Boolean(list.length) && props.page === 'Rest API' &&
						<div>
							<pre>{`<?php`}
								{list.map((item) => (<RestApi key={item.key} item={item} />))}
								{`?>`}</pre>
							<p>Note: After adding this code, please save permalinks once...</p>
						</div>}

					{Boolean(list.length) && props.page === 'Admin Menu' &&
						<div>
							<pre>{`<?php`}
								{list.map((item) => (<AdminMenu key={item.key} item={item} />))}
								{`?>`}</pre>
						</div>}

				</div>
			</div>
		</div>

	)
}
