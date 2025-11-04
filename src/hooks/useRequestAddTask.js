import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useRequestAddTask = (newTask) => {
	const [isCreating, setIsCreating] = useState(false);
	const [isCreated, setIsCreated] = useState(false);

	const navigate = useNavigate();

	const requestAddTask = () => {
		setIsCreating(true);

		fetch(import.meta.env.VITE_URL_PUBLIC + '/todos', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify(newTask),
		})
			.catch(() => navigate('/err-connection-server'))
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
