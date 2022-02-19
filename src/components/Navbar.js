import React from "react";
import { FaCoins } from "react-icons/fa";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
	return (
		<Link to="/">
			<div className="navbar">
				<FaCoins className="navbar-icon" />
				<h1>
					Cryp <span className="nav-heading">Search</span>
				</h1>
			</div>
		</Link>
	);
};

export default Navbar;
