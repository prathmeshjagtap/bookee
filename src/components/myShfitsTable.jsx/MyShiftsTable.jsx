import React from "react";
import { getRequiredDate, getShiftDuration } from "../../utils";
import "./myShiftsTable.css";
import { Shifts } from "../shifts/Shifts";

function MyShiftsTable({ shifts, date }) {
	const presentdate = getRequiredDate(date);

	const time = getShiftDuration(shifts);

	const getHours = (time) => {
		const date = new Date(time);
		return date.getHours();
	};

	const checkedOveralpped = (start, end) => {
		const bookedShifts = shifts.filter((shift) => shift.booked);
		for (let i = 0; i < bookedShifts.length; i++) {
			if (
				getHours(bookedShifts[i].endTime) > getHours(start) &&
				getHours(end) > getHours(bookedShifts[i].startTime)
			) {
				return true;
			}
		}

		return "";
	};
	return (
		<div className="shiftsGroup__container">
			<div className="shifts__header">
				<h2 className="shifts__day">{presentdate}</h2>
				<p className="shifts__Duration">
					{`${shifts.length} shifts`}, {time}
				</p>
			</div>
			{shifts &&
				shifts.map((shift) => (
					<Shifts
						shift={shift}
						date={date}
						checkedOveralpped={checkedOveralpped}
						key={shift.id}
					/>
				))}
		</div>
	);
}

export { MyShiftsTable };
