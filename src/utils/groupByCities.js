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

export { groupByCities };
