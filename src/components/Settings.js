import React from 'react'
import { Button, Form, FormField } from 'semantic-ui-react'

export default function Settings() {
  let formData = null
  if (localStorage.getItem('settings')) {
    formData = JSON.parse(localStorage.getItem('settings'))
  }
  function handleSettings(e) {
    e.preventDefault()
    const form = e.target
    const formData = new FormData(form)
    const formObj = Object.fromEntries(formData.entries());
    localStorage.setItem('settings', JSON.stringify(formObj))
  }
  return (
    <div>
      <h1>Settings</h1>
      <Form onSubmit={handleSettings}>
        <Form.Field width={4}>
          <label>UI Library</label>
          <select name="ui" defaultValue={formData?.ui}>
            <option>none</option>
            <option>semantic</option>
            <option>bootstrap</option>
          </select>
        </Form.Field>
        <FormField width={4}>
          <label htmlFor="">Enter your WordPress URL</label>
          <input type="text" name="wp_url" defaultValue={formData?.wp_url} placeholder='https://haysky.com/'/>
        </FormField>
        <Form.Field>
          <Button color='blue'>Save</Button>
        </Form.Field>
      </Form>
    </div>
  )
}
