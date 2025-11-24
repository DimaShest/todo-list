const initialTasksState = {
	tasks: [],
	currentTask: {},
};

export const tasksReducer = (state = initialTasksState, { type, payload }) => {
	switch (type) {
		case 'SET_TASKS': {
			return { ...state, tasks: payload };
		}
		case 'ADD_TASK': {
			return { ...state, tasks: [...state.tasks, { ...payload }] };
		}
		case 'UPDATE_TASK': {
			return {
				...state,
				tasks: state.tasks.map((task) =>
					task.id === payload.id ? payload : task,
				),
			};
		}
		case 'DELETE_TASK': {
			return { ...state, tasks: state.tasks.filter((task) => task.id !== payload) };
		}
		case 'SET_CURRENT_TASK': {
			return { ...state, currentTask: payload };
		}
		case 'SET_CURRENT_TASK_DEFAULT': {
			return { ...state, currentTask: initialTasksState.currentTask };
		}
		default:
			return state;
	}
};
