import { ShiftReducerConstants } from "./shiftReducerContants";

const shiftReducer = (state, action) => {
	switch (action.type) {
		case ShiftReducerConstants.GET_DATA:
			return {
				...state,
				allShiftsData: action.payload,
			};
		case ShiftReducerConstants.AVAILABLE_SHIFTS:
			return { ...state, availableShifts: action.payload };
		case ShiftReducerConstants.MYSHIFTS:
			return { ...state, myShifts: action.payload };
		case ShiftReducerConstants.LOADING:
			return { ...state, loading: !state.loading };
		case ShiftReducerConstants.ERROR:
			return { ...state, error: action.payload };

		default:
			return state;
	}
};

export { shiftReducer };
