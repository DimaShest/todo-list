import { useState } from 'react';

export const useRequestUpdateTask = (updatedTask, refreshTasks) => {
	const [isUpdating, setIsUpdating] = useState(false);

	const requestUpdateTask = () => {
		setIsUpdating(true);

		fetch(import.meta.env.VITE_URL_PUBLIC + '/todos/' + updatedTask.id, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify(updatedTask),
		})
			.then(() => refreshTasks())
			.finally(() => {
				setIsUpdating(false);
			});
	};

	return {
		isUpdating,
		requestUpdateTask,
	};
};
