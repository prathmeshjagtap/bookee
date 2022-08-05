const convertTime = (timestamp) => {
	var date = new Date(timestamp);
	var hours = date.getHours();
	var minutes = date.getMinutes();
	if (minutes < 9) {
		minutes = "0" + minutes;
	}
	return hours + ":" + minutes;
};

export { convertTime };
