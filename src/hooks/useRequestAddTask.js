import { useState } from 'react';

export const useRequestAddTask = (newTask, refreshTasks) => {
	const [isCreating, setIsCreating] = useState(false);

	const requestAddTask = () => {
		setIsCreating(true);

		fetch(import.meta.env.VITE_URL_PUBLIC + '/todos', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify(newTask),
		})
			.then(() => refreshTasks())
			.finally(() => {
				setIsCreating(false);
			});
	};

	return {
		isCreating,
		requestAddTask,
	};
};
