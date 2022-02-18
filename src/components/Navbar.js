import React from "react";
import { FaCoins } from "react-icons/fa";
import "./Navbar.css";
const Navbar = () => {
	return (
		<div>
			<div className="navbar">
				<FaCoins className="navbar-icon" />
				<h1>
					Cryp <span className="heading">Search</span>
				</h1>
			</div>
		</div>
	);
};

export default Navbar;
