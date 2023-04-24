import React from 'react'
import { useState } from 'react'

export default function Textform() {
	const [text, setText] = useState('Enter text')
	const handleUpClick = () => {
		let newText = text.toUpperCase();
		setText(newText)
	}
	const handleLowClick = () => {
		let newText = text.toLowerCase();
		setText(newText)
	}
	const handleClearClick = () => {
		setText('')
	}
	const handleOnChange = (event) => {
		setText(event.target.value)
	}
	return (
		<div className="container ym-6">
			<h1>TextUtlis</h1>
			<div className="mb-3">
				<label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
				<textarea className="form-control" value={text}
					onChange={handleOnChange} id="exampleFormControlTextarea1" rows="3"></textarea>
			</div>
			<button className="btn btn-primary mx-1" onClick={handleUpClick}>Change to Upper</button>
			<button onClick={handleLowClick} className="btn btn-primary mx-1">Change to Lower</button>
			<button className='btn btn-secondary mx-1' onClick={handleClearClick}>Clear Text</button>
			<hr />
			<h3>Summary: {text.length} characters</h3>
		</div>
	)
}