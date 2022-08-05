import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

function Navbar() {
	return (
		<nav className="navbar">
			<NavLink
				to="/"
				className={({ isActive }) => (isActive ? " link isActive" : "link")}
			>
				My Shifts
			</NavLink>

			<NavLink
				to="/availableShifts"
				className={({ isActive }) => (isActive ? "link isActive" : "link")}
			>
				Available Shifts
			</NavLink>
		</nav>
	);
}

export { Navbar };
