import { useState } from 'react';

export const useRequestDeleteTask = () => {
	const [isDeleting, setIsDeleting] = useState(false);
	const [isDeleted, setIsDeleted] = useState(false);

	const requestDeleteTask = (taskId) => {
		setIsDeleting(true);

		fetch(import.meta.env.VITE_URL_PUBLIC + '/todos/' + taskId, {
			method: 'DELETE',
		}).then(() => {
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
