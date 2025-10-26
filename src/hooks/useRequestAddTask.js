import { useState } from 'react';
import { ref, push } from 'firebase/database';
import { db } from '../firebase';

export const useRequestAddTask = (newTask) => {
	const [isCreating, setIsCreating] = useState(false);

	const requestAddTask = () => {
		setIsCreating(true);

		const todosDbRef = ref(db, 'todos');

		push(todosDbRef, newTask).then(() => setIsCreating(false));
	};

	return {
		isCreating,
		requestAddTask,
	};
};
