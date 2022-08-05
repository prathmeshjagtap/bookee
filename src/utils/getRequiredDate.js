const giveMonth = (monthNum) => {
	const months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];
	return months[monthNum];
};

const getRequiredDate = (date) => {
	const Day = date?.split("/")[2];
	const monthNum = date?.split("/")[1];
	const month = giveMonth(monthNum);

	const today = new Date();
	let tomorrow = new Date();
	tomorrow.setDate(today.getDate() + 1);

	if (
		today.getDate() === Number(Day) &&
		today.getMonth() === Number(monthNum)
	) {
		return "Today";
	} else if (
		tomorrow.getDate() === Number(Day) &&
		tomorrow.getMonth() === Number(monthNum)
	) {
		return "Tomorrow";
	} else {
		return `${month} ${Day}`;
	}
};

export { getRequiredDate };
