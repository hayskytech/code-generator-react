import './App.css';
import React from 'react'
import { BrowserRouter, Route, Routes, Outlet, Link } from 'react-router-dom'
import CodeGen from './components/CodeGen';
import ReactGen from './react/ReactGen';
import WordPress from './wordpress/WordPress';
import NotFoundPage from './components/NotFoundPage';
import Testing from './components/Testing';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<NavBar />}>
            <Route path='html' element={<CodeGen />} />
            <Route path="reactgen" element={<ReactGen />} />
            <Route path="" element={<WordPress />} />
            <Route path="testing" element={<Testing />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

function NavBar() {
  return (
    <main>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Haysky Code Generator</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><Link className="nav-link" to="/">WordPress</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/html">HTML Form</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/reactgen">React JS</Link></li>
              {(!process.env.NODE_ENV || process.env.NODE_ENV === 'development') &&
                <li className="nav-item"><Link className="nav-link" to="/testing">Testing</Link></li>
              }
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </main >
  )
}
