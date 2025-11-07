import { useState } from 'react';
import styles from './TaskAdditionForm.module.css'
import { useRequestAddTask } from '../../hooks/useRequestAddTask';
import { TaskEntity } from '../../classes/TaskEntity';
import { getTaskTitleError } from '../../validation/getTaskTitleError';

export const TaskAdditionForm = ({setTasks}) => {
	const [task, setTask] = useState(new TaskEntity);
	const [taskError, setTaskError] = useState();

	const { isCreating, requestAddTask } = useRequestAddTask(task, setTasks);

	const onCreatingTask = () => {
		if (getTaskTitleError(task.title) === null) {
			setTaskError('');
			setTask(new TaskEntity);
			requestAddTask();
		}
		else setTaskError(getTaskTitleError(task.title));
	}

	return (
		<div className={styles.addTaskContainer}>
			<div>Новая задача</div>
			<textarea className={styles.titleTask}
				placeholder='Введите заголовок задачи...'
				value={task.title}
				onChange={(e) => {setTask({...task, title: e.target.value})}}
			></textarea>
			{taskError && <div className={styles.error}>{taskError}</div>}
			<button type="button" className={styles.addBtn}
				disabled={isCreating}
				onClick={onCreatingTask}
			>Добавить задачу</button>
		</div>
	)
};
