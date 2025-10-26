import { useState } from 'react';
import { ref, set } from 'firebase/database';
import { db } from '../firebase';

export const useRequestUpdateTask = (updatedTask) => {
	const [isUpdating, setIsUpdating] = useState(false);

	const requestUpdateTask = () => {
		setIsUpdating(true);

		const taskDbRef = ref(db, 'todos/' + updatedTask.id);

		delete updatedTask.id;
		set(taskDbRef, updatedTask).then(() => setIsUpdating(false));
	};

	return {
		isUpdating,
		requestUpdateTask,
	};
};
