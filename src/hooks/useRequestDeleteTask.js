import { useState } from 'react';

export const useRequestDeleteTask = (taskId, setTasks) => {
	const [isDeleting, setIsDeleting] = useState(false);
	const [isDeleted, setIsDeleted] = useState(false);

	const requestDeleteTask = () => {
		setIsDeleting(true);

		fetch(import.meta.env.VITE_URL_PUBLIC + '/todos/' + taskId, {
			method: 'DELETE',
		})
			.then(() =>
				setTasks((prevTasks) =>
					prevTasks.filter((prevTask) => prevTask.id !== taskId),
				),
			)
			.finally(() => {
				setIsDeleting(false);
				setIsDeleted(true);
			});
	};

	return {
		isDeleting,
		isDeleted,
		requestDeleteTask,
	};
};
