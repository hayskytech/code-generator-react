import React, { useEffect, useState } from 'react'

export default function Testing() {
  let data = {
    _fields: 'title',
    per_page: 10
  }
  const url = 'https://muslimawaaz.com/wp-json/wp/v2/posts/?'
  const params = new URLSearchParams(data).toString()
  const [list, setlist] = useState([])
  useEffect(() => {
    fetch(url + params)
      .then(res => res.json())
      .then(json => setlist(json))
  }, [])

  return (
    <ul>
      {
        list.map((item, index) => {
          return (
            <li key={index}>
              <div>{item.title.rendered}</div>
              <div>{item.title.rendered}</div>
            </li>
          )
        })
      }
    </ul>
  )
}
