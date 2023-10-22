import './App.css';
import 'semantic-ui-css/semantic.min.css'
import React, { createContext, useState } from 'react'
import { BrowserRouter, Route, Routes, Outlet, Link } from 'react-router-dom'
import CodeGen from './components/CodeGen';
import NotFoundPage from './components/NotFoundPage';
import Testing from './components/Testing';
import { Button, Container, Icon, Menu } from 'semantic-ui-react';
import Router from './react/Router';
import WPList from './react/WPList';
import DirectWP from './react/DirectWP';
import CustomPostType from './wordpress/CustomPostType';
import CustomTaxonomy from './wordpress/CustomTaxonomy';
import RestAPI from './wordpress/RestAPI';
import AdminMenu from './wordpress/AdminMenu';
import Settings from './components/Settings';
import Template from './wordpress/Template';
import ACF_Fields from './wordpress/ACF_Fields';
import ACF_PostTypes from './wordpress/ACF_PostTypes';

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

                <Route path='wordpress' element={<SmallMenu items={['Custom Post Type', 'Custom Taxonomy', 'REST API', 'Admin-Menu', 'Template', 'ACF Fields','ACF Post Type']} />} >
                  <Route index element={<CustomPostType />} />
                  <Route path='Custom Post Type' element={<CustomPostType />} />
                  <Route path='Custom Taxonomy' element={<CustomTaxonomy />} />
                  <Route path='REST API' element={<RestAPI />} />
                  <Route path='Admin-Menu' element={<AdminMenu />} />
                  <Route path='Template' element={<Template />} />
                  <Route path='ACF Fields' element={<ACF_Fields />} />
                  <Route path='ACF Post Type' element={<ACF_PostTypes />} />
                </Route>

                <Route path="react" element={<SmallMenu items={['Router', 'WP List']} />}>
                  <Route index element={<Router formData={formData} setFormData={setFormData} />} />
                  <Route path='Router' element={<Router />} />
                  <Route path='WP List' element={<WPList />} />
                  <Route path='Direct WP' element={<DirectWP formData={formData} setFormData={setFormData} />} />
                </Route>

                <Route path='html'>
                  <Route index element={<CodeGen />} />
                </Route>

                <Route path="settings" element={<Settings />} />
                <Route path="testing" element={<Testing />} />
                <Route path="*" element={<NotFoundPage />} />
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
    <hr />
      {p.items.map((x, i) =>
        <Button
          name={x}
          active={item === x}
          content={x}
          onClick={handleItemClick}
          as={Link}
          to={x}
          color='teal'
        />
      )}
    <hr />
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
    { slug: 'settings', icon: 'settings' },
  ]
  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    // items.push({ slug: 'python', icon: 'python' })
    // items.push({ slug: 'testing', icon: 'tasks' })
  }
  return (
    <>
      <Menu icon='labeled' widths={items.length} fluid compact size='mini'>
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
              <Icon name={x.icon} size='small' /> {x.slug}
            </Menu.Item>
          )
        }
      </Menu>
      <Outlet />
    </>
  )
}
