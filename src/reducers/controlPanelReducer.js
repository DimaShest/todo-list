const initialControlPanelState = {
	isSorting: false,
	searchValue: '',
};

export const controlPanelReducer = (
	state = initialControlPanelState,
	{ type, payload },
) => {
	switch (type) {
		case 'CHANGE_IS_SORTING': {
			return {
				...state,
				isSorting: !state.isSorting,
			};
		}
		case 'SET_SEARCH_VALUE': {
			return {
				...state,
				searchValue: payload,
			};
		}
		default:
			return state;
	}
};
