import React from "react";
import { useShiftsContext } from "../../context";
import { bookShift, cancelShift } from "../../helpers";
import { getRequiredDate, convertTime, getShiftDuration } from "../../utils";
import { useLocation } from "react-router-dom";
import "./myShiftsTable.css";

function MyShiftsTable({ shifts, date }) {
	const presentdate = getRequiredDate(date);
	const { shiftDispatch } = useShiftsContext();
	const location = useLocation();

	const getStartTime = (time) => {
		let date = new Date(time);
		return date.getHours();
	};

	const shiftStarted = (shift) => {
		const startTime = getStartTime(shift.startTime);

		const date = new Date();
		const presentTime = date.getHours();
		if (presentdate === "Today" && presentTime > startTime) {
			return true;
		}
		return;
	};

	const time = getShiftDuration(shifts);

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
					<div key={shift.id} className="shifts__container">
						<div>
							<div className="shifts__time">
								{convertTime(shift.startTime)}-{convertTime(shift.endTime)}
							</div>
							<p className="shifts__area">{shift.area}</p>
						</div>
						{shift?.booked ? (
							<div className="cancelButton__container">
								{location?.pathname === "/availableShifts" ? (
									<p className="booked__shift">Booked</p>
								) : null}

								<button
									className={`btn btn__cancel ${
										shiftStarted(shift) ? "btn__cancel_disabled" : ""
									}`}
									disabled={shiftStarted(shift)}
									onClick={() => cancelShift(shift.id, shiftDispatch)}
								>
									Cancel
								</button>
							</div>
						) : (
							<button
								// className={`btn btn__book ${
								// 	shiftStarted(shift) ? "btn__book_disabled" : ""
								// }`}
								className="btn btn__book"
								// disabled={shiftStarted(shift)}
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
