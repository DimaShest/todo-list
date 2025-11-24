import { fetchApi } from '../../api';

export const setTasksAsync = () => (dispatch) => {
	return fetchApi(dispatch)
		.then((loadedTasks) => {
			return dispatch({
				type: 'SET_TASKS',
				payload: loadedTasks,
			});
		})
		.catch((error) => dispatch({ type: 'SET_SERVER_ERROR', payload: String(error) }));
};
