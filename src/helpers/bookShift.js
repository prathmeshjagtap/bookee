// import axios from "axios";
import { ShiftReducerConstants } from "../reducers";

const bookShift = async (id, dispatch, setloading) => {
	// Post Api Call is not working so I made changes on Frontend

	// try {
	// 	const response = await axios.post(
	// 		`http://127.0.0.1:8080/shifts/${id}/book`
	// 	);
	// 	console.log(response);
	// } catch (error) {
	// 	console.log(error);
	// 	dispatch({
	// 		type: ShiftReducerConstants.ERROR,
	// 		payload: error,
	// 	});
	// }
	setloading(true);
	try {
		setTimeout(() => {
			dispatch({
				type: ShiftReducerConstants.BOOK_SHIFT,
				payload: id,
			});
			setloading(false);
		}, 500);
	} catch (error) {
		dispatch({
			type: ShiftReducerConstants.ERROR,
			payload: error,
		});
	}
};

export { bookShift };
