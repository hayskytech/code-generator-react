import React from 'react'
import { Small } from './ChangeCase'
import { v4 as uuidv4 } from 'uuid';
const show_val = ['submit', 'hidden', 'button', 'reset']
const show_beside = ['checkbox']

export function HtmlInput(props) {
	return (
		<>
			<input type={props.item.type}
				name={props.item.slug}
				value={show_val.includes(props.item.type) ? props.item.name : ''}
				onChange={() => { }} />
			{show_beside.includes(props.item.type) ? ' ' + props.item.name : ''}
		</>
	)
}
export function HtmlSelect(props) {
	var values = props.item.ans.split(',')
	const name = values[0]
	values.splice(0, 1)
	return (
		<select name={Small(name)}>
			{values.map((item) => (
				<option value={item} key={uuidv4()}>{item}</option>
			))}
		</select>
	)
}
export function HtmlRadio(props) {
	var values = props.item.ans.split(',')
	const name = values[0]
	values.splice(0, 1)
	return (
		<>
			{values.map((item) => (
				<span key={uuidv4()}>
					<input type="radio" name={Small(name)} value={item} onChange={() => { }} /> {item} <br />
				</span>
			))}
		</>
	)
}
export function FormatHtml(html) {
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