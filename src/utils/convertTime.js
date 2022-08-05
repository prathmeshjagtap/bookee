const convertTime = (unix_timestamp) => {
	// Create a new JavaScript Date object based on the timestamp
	// Multiplied by 1000 is not needed, timestamp is passed in miliseconds?
	var date = new Date(unix_timestamp);
	var hours = date.getHours();
	var minutes = "0" + date.getMinutes();

	// Will display time in 10:30 format
	return hours + ":" + minutes.substr(-2);
};

export { convertTime };
