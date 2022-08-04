import React from "react";
import { Routes, Route } from "react-router-dom";
import { AvailableShifts, MyShifts } from "../screens";

function AllRoutes() {
	return (
		<>
			<Routes>
				<Route path="/" element={<MyShifts />} />
				<Route path="/availableShifts" element={<AvailableShifts />} />
			</Routes>
		</>
	);
}

export { AllRoutes };
