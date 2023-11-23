import React from 'react'

export default function Basics() {
  const codes = [`<h1>Country</h1>
<h2>State</h2>
<h3>District</h3>
<h4>Mandal</h4>
<h5>Area</h5>
<h6>Street</h6>`]
  return (
    <div>
      <p>HTML or Hyper Text Markup Language, is the most widely used language on the Web. Technically, HTML is not a programming language, but rather a markup language. Hypertext refers to the way in which Web pages (HTML documents) are linked together. When you click a link in a Web page, you are using hypertext. Markup Language describes how HTML works. With a markup language, you simply "markup" a text document with tags that tell a Web browser how to structure it to display.
      </p>
      <pre>{codes[0]}</pre>
    </div>
  )
}
