import React from 'react'

export default function Testing() {
  const x = `<h1>hello</h1>`
  return (
    <div>
      {x}
      <div dangerouslySetInnerHTML={{__html:x}}></div>
    </div>
  )
}
