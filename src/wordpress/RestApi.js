import React from 'react'
import { Large, Small } from '../components/ChangeCase'
export default function RestAPI(p) {

	const list = Object.values(p.formData)

	return (
		<>
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

		</>
	)
}

