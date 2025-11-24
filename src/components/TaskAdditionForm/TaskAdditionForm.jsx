import { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './TaskAdditionForm.module.css'
import { PROCESSES, NEW_TASK } from '../../constants';
import { addTaskAsync } from '../../actions/tasksActions';
import { NoticeProcess } from '../UI';
import { getTaskTitleError } from '../../validation';

export const TaskAdditionForm = ({ dispatch }) => {
	const [task, setTask] = useState(NEW_TASK);
	const [taskError, setTaskError] = useState();

	const process = useSelector((state) => state.serverWorkState.process);
	const isWaitingServerResponse = useSelector((state) => state.serverWorkState.isWaitingServerResponse);

	const onCreatingTask = () => {
		const taskTitleError = getTaskTitleError(task.title);
		if (taskTitleError === null) {
			setTaskError('');
			setTask(NEW_TASK);
			dispatch(addTaskAsync(task));
		}
		else setTaskError(taskTitleError);
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
			{isWaitingServerResponse && process === PROCESSES.CREATING
							&& <NoticeProcess>{PROCESSES.CREATING}...</NoticeProcess>}
			<button type="button" className={styles.addBtn}
				disabled={isWaitingServerResponse}
				onClick={onCreatingTask}
			>Добавить задачу</button>
		</div>
	)
};
