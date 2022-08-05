const getTimeDifference = (start, end) => {
	const diff = Math.abs(new Date(end) - new Date(start));
	const minutes = Math.floor(diff / 1000 / 60);
	return minutes;
};

const getShiftDuration = (shifts) => {
	let difference = "";
	const time = shifts.reduce(
		(acc, current) =>
			(acc = acc + getTimeDifference(current.startTime, current.endTime)),
		0
	);
	const hours = Math.floor(time / 60);
	const minutes = time % 60;
	if (minutes !== 0) {
		difference = `${hours} h  ${minutes} m`;
	} else {
		difference = `${hours} h`;
	}
	return difference;
};

export { getShiftDuration };
