import React from "react";
import { useShiftsContext } from "../../context";
import { bookShift, cancelShift } from "../../helpers";
import { getRequiredDate, convertTime } from "../../utils";
import "./myShiftsTable.css";

function MyShiftsTable({ shifts, date }) {
	const presentdate = getRequiredDate(date);
	const { shiftDispatch } = useShiftsContext();

	return (
		<div className="shiftsGroup__container">
			<div className="shifts__header">
				<h2 className="shifts__day">{presentdate}</h2>
				<p className="shifts__Duration">
					{`${shifts.length} shifts`}, {"Todo"}
				</p>
			</div>
			{shifts &&
				shifts.map((shift) => (
					<div key={shift.id} className="shifts__container">
						<div>
							<div className="shifts__time">
								{convertTime(shift.startTime)}-{convertTime(shift.endTime)}
							</div>
							<p className="shifts__area">{shift.area}</p>
						</div>
						{shift?.booked ? (
							<button
								className=" btn btn__cancel"
								onClick={() => cancelShift(shift.id, shiftDispatch)}
							>
								Cancel
							</button>
						) : (
							<button
								className=" btn btn__book"
								onClick={() => bookShift(shift.id, shiftDispatch)}
							>
								Book
							</button>
						)}
					</div>
				))}
		</div>
	);
}

export { MyShiftsTable };
