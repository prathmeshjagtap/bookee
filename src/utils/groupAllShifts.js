const getDate = (time) => {
	let date = new Date(time);
	return [date.getFullYear(), date.getMonth(), date.getDate()].join("/");
};

const groupAllShifts = (shifts) => {
	let groupedShifts = {};

	shifts.forEach((shift) => {
		let startTime = getDate(shift.startTime);
		if (groupedShifts[startTime]) {
			groupedShifts[startTime].push(shift);
		} else {
			groupedShifts[startTime] = [shift];
		}
	});
	return groupedShifts;
};

export { groupAllShifts };
