import React from 'react'
import { Large, Small } from '../components/ChangeCase'
function Cpt(props) {
	const name = Large(props.item.ans)
	const slug = Small(props.item.ans)
	return (
		<div>
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
        "public" => true,
        "label"       => "${name}s",
        "labels"      => $labels,
        "description" => "${name}s custom post type.",
        "menu_icon"      => "dashicons-admin-post",    
        "supports"   => array( "title", "editor", "thumbnail"),
        "capability_type" => "post",
        "publicly_queryable"  => true,
        "exclude_from_search" => false
    );
    register_post_type("${slug}", $args);
    
});
?>`}
		</div>
	)
}

export default Cpt
