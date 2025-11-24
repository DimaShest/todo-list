import { fetchApi } from '../api';
import { setCurrentTaskDefault } from './setCurrentTaskDefault';

export const updateTaskAsync = (updatedTask) => (dispatch) => {
	return fetchApi(dispatch, updatedTask)
		.then((loadedTask) =>
			dispatch({
				type: 'UPDATE_TASK',
				payload: loadedTask,
			}),
		)
		.finally(() => {
			dispatch(setCurrentTaskDefault);
		});
};
