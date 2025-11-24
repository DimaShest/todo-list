export const sortTasksByTitlesAlphabet = (tasks) => {
	return tasks.slice().sort((a, b) => {
		if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
		if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
		return 0;
	});
};
