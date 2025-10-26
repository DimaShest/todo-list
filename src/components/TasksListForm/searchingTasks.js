import _ from 'lodash';

const searchingTasks = (sortedTasks, search, setDisplayingTasks) => {
	if (search === '') {
		setDisplayingTasks(sortedTasks);
	} else {
		const searchedTasks = sortedTasks.filter((task) =>
			task.title.toLowerCase().includes(search.toLowerCase()),
		);
		setDisplayingTasks(searchedTasks);
	}
};

export const searchingTasksDebounce = _.debounce(searchingTasks, 250);
