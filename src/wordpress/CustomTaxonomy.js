import React from 'react'
import { Large, Small } from '../components/ChangeCase'

export function CustomTaxonomy(props) {
	const name = Large(props.item.ans)
	const slug = Small(props.item.ans)
	return (
		<div>
			{`<?php
add_action( "init",function(){
    // Set labels for ${props.item.ans}
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
    // Set Options for ${props.item.ans}
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
    register_taxonomy("${slug}", array("post"), $args);
    
});
?>`}
		</div>
	)
}