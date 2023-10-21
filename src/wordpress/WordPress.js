import React, { useState } from 'react'
import InputForm from '../react/InputForm';
import CustomTaxonomy from './CustomTaxonomy'
import CustomPostType from './CustomPostType'
import RestAPI from './RestAPI'
import AdminMenu from './AdminMenu';

export default function ReactGen() {

  function change_page(e) {
    const element = e.target
    document.querySelectorAll('.second_menu .item').forEach(b => {
      b.classList.remove('active')
    });
    element.classList.add("active")
    setPage(element.innerHTML)
  }
  const submenu = ['Custom Post Type', 'Custom Taxonomy', 'REST API', 'Admin Menu']
  const [page, setPage] = useState('Custom Post Type')

  function handleSubmit(e) {
    e.preventDefault()
  }
  const [formData, setFormData] = useState({ "a0": { "value": "hello" } })
  return (
    <>
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
        <h1>WordPress Generator</h1>
        <form onSubmit={handleSubmit}>
          <InputForm setFormData={setFormData} formData={formData} />
        </form>

        {page === "Custom Post Type" && <CustomPostType formData={formData} />}

        {page === "Custom Taxonomy" && <CustomTaxonomy formData={formData} />}

        {page === "REST API" && <RestAPI formData={formData} />}

        {page === "Admin Menu" && <AdminMenu formData={formData} />}

      </div>
    </>
  )
}
