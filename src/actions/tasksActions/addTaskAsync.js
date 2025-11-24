import { fetchApi } from '../../api';

export const addTaskAsync = (newTask) => (dispatch) => {
	return fetchApi(dispatch, newTask).then((loadedNewTask) =>
		dispatch({
			type: 'ADD_TASK',
			payload: loadedNewTask,
		}),
	);
};
