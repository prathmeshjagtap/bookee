import React, { useState } from "react";
import { AvailableShiftsTable, Navbar } from "../../components";
import { useShiftsContext } from "../../context";
import "../myShifts/myShifts.css";

function AvailableShifts() {
	const {
		shiftState: { allShiftsData },
	} = useShiftsContext();

	const groupByCities = (shifts) => {
		let groupedShifts = {};

		shifts.forEach((shift) => {
			let area = shift.area;
			if (groupedShifts[area]) {
				groupedShifts[area].push(shift);
			} else {
				groupedShifts[area] = [shift];
			}
		});
		return groupedShifts;
	};

	const groupedByCities = groupByCities(allShiftsData);
	const cities = Object.keys(groupedByCities);

	const [selectedCity, setselectedCity] = useState(cities[0] || "");
	return (
		<div>
			<Navbar />
			<div className="myshifts__container">
				<div className="cities__container">
					{cities?.map((city) => (
						<div onClick={() => setselectedCity(city)} className="selectedCity">
							{city}
						</div>
					))}
				</div>
				<AvailableShiftsTable shifts={groupedByCities[selectedCity] || []} />
			</div>
		</div>
	);
}

export { AvailableShifts };
