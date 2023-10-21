import './App.css';
import 'semantic-ui-css/semantic.min.css'
import React, { createContext, useState } from 'react'
import { BrowserRouter, Route, Routes, Outlet, Link } from 'react-router-dom'
import CodeGen from './components/CodeGen';
import NotFoundPage from './components/NotFoundPage';
import Testing from './components/Testing';
import { Container, Icon, Menu } from 'semantic-ui-react';
import Router from './react/Router';
import WPList from './react/WPList';
import DirectWP from './react/DirectWP';
import CustomPostType from './wordpress/CustomPostType';
import CustomTaxonomy from './wordpress/CustomTaxonomy';
import RestAPI from './wordpress/RestAPI';
import AdminMenu from './wordpress/AdminMenu';

export const FormData = createContext(null)
export const SetFormData = createContext(null)

export default function App() {
  const [formData, setFormData] = useState({ "a0": { "value": "" } })
  return (
    <Container>
      <FormData.Provider value={formData}>
        <SetFormData.Provider value={setFormData}>
          <BrowserRouter>
            <Routes>
              <Route path="code-generator" element={<NavBar />}>
                <Route index element={<CodeGen />} />

                <Route path='wordpress' element={<SmallMenu items={['Custom Post Type', 'Custom Taxonomy', 'REST API', 'Admin-Menu']} />} >
                  <Route index element={<CustomPostType />} />
                  <Route path='Custom Post Type' element={<CustomPostType />} />
                  <Route path='Custom Taxonomy' element={<CustomTaxonomy />} />
                  <Route path='REST API' element={<RestAPI />} />
                  <Route path='Admin-Menu' element={<AdminMenu />} />
                </Route>

                <Route path="react" element={<SmallMenu items={['Router', 'WP List']} />}>
                  <Route index element={<Router formData={formData} setFormData={setFormData} />} />
                  <Route path='Router' element={<Router />} />
                  <Route path='WP List' element={<WPList />} />
                  <Route path='Direct WP' element={<DirectWP formData={formData} setFormData={setFormData} />} />
                </Route>
                <Route path="testing" element={<Testing />} />
                <Route path="*" element={<NotFoundPage />} />
                <Route path='html'>
                  <Route index element={<CodeGen />} />
                </Route>
              </Route>
            </Routes>
          </BrowserRouter>
        </SetFormData.Provider>
      </FormData.Provider>
    </Container>
  );
}

function SmallMenu(p) {
  const [item, setitem] = useState('')
  function handleItemClick(e, { name }) { setitem(name) }
  return (<>
    <Menu>
      {p.items.map((x, i) =>
        <Menu.Item
          name={x}
          active={item === x}
          content={x}
          onClick={handleItemClick}
          as={Link}
          to={x}
        />
      )}
    </Menu>
    <Outlet />
  </>)
}

function NavBar() {
  const [item, setitem] = useState('html')
  function handleItemClick(e, { name }) { setitem(name) }
  let items = [
    { slug: 'html', icon: 'code' },
    { slug: 'react', icon: 'react' },
    { slug: 'wordpress', icon: 'wordpress' },
  ]
  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    items.push({ slug: 'testing', icon: 'tasks' })
  }
  return (
    <>
      <Menu icon='labeled'>
        {
          items.map((x, i) =>
            <Menu.Item
              key={i}
              name={x.slug}
              active={item === x.slug}
              onClick={handleItemClick}
              as={Link}
              to={x.slug}
            >
              <Icon name={x.icon} /> {x.slug}
            </Menu.Item>
          )
        }
      </Menu>
      <Outlet />
    </>
  )
}
