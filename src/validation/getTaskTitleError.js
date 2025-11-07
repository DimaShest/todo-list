export const getTaskTitleError = (title) => {
	let taskError = null;
	if (title === '') taskError = 'Заголовок задачи не должен быть пустым.';
	else if (title.length > 256)
		taskError = 'Заголовок задачи не должен превышать 256 символов.';
	else if (title.length > 33) {
		let wordLength = 0;

		for (var i = 0; i < title.length; i++) {
			++wordLength;

			if (title[i] !== ' ') {
				if (wordLength > 33) {
					taskError = 'Одно слово не должно превышать 33 символов.';
				}
			} else wordLength = 0;
		}
	}
	return taskError;
};
