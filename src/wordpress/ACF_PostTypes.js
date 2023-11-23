import React, { useContext, useState } from 'react'
import { FormDataContext } from '../App'
import InputForm from '../react/InputForm'
import { Large, Small } from '../components/ChangeCase'

export default function ACF_PostTypes() {
  const { formData } = useContext(FormDataContext)
  const { setFormData } = useContext(FormDataContext)
  const list = Object.values(formData)
  const [cpt, setcpt] = useState('book')
  const data = []
  for (let index = 0; index < list.length; index++) {
    const element = list[index];
    const name = Large(element.value)
    const slug = Small(element.value)
    // "key": "field_" + Math.floor(Math.random() * 10000000),
    data.push({
      "key": "post_type_" + Math.floor(Math.random() * 10000000),
      "title": name + "s",
      "menu_order": 0,
      "active": true,
      "post_type": slug,
      "advanced_configuration": true,
      "import_source": "",
      "import_date": "",
      "labels": {
        "name": name + "s",
        "singular_name": "" + name,
        "menu_name": name + "s",
        "all_items": "All " + name + "s",
        "edit_item": "Edit " + name,
        "view_item": "View " + name,
        "view_items": "View " + name + "s",
        "add_new_item": "Add New " + name,
        "add_new": "",
        "new_item": "New " + name,
        "parent_item_colon": "Parent " + name + ":",
        "search_items": "Search " + name + "s",
        "not_found": "No " + name + " found",
        "not_found_in_trash": "No " + name + " found in Trash",
        "archives": name + " Archives",
        "attributes": name + " Attributes",
        "featured_image": "",
        "set_featured_image": "",
        "remove_featured_image": "",
        "use_featured_image": "",
        "insert_into_item": "Insert into " + name,
        "uploaded_to_this_item": "Uploaded to this " + name,
        "filter_items_list": "Filter " + name + " list",
        "filter_by_date": "Filter " + name + " by date",
        "items_list_navigation": name + "s list navigation",
        "items_list": name + "s list",
        "item_published": name + " published.",
        "item_published_privately": name + " published privately.",
        "item_reverted_to_draft": name + " reverted to draft.",
        "item_scheduled": name + " scheduled.",
        "item_updated": name + " updated.",
        "item_link": name + " Link",
        "item_link_description": "A link to a " + name + "."
      },
      "description": "",
      "public": true,
      "hierarchical": false,
      "exclude_from_search": false,
      "publicly_queryable": true,
      "show_ui": true,
      "show_in_menu": true,
      "admin_menu_parent": "",
      "show_in_admin_bar": true,
      "show_in_nav_menus": true,
      "show_in_rest": true,
      "rest_base": "",
      "rest_namespace": "wp\/v2",
      "rest_controller_class": "WP_REST_Posts_Controller",
      "menu_position": "",
      "menu_icon": "dashicons-admin-post",
      "rename_capabilities": false,
      "singular_capability_name": "post",
      "plural_capability_name": "posts",
      "supports": [
        "title",
        "editor",
        "thumbnail"
      ],
      "taxonomies": [],
      "has_archive": false,
      "has_archive_slug": "",
      "rewrite": {
        "permalink_rewrite": "post_type_key",
        "with_front": "1",
        "feeds": "0",
        "pages": "1"
      },
      "query_var": "post_type_key",
      "query_var_name": "",
      "can_export": true,
      "delete_with_user": false,
      "register_meta_box_cb": "",
      "enter_title_here": ""
    })
  }
  return (
    <div>
      <h2>ACF Post Type</h2>
      <b>Enter Custom post types one in each:</b>
      <InputForm setFormData={setFormData} formData={formData} />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
