import { useState, useEffect } from 'react';

export const useRequestGetAllTasks = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [tasks, setTasks] = useState();
	const [serverError, setServerError] = useState('');

	useEffect(() => {
		setIsLoading(true);

		fetch(import.meta.env.VITE_URL_PUBLIC + '/todos')
			.then((loadedTasksJSON) => loadedTasksJSON.json())
			.then((loadedTasks) => {
				setTasks(loadedTasks);
			})
			.catch((error) => setServerError(String(error)))
			.finally(() => setIsLoading(false));
	}, [setIsLoading]);

	return {
		tasks,
		isLoading,
		setTasks,
		serverError,
	};
};
