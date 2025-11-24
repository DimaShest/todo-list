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
		case 'REMOVE_PROCESS': {
			return {
				...state,
				process: PROCESSES.NONE,
			};
		}
		case 'SET_WAITING_SERVER_RESPONSE': {
			return {
				...state,
				isWaitingServerResponse: true,
			};
		}
		case 'REMOVE_WAITING_SERVER_RESPONSE': {
			return {
				...state,
				isWaitingServerResponse: false,
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
