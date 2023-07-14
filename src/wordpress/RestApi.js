import React from 'react'
import { Small } from '../components/ChangeCase'

function RestApi(props) {
	// const name = Large(props.item.ans)
	const slug = Small(props.item.ans)
	return (
		<div>
			{`function rest_api_select_${slug}(WP_REST_Request $request){
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
		</div>
	)
}

export default RestApi
