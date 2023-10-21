import React, { useContext } from 'react'
import { Large, Small } from '../components/ChangeCase'
import { FormData, SetFormData } from '../App'
import InputForm from '../react/InputForm'
import { Container } from 'semantic-ui-react'

function CustomPostType() {
  const formData = useContext(FormData)
  const setFormData = useContext(SetFormData)
	const list = Object.values(formData)

	return (
		<Container>
      <InputForm setFormData={setFormData} formData={formData} />
			<h2>WordPress Custom Post type</h2>
			{(
				<pre>{list.map((item, index) => {
					const name = Large(item.value)
					return (
						<React.Fragment key={index}>
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
    register_post_type("${Small(item.value)}", $args);
    
});
?>`}
						</React.Fragment>
					)
				})
				}</pre>
			)}

		</Container>
	)
}

export default CustomPostType
