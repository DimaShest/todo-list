export const setCurrentTask = (task) => {
	return {
		type: 'SET_CURRENT_TASK',
		payload: task,
	};
};
