import React from 'react';
import { Link } from "@reach/router";

const Nav = () => (
	<ul className="navigation">
		<li className="nav-list"><Link to="/" className="nav-link">Home</Link></li>
		<li className="nav-list"><Link to="/todo" className="nav-link">Todo</Link></li>
		<li className="nav-list"><Link to="/counter" className="nav-link">Counter</Link></li>
		<li className="nav-list"><Link to="/user" className="nav-link">User</Link></li>
		<li className="nav-list"><Link to="/hierarchical" className="nav-link">Hierarchical</Link></li>
	</ul>
);

export default Nav;
