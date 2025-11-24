import { fetchApi } from '../../api';

export const deleteTaskAsync = (task) => (dispatch) => {
	return fetchApi(dispatch, task.id).then(() =>
		dispatch({
			type: 'DELETE_TASK',
			payload: task.id,
		}),
	);
};
