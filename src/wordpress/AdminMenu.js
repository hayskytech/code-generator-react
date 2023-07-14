import React from 'react'
import { Small } from '../components/ChangeCase';

function AdminMenu(props) {
	const name = props.item.name
	const slug = props.item.slug

	let arr = props.item.ans.split(',')
	const name1 = Small(arr[0])
	arr.splice(0, 1)
	let res = []
	for (let i = 0; i < arr.length; i++) {
		res.push(`
	add_submenu_page('${arr[i]}','${arr[i]}','manage_options', '${name1}_admin', '${arr[i]}_cox', 'dashicons-admin-users','2');
	function ${arr[i]}_cox(){ include '${arr[i]}.php'; }
	`)
	}

	return (
		<div>
			{Boolean(name) && `	add_menu_page('${name1}','${name1}','manage_options', '${slug}_admin', '${slug}_cox', 'dashicons-admin-users','2');
	function ${slug}_cox(){ include '${slug}.php'; }
	`}

			{res}

		</div>
	)
}

export default AdminMenu
