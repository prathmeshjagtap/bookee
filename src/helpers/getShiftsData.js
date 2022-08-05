import axios from "axios";
import { ShiftReducerConstants } from "../reducers";

const getShiftsData = async (dispatch) => {
	try {
		const response = await axios.get("http://127.0.0.1:8080/shifts");
		if (response.status === 200) {
			dispatch({
				type: ShiftReducerConstants.GET_DATA,
				payload: response.data,
			});
		}
	} catch (error) {
		dispatch({
			type: ShiftReducerConstants.ERROR,
			payload: error,
		});
	}
};

export { getShiftsData };
