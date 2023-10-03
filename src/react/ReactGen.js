import React, { useState } from 'react'
import Router from './Router';
import InputForm from './InputForm';
import WPList from './WPList';

export default function ReactGen() {

  function change_page(e) {
    const element = e.target
    document.querySelectorAll('.second_menu .item').forEach(b => {
      b.classList.remove('active')
    });
    element.classList.add("active")
    setPage(element.innerHTML)
  }
  const submenu = ['Router', 'WP List']
  const [page, setPage] = useState('Router')

  function handleSubmit(e) {
    e.preventDefault()
  }
  const [formData, setFormData] = useState({ "a0": { "value": "" } })
  return (
    <div className="container my-2">
      <div className="container">
        <header className="d-flex justify-content-center py-3 second_menu">
          <ul className="nav nav-pills">
            {submenu.map((item, index) => (
              <li key={index} className="nav-item mx-1" onClick={change_page}>
                <button className="nav-link item">{item}</button>
              </li>
            ))}
          </ul>
        </header>
      </div>
      <h1>React Generator</h1>
      <form onSubmit={handleSubmit}>
        <InputForm setFormData={setFormData} formData={formData} />
      </form>

      {page === "Router" && <Router formData={formData} />}
      {page === "WP List" && <WPList formData={formData} />}


    </div>
  )
}
