import { useState } from 'react';

export const useRequestAddTask = (newTask, setTasks) => {
	const [isCreating, setIsCreating] = useState(false);
	const [isCreated, setIsCreated] = useState(false);

	const requestAddTask = () => {
		setIsCreating(true);

		fetch(import.meta.env.VITE_URL_PUBLIC + '/todos', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify(newTask),
		})
			.then((response) => response.json())
			.then((newTask) => {
				setTasks((prevTasks) => [...prevTasks, newTask]);
			})
			.finally(() => {
				setIsCreating(false);
				setIsCreated(true);
			});
	};

	return {
		isCreating,
		isCreated,
		requestAddTask,
	};
};
