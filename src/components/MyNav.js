import {Navbar, Nav} from  'react-bootstrap'
import {Link} from  'react-router-dom'
import React from 'react'

function MyNav() {
return (
	<Navbar  bg="light"  expand="lg">
		<Navbar.Toggle  aria-controls="basic-navbar-nav"  />
		<Navbar.Collapse  id="basic-navbar-nav">
			<Nav  className="mr-auto">
				<Link  to="/"><img src="images/header.png" alt="Navbar" /></Link>
				
			</Nav>
		</Navbar.Collapse>
	</Navbar>
	)
}
export  default MyNav
