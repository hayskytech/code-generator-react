import React, { useContext } from 'react'
import { FormData, SetFormData } from '../App'
import InputForm from './InputForm'
import { Container } from 'semantic-ui-react'

export default function WPList() {
  const formData = useContext(FormData)
  const setFormData = useContext(SetFormData)
  let arr = []
  Object.values(formData).forEach(e => {
    if (e.value) { arr.push(e.value) }
  })
  if (arr.length === 0) {
    arr.push('title')
  }
  return (
    <Container>
      <InputForm setFormData={setFormData} formData={formData} />
      <h2>WP List</h2>
      <h3>Imports</h3>
      <pre>
        {`import React, { useEffect, useState } from 'react'
`}
      </pre>
      <pre>
        {`let data = {
  _fields : '${arr}',
  per_page : 10
}
const url = 'https://muslimawaaz.com/wp-json/wp/v2/posts/?'
const params = new URLSearchParams(data).toString()
const [list,setlist] = useState([])
useEffect(() => {
  fetch(url + params)
  .then(res=>res.json())
  .then(json=>setlist(json))
}, [])
`}

        {`
return (
  <ul>
    {
      list.map((item,index)=>{
        return (
          <li>
            <div>{item.title.rendered}</div>
          </li>
        )
      })
    }
  </ul>
)`}
        {/* {arr.map((item) => {
          return (
            <>
              {item}
            </>
          )
        })} */}
      </pre>
    </Container>
  )
}
