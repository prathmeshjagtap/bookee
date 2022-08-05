import { createContext, useContext, useEffect, useReducer } from "react";
import { shiftReducer } from "../reducers";
import { getShiftsData } from "../helpers";

const shiftsContext = createContext(null);

const useShiftsContext = () => useContext(shiftsContext);

function ShiftsProvider({ children }) {
	const [shiftState, shiftDispatch] = useReducer(shiftReducer, {
		allShiftsData: [],
		myShifts: [],
		availableShifts: [],
		error: "",
		loading: false,
	});

	useEffect(() => {
		getShiftsData(shiftDispatch);
	}, []);

	return (
		<shiftsContext.Provider value={{ shiftState, shiftDispatch }}>
			{children}
		</shiftsContext.Provider>
	);
}

export { ShiftsProvider, useShiftsContext };
