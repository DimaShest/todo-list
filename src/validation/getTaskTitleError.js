export const getTaskTitleError = (title) => {
	let taskError = null;
	if (title === '') taskError = 'Заголовок задачи не должен быть пустым.';
	else if (title.length > 256)
		taskError = 'Заголовок задачи не должен превышать 256 символов.';
	return taskError;
};
