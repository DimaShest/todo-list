import { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from '../firebase';

export const useRequestGetAllTasks = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		const todosDbRef = ref(db, 'todos');

		return onValue(todosDbRef, (snapshot) => {
			const loadedTasks = snapshot.val() || [];

			let tasksArray = [];
			Object.entries(loadedTasks).forEach((task) => {
				tasksArray.push({ ...task[1], id: task[0] });
			});

			setTasks(tasksArray);
			setIsLoading(false);
		});
	}, []);

	return {
		isLoading,
		tasks,
	};
};
