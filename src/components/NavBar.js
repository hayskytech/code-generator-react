import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import tool from '../App'

export default function NavBar(props) {
	function change_page(e) {
		const element = e.target
		document.querySelectorAll('.second_menu .item').forEach(b => {
			b.classList.remove('active')
		});
		element.classList.add("active")
		props.change(element.innerHTML)
	}
	const menuItems = ['HTML Form', 'Custom Post Type', 'Custom Taxonomy', 'Rest API']
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
							<li className="nav-item"><Link className="nav-link" to="/">HTML Form</Link></li>
						</ul>
					</div>
				</div>
			</nav>
			<div className="container">
				<header className="d-flex justify-content-center py-3 second_menu">
					<ul className="nav nav-pills">
						{menuItems.map((item) => (
							<li className="nav-item mx-1" onClick={change_page}>
								<a className="nav-link item">{item}</a>
							</li>
						))}
					</ul>
				</header>
			</div>
			<Outlet />
		</main >
	)
}
