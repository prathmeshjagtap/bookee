import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useShiftsContext } from "../../context";
import { bookShift, cancelShift } from "../../helpers";
import { convertTime, getRequiredDate } from "../../utils";
import spinner_green from "../../assets/spinner_green.svg";
import spinner_red from "../../assets/spinner_red.svg";

function Shifts({ shift, date, checkedOveralpped }) {
	const [loading, setloading] = useState(false);
	const { shiftDispatch } = useShiftsContext();
	const location = useLocation();
	const presentdate = getRequiredDate(date);

	const getStartTime = (time) => {
		let date = new Date(time);
		return date.getHours();
	};

	const shiftStarted = (shift) => {
		const startTime = getStartTime(shift.startTime);
		const date = new Date();
		const presentTime = date.getHours();
		if (presentdate === "Today" && Number(presentTime) >= Number(startTime)) {
			return true;
		}
		return;
	};

	return (
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
						onClick={() => cancelShift(shift.id, shiftDispatch, setloading)}
					>
						{loading ? (
							<img className="spinner" src={spinner_red} alt="spinner_red" />
						) : (
							"Cancel"
						)}
					</button>
				</div>
			) : (
				<div className="cancelButton__container">
					{location?.pathname === "/availableShifts" ? (
						<p className="overalpped__shift">
							{checkedOveralpped(shift.startTime, shift.endTime)
								? "Overlapping"
								: null}
						</p>
					) : null}
					<button
						className={`btn btn__book ${
							checkedOveralpped(shift.startTime, shift.endTime)
								? "btn__book_disabled"
								: ""
						}`}
						disabled={checkedOveralpped(shift.startTime, shift.endTime)}
						onClick={() => bookShift(shift.id, shiftDispatch, setloading)}
					>
						{loading ? (
							<img
								className="spinner"
								src={spinner_green}
								alt="spinner_green"
							/>
						) : (
							"BOOK"
						)}
					</button>
				</div>
			)}
		</div>
	);
}

export { Shifts };
