import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useRequestGetAllTasks = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [tasks, setTasks] = useState();
	const navigate = useNavigate();

	useEffect(() => {
		setIsLoading(true);

		fetch(import.meta.env.VITE_URL_PUBLIC + '/todos')
			.then((loadedTasksJSON) => loadedTasksJSON.json())
			.then((loadedTasks) => {
				setTasks(loadedTasks);
			})
			.catch(() => navigate('/err-connection-server'))
			.finally(() => setIsLoading(false));
	}, [setIsLoading, navigate]);

	return {
		tasks,
		isLoading,
		setTasks,
	};
};
