import React from 'react'
import { Large, Small } from '../components/ChangeCase'
function CPT(p) {

	const list = Object.values(p.formData)

	return (
		<div>
			<h2>WordPress Custom Taxonomy</h2>
			{(
				<pre>{list.map((item) => {
					const name = Large(item.value)
					return (
						<>
							{`<?php
add_action( "init",function(){
    // Set labels for ${name}
    $labels = array(
        "name" => "${name}s",
        "singular_name" => "${name}",
        "add_new"    => "Add ${name}",
        "add_new_item" => "Add New ${name}",
        "all_items" => "All ${name}s",
        "edit_item" => "Edit ${name}",
        "new_item" => "New ${name}",
        "view_item" => "View ${name}",
        "search_items" => "Search ${name}s",
    );
    // Set Options for ${name}
    $args = array(    
			"labels"      => $labels,
			"hierarchical"               => true,
			"public"                     => true,
			"show_ui"                    => true,
			"show_admin_column"          => true,
			"show_in_nav_menus"          => true,
			"show_tagcloud"              => true,
			"show_in_rest"               => true,
	);
	register_taxonomy("${Small(item.value)}", array("post"), $args);
    
});
?>`}
						</>
					)
				})
				}</pre>
			)}

		</div>
	)
}

export default CPT
