import React from 'react'
import { Small } from '../components/ChangeCase'

export default function AdminMenu(p) {
	const list = Object.values(p.formData)

	return (
		<div>
			<h2>WordPress Admin Menu</h2>
			<pre>{`<?php
add_action('admin_menu' , function(){`}
				{list.map((item) => {
					const name = item.value
					let arr = name.split(',')
					const name1 = Small(arr[0])
					arr.splice(0, 1)
					let res = []
					for (let i = 0; i < arr.length; i++) {
						if (arr[i]) {
							res.push(`
	add_submenu_page('${name1}_admin','${arr[i]}','${arr[i]}','manage_options', '${arr[i]}_cox', '${arr[i]}_cox');
	function ${arr[i]}_cox(){ include '${arr[i]}.php'; }
	`)
						}
					}
					return (
						<div>
							{Boolean(name) && `	add_menu_page('${name1}','${name1}','manage_options', '${name1}_admin', '${name1}_cox', 'dashicons-admin-users','2');
	function ${name1}_cox(){ include '${name1}.php'; }
	`}

							{res}

						</div>
					)
				})}
				{`});`}</pre>

		</div>
	)
}

