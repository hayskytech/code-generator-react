import './CodeGen.scss'
import React, { useState } from 'react'
import { HtmlInput, HtmlSelect, HtmlRadio, FormatHtml } from './Html';
import { Large, Small } from './ChangeCase';
import InputForm from '../react/InputForm';

const td_hide = ['submit', 'checkbox', 'hidden', 'button', 'reset']
const dropdown = ['select', 'radio']
export default function CodeGen() {

	function change_page(e) {
		const element = e.target
		document.querySelectorAll('.second_menu .item').forEach(b => {
			b.classList.remove('active')
		});
		element.classList.add("active")
		setPage(element.innerHTML)
	}
	const submenu = ['HTML Form']
	const [page, setPage] = useState('HTML Form')

	const [htmlCode, setHtmlCode] = React.useState('');

	var [list, setList] = React.useState([
		{
			key: 1,
			type: "text",
			ans: "first_name",
			name: 'First Name',
			slug: 'first_name',
			index: 0
		}]);

	const updateCode = () => {
		setTimeout(() => {
			const targetElem = document.getElementById('out');
			if (targetElem) {
				setHtmlCode(FormatHtml(targetElem.innerHTML));
			}
		}, 200);
	}
	updateCode()
	
	function change_page(e) {
		const element = e.target
		document.querySelectorAll('.second_menu .item').forEach(b => {
			b.classList.remove('active')
		});
		element.classList.add("active")
		setPage(element.innerHTML)
	}

	function handleSubmit(e) {
		e.preventDefault()
	}
	const [formData, setFormData] = useState({ "a0": { "value": "" } })

	return (
		<div className="container-xxl">
			<div className="row py-3">
				<div className="container">
					<header className="d-flex justify-content-center py-3 second_menu">
						<ul className="nav nav-pills">
							{submenu.map((item, index) => (
								<li key={index} className="nav-item mx-1" onClick={change_page}>
									<button className="nav-link item">{item}</button>
								</li>
							))}
						</ul>
					</header>
				</div>
				<div className="col-3" id="sticky-sidebar">
					<div className="sticky-top">
						<div className="lhs0">
							<div className="content">

								<form onSubmit={handleSubmit}>
									<InputForm setFormData={setFormData} formData={formData} />
								</form>

							</div>
						</div>
					</div>
				</div>
				<div className="col-9 order-2" id="main">

					{page === 'HTML Form' && <div className="rhs">
						<h3>Preview</h3>
						<div id="out">
							<form>
								<table>
									<tbody>
										{Object.values(formData).map((i, index) => {
											const item = {
												type: i.type ? i.type : 'text',
												value: i.value,
												name: Large(i.value),
												slug: Small(i.value)
											}
											console.log(td_hide.includes(item.type));
											return (
												<tr key={index}>
													<td>{td_hide.includes(item.type) ? '' : item.name}</td>
													<td>
														{!dropdown.includes(item.type) && <HtmlInput item={item} />}
														{item.type === 'select' && <HtmlSelect item={item} />}
														{item.type === 'radio' && <HtmlRadio item={item} />}
													</td>
												</tr>
											)
										})}
									</tbody>
								</table>
							</form>
						</div>
					</div>}
					<hr />

					{Boolean(list.length) && page === 'HTML Form' && (
						<pre>{htmlCode.substring(0, htmlCode.length - 2)}</pre>
					)}


				</div>
			</div>
		</div>

	)
}
