import React from 'react'

export default function WPList(p) {
  let arr = []
  Object.values(p.formData).forEach(e => {
    if (e.value) { arr.push(e.value) }
  })
  if (arr.length === 0) {
    arr.push('title')
  }
  return (
    <>
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
    </>
  )
}
