import { useState } from 'react';

export const useRequestDeleteTask = (task, refreshTasks) => {
	const [isDeleting, setIsDeleting] = useState(false);

	const requestDeleteTask = () => {
		setIsDeleting(true);

		fetch(import.meta.env.VITE_URL_PUBLIC + '/todos/' + task.id, {
			method: 'DELETE',
		})
			.then(() => refreshTasks())
			.finally(() => {
				setIsDeleting(false);
			});
	};
	return {
		isDeleting,
		requestDeleteTask,
	};
};
