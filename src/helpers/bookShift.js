// import axios from "axios";
import { ShiftReducerConstants } from "../reducers";

const bookShift = async (id, dispatch) => {
	// Post Api Call is not working so I made changes on Frontend

	// try {
	// 	const response = await axios.post(`http://127.0.0.1:8080/shifts/${id}/boo`);
	// 	console.log(response);
	// } catch (error) {
	// 	console.log(error);
	// 	dispatch({
	// 		type: ShiftReducerConstants.ERROR,
	// 		payload: error,
	// 	});
	// }

	try {
		dispatch({
			type: ShiftReducerConstants.BOOK_SHIFT,
			payload: id,
		});
	} catch (error) {
		dispatch({
			type: ShiftReducerConstants.ERROR,
			payload: error,
		});
	}
};

export { bookShift };
