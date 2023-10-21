import React, { useContext } from 'react'
import {  Small } from '../components/ChangeCase'
import { FormData, SetFormData } from '../App'
import InputForm from '../react/InputForm'
import { Container } from 'semantic-ui-react'

export default function RestAPI() {
  const formData = useContext(FormData)
  const setFormData = useContext(SetFormData)
	const list = Object.values(formData)

	return (
		<Container>
    <InputForm setFormData={setFormData} formData={formData} />
			<h2>WordPress Rest API</h2>
			<pre>{`<?php`}
				{list.map((item, index) => {
					const slug = Small(item.value)
					return (
						<React.Fragment key={index}>
							{`
function rest_api_select_${slug}(WP_REST_Request $request){
	// do something here
	$result = array("sample" => "output");
	echo json_encode($result, JSON_PRETTY_PRINT);
}
add_action('rest_api_init', function () {
	register_rest_route(
		'my_api/v1',
		'/${slug}',
		array(
			'methods' => 'GET',
			'callback' => 'rest_api_get_${slug}'
		)
	);
});
// URL: https://yourwebsite.com/wp-json/my_api/v1/${slug}/
`}
						</React.Fragment>
					)
				})}
				{`?>`}
			</pre>
			<p>Note: After adding this code, please save permalinks once...</p>

		</Container>
	)
}

