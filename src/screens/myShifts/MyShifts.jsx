import React from "react";
import { Navbar, MyShiftsTable } from "../../components";
import { useShiftsContext } from "../../context";
import { groupAllShifts } from "../../utils";
import "./myShifts.css";

function MyShifts() {
	const { shiftState } = useShiftsContext();

	const MyShifts = shiftState?.allShiftsData.filter((item) => !item.booked);

	let groupedShifts = groupAllShifts(MyShifts);

	return (
		<div>
			<Navbar />
			<div className="myshifts__container">
				{Object.keys(groupedShifts).map((key) => {
					return (
						<MyShiftsTable shifts={groupedShifts[key]} date={key} key={key} />
					);
				})}
			</div>
		</div>
	);
}

export { MyShifts };
