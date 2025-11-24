import { PROCESSES } from '../constants/processes';

export const fetchApi = (dispatch, task = null) => {
	let requestStringProps = '';
	let requestProps = {};
	let process = '';

	if (task === null) {
		requestProps = null;
		process = PROCESSES.LOADING;
	} else if (typeof task !== 'object') {
		requestStringProps = `/${String(task)}`;
		requestProps = { method: 'DELETE' };
		process = PROCESSES.DELETING;
	} else if (task.id === 0) {
		requestProps = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify(task),
		};
		process = PROCESSES.CREATING;
	} else {
		requestStringProps = `/${String(task.id)}`;
		requestProps = {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify(task),
		};
		process = PROCESSES.UPDATING;
	}

	dispatch({ type: 'SET_PROCESS', payload: process });
	dispatch({ type: 'SET_IS_WAITING_SERVER_RESPONSE', payload: true });

	return fetch(
		import.meta.env.VITE_URL_PUBLIC + '/todos' + requestStringProps,
		requestProps,
	)
		.then((response) => response.json())
		.finally(() => {
			dispatch({ type: 'SET_IS_WAITING_SERVER_RESPONSE', payload: false });
			dispatch({ type: 'SET_PROCESS', payload: PROCESSES.NONE });
		});
};
