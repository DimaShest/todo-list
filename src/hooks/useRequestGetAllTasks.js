import { useState, useEffect } from 'react';

export const useRequestGetAllTasks = (refreshTasksFlag) => {
	const [isLoading, setIsLoading] = useState(false);
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		setIsLoading(true);

		fetch(import.meta.env.VITE_URL_PUBLIC + '/todos')
			.then((loadedTasksJSON) => loadedTasksJSON.json())
			.then((loadedTasks) => {
				setTasks(loadedTasks);
			})
			.finally(() => setIsLoading(false));
	}, [refreshTasksFlag]);

	return {
		isLoading,
		tasks,
		setTasks,
	};
};
