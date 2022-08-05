import React, { useEffect, useState } from "react";
import { AvailableShiftsTable, Navbar } from "../../components";
import { useShiftsContext } from "../../context";
import { groupByCities } from "../../utils";
import "../myShifts/myShifts.css";

function AvailableShifts() {
	const {
		shiftState: { allShiftsData },
	} = useShiftsContext();

	const groupedByCities = groupByCities(allShiftsData);
	const cities = Object.keys(groupedByCities);

	const [selectedCity, setselectedCity] = useState("");

	useEffect(() => {
		const groupedByCities = groupByCities(allShiftsData);
		const cities = Object.keys(groupedByCities);
		setselectedCity(cities[0]);
	}, [allShiftsData]);
	return (
		<div>
			<Navbar />
			<div className="myshifts__container">
				<div className="cities__container">
					{cities?.map((city) => (
						<div
							onClick={() => setselectedCity(city)}
							className={
								city === selectedCity ? "selectedCity" : "notSelectedCity"
							}
							key={city}
						>
							{`${city}  (${groupedByCities[city]?.length})`}
						</div>
					))}
				</div>
				<AvailableShiftsTable shifts={groupedByCities[selectedCity] || []} />
			</div>
		</div>
	);
}

export { AvailableShifts };
