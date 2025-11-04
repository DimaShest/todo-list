import { useState } from 'react';

export const useRequestUpdateTask = () => {
	const [isUpdating, setIsUpdating] = useState(false);
	const [isUpdated, setIsUpdated] = useState(false);

	const requestUpdateTask = (updatedTask) => {
		setIsUpdating(true);

		fetch(import.meta.env.VITE_URL_PUBLIC + '/todos/' + updatedTask.id, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify(updatedTask),
		})
			// .then((response) => response.json())
			// .then((updatedTask) => {
			// 	setTasks((prevTasks) =>
			// 		prevTasks.map((task) =>
			// 			task.id === updatedTask.id ? updatedTask : task,
			// 		),
			// 	);
			// })
			.then(() => {
				setIsUpdating(false);
				setIsUpdated(true);
			});
	};

	return {
		isUpdating,
		isUpdated,
		setIsUpdated,
		requestUpdateTask,
	};
};
