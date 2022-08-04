import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
	return (
		<div>
			<Link to="/">My Shifts</Link>
			<Link to="/availableShifts">Available Shifts</Link>
		</div>
	);
}

export { Navbar };
