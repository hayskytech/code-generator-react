import React, { useContext } from 'react'
import { FormDataContext } from '../App'
import InputForm from '../react/InputForm'
import { Large, Small } from '../components/ChangeCase'

export default function Template() {
  const {formData} = useContext(FormDataContext)
  const {setFormData} = useContext(FormDataContext)

  const list = Object.values(formData)
  return (
    <div>
      <InputForm setFormData={setFormData} formData={formData} />
      <h2>Template</h2>
      <pre>{`<?php
add_filter('the_content', 
function($content) {
  if (is_singular('digital')) {
    global $post;
		$meta = get_post_meta($post->ID);
		ob_start(); 
    ?>
		<h3>Details</h3>
		<table>`}
        {list.map((item, i) => {
          const name = Large(item.value)
          const slug = Small(item.value)
          return `
      <tr>
        <th>${name}</th>
        <td>
          <?php echo $meta['${slug}'][0]; ?>
        </td>
      </tr>`})
        }
        {`
    </table>
    <?php
    $message = ob_get_clean();
    $content .= $message;
  }
  return $content;
});`}
      </pre>
    </div>
  )
}
