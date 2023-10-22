import React, { useState } from 'react'
import HtmlInputs from '../components/HtmlInputs';
import { Button, Form, Icon } from 'semantic-ui-react';

export default function InputForm(p) {

  const [rows, setRows] = useState(1)
  const handleAdd = () => {
    setRows((prev) => (prev + 1))
    p.setFormData((prevData) => ({
      ...prevData,
      ['a' + rows]: { value: "" },
    }));
    setTimeout(() => {
      const table = document.getElementById("main-form");
      const lastInput = table.rows[table.rows.length - 1].cells[1].childNodes[0];
      lastInput.value = ''
      lastInput.focus();
    }, 200);
  }

  function removeRow(e) {
    const a = e.target.getAttribute('data')
    const prev = { ...p.formData }
    delete prev[a]
    p.setFormData(prev)
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    let prev = { ...p.formData }
    prev[name].value = value
    p.setFormData(prev)
  }

  function handleTypeChange(e) {
    const { name, value } = e.target;
    let prev = { ...p.formData }
    prev[name].type = value
    p.setFormData(prev)
  }
  return (
    <div>
      <Form>
        <Button color='green' id="add-row" type='button' onClick={handleAdd}>Add row</Button>
        <table id='main-form'>
          <tbody>
            {Object.keys(p.formData).map((item, index) => (
              <tr key={item}>
                <td>
                  <select name={item} onChange={handleTypeChange}
                    value={p.formData[item] ? p.formData[item].type : 'text'}>
                    <option value="text">text</option>
                    <HtmlInputs />
                  </select>
                </td>
                <td>
                  <Form.Field>
                    <input name={item} type="text"
                      value={p.formData[item] ? p.formData[item].value : ''}
                      placeholder='write here...'
                      onChange={handleInputChange} />
                    <Icon name='minus' inverted circular color='orange'
                      style={{ cursor: 'pointer' }}
                      data={item}
                      onClick={removeRow}
                    />
                  </Form.Field>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Form>
    </div>
  )
}
