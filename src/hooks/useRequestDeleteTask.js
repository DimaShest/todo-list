import { useState } from 'react';
import { ref, remove } from 'firebase/database';
import { db } from '../firebase';

export const useRequestDeleteTask = (taskId) => {
	const [isDeleting, setIsDeleting] = useState(false);

	const requestDeleteTask = () => {
		setIsDeleting(true);

		const taskDbRef = ref(db, 'todos/' + taskId);

		remove(taskDbRef).then(() => setIsDeleting(false));
	};
	return {
		isDeleting,
		requestDeleteTask,
	};
};
