import React, { useState } from 'react'
import { Outlet, Link } from 'react-router-dom'

export default function NavBar({ change }) {
	function change_page(e) {
		const v = e.target.innerHTML
		change(v)
	}
	return (
		<div>
			<nav className="navbar navbar-expand-lg bg-body-tertiary">
				<div className="container-fluid">
					<Link className="navbar-brand" to="/">Haysky Code Generator</Link>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item" onClick={change_page}>
								<a className="nav-link active" aria-current="page">HTML Form</a>
							</li>
							<li className="nav-item" onClick={change_page}>
								<a className="nav-link active" aria-current="page">CPT</a>
							</li>
							<li className="nav-item" onClick={change_page}>
								<a className="nav-link active" aria-current="page">Custom Taxonomy</a>
							</li>
							{/* <li className="nav-item">
								<Link className="nav-link" to="/textutils">TextUtils</Link>
							</li> */}
						</ul>
					</div>
				</div>
			</nav>
			<Outlet />
		</div>
	)
}
