import React, { useState } from 'react'
import HtmlInputs from '../components/HtmlInputs';

export default function InputForm(p) {

	const [rows, setRows] = useState(1)
	const handleAdd = () => {
		setRows((prev) => (prev + 1))
		p.setFormData((prevData) => ({
			...prevData,
			['a' + rows]: { value: "" },
		}));
		setTimeout(() => {
			const table = document.getElementById("main-form");
			const lastInput = table.rows[table.rows.length - 1].cells[1].childNodes[0];
			lastInput.value = ''
			lastInput.focus();
		}, 200);
	}

	function removeRow(e) {
		const a = e.target.getAttribute('data')
		const prev = { ...p.formData }
		delete prev[a]
		p.setFormData(prev)
	}

	function handleInputChange(e) {
		const { name, value } = e.target;
		let prev = { ...p.formData }
		prev[name].value = value
		p.setFormData(prev)
	}

	function handleTypeChange(e) {
		const { name, value } = e.target;
		let prev = { ...p.formData }
		prev[name].type = value
		p.setFormData(prev)
	}
	return (
		<div>
			<button id="add-row" type='button' onClick={handleAdd}>Add row</button>
			<table id='main-form'>
				<tbody>
					{Object.keys(p.formData).map((item, index) => (
						<tr key={item}>
							<td>
								<select name={item} onChange={handleTypeChange}
									value={p.formData[item] ? p.formData[item].type : 'text'}>
									<option value="text">text</option>
									<HtmlInputs/>
								</select>
							</td>
							<td>
								<input name={item} type="text"
									value={p.formData[item] ? p.formData[item].value : ''}
									placeholder='write here...'
									onChange={handleInputChange} />
								<span className='removeIcon'>
									<svg
										data={item}
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
	)
}
