import React from 'react'
import { Large, Small } from '../components/ChangeCase'

function AdminMenu(props) {
	const name = props.item.name
	const slug = props.item.slug
	return (
		<div>
			{`add_action('admin_menu' , function(){
    add_menu_page('${name}','${name}','manage_options', '${slug}_admin', '${slug}_cox', 'dashicons-admin-users','2');
});

function ${slug}_cox(){ include '${slug}.php'; }
	`}
		</div>
	)
}

export default AdminMenu
