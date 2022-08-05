import React from "react";
import { groupAllShifts } from "../../utils";
import { MyShiftsTable } from "../myShfitsTable.jsx/MyShiftsTable";

function AvailableShiftsTable({ shifts }) {
	let groupedShifts = groupAllShifts(shifts);

	return (
		<div className="myshifts__container">
			{Object.keys(groupedShifts).map((key) => {
				return (
					<MyShiftsTable shifts={groupedShifts[key]} date={key} key={key} />
				);
			})}
		</div>
	);
}

export { AvailableShiftsTable };
