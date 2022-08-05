import { ShiftReducerConstants } from "./shiftReducerContants";

const shiftReducer = (state, action) => {
	switch (action.type) {
		case ShiftReducerConstants.GET_DATA:
			return {
				...state,
				allShiftsData: action.payload,
			};
		case ShiftReducerConstants.LOADING:
			return { ...state, loading: !state.loading };
		case ShiftReducerConstants.ERROR:
			return { ...state, error: action.payload };
		case ShiftReducerConstants.CANCEL_SHIFT:
			const cancelShifts = state.allShiftsData.filter((item) =>
				item.id === action.payload ? (item.booked = false) : item
			);
			return { ...state, allShiftsData: cancelShifts };
		case ShiftReducerConstants.BOOK_SHIFT:
			const bookedShifts = state.allShiftsData.filter((item) =>
				item.id === action.payload ? (item.booked = true) : item
			);
			return { ...state, allShiftsData: bookedShifts };

		default:
			return state;
	}
};

export { shiftReducer };
