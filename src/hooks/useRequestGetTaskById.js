import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useRequestGetTaskById = (taskId) => {
	const [isLoading, setIsLoading] = useState(false);
	const [task, setTask] = useState({});
	const navigate = useNavigate();

	useEffect(() => {
		setIsLoading(true);

		fetch(import.meta.env.VITE_URL_PUBLIC + '/todos/' + taskId)
			.then((loadedTaskJSON) => loadedTaskJSON.json())
			.then((loadedTask) => {
				if (Object.keys(loadedTask).length === 0) navigate('/task-not-exist');
				else setTask(loadedTask);
			})
			.catch(() => navigate('/err-connection-server'))
			.finally(() => setIsLoading(false));
	}, [setIsLoading, navigate, taskId]);

	return {
		task,
		setTask,
		isLoading,
	};
};
