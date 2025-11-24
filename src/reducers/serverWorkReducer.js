import { PROCESSES } from '../constants/processes';

const initialServerWorkState = {
	isWaitingServerResponse: true,
	process: PROCESSES.LOADING,
	serverError: '',
};

export const serverWorkReducer = (state = initialServerWorkState, { type, payload }) => {
	switch (type) {
		case 'SET_PROCESS': {
			return {
				...state,
				process: payload,
			};
		}
		case 'SET_IS_WAITING_SERVER_RESPONSE': {
			return {
				...state,
				isWaitingServerResponse: payload,
			};
		}
		case 'SET_SERVER_ERROR': {
			return {
				...state,
				serverError: payload,
			};
		}

		default:
			return state;
	}
};
