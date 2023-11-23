import React, { useContext, useState } from 'react'
import { FormDataContext } from '../App'
import InputForm from '../react/InputForm'
import { Large, Small } from '../components/ChangeCase'
import { Form } from 'semantic-ui-react'

export default function ACF_Fields() {
  const { formData } = useContext(FormDataContext)
  const { setFormData } = useContext(FormDataContext)
  const list = Object.values(formData)
  const [cpt, setcpt] = useState('book')
  const data = [
    {
      "key": "group_" + Math.floor(Math.random() * 10000000),
      "title": cpt + " details",
      "fields": [],
      "location": [
        [
          {
            "param": "post_type",
            "operator": "==",
            "value": cpt
          }
        ]
      ],
      "menu_order": 0,
      "position": "normal",
      "style": "default",
      "label_placement": "top",
      "instruction_placement": "label",
      "hide_on_screen": "",
      "active": true,
      "description": "",
      "show_in_rest": 0
    }
  ]
  for (let index = 0; index < list.length; index++) {
    const element = list[index];
    const name = Large(element.value)
    const slug = Small(element.value)
    data[0].fields.push({
      "key": "field_" + Math.floor(Math.random() * 10000000),
      "label": name,
      "name": slug,
      "aria-label": "",
      "type": "text",
      "instructions": "",
      "required": 0,
      "conditional_logic": 0,
      "wrapper": {
        "width": "",
        "class": "",
        "id": ""
      },
      "default_value": "",
      "maxlength": "",
      "placeholder": "",
      "prepend": "",
      "append": ""
    })
  }
  return (
    <div>
      <h2>ACF Fields</h2>
      <Form>
        <Form.Field>
          <label htmlFor="">Custom Post Type</label>
          <input type="text" value={cpt} onChange={(e) => setcpt(e.target.value)} />
        </Form.Field>
      </Form>
      <br />
      <b>Enter ACF fields one in each:</b>
      <InputForm setFormData={setFormData} formData={formData} />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
