import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import stylesApp from '../../App.module.css';
import styles from './TaskAdditionPage.module.css';
import { useRequestAddTask } from '../../hooks/useRequestAddTask';
import { TaskEntity } from '../../classes/TaskEntity';
import { getTaskTitleError } from '../../validation/getTaskTitleError';

export const TaskAdditionPage = () => {
	const [task, setTask] = useState(new TaskEntity);
	const [taskError, setTaskError] = useState();

	const { isCreating, isCreated, requestAddTask } = useRequestAddTask(task);

	const navigate = useNavigate();

	useEffect(() => {
		if (isCreated)
			navigate('/');
	}, [isCreated, navigate])
	const onCreatingTask = () => {
		const error = getTaskTitleError(task.title);
		if (error === null) {
			setTaskError('');
			requestAddTask();
		}
		else setTaskError(error);
	}

	return (
		<div className={stylesApp.App}>
			<title>Todo list - новая задача</title>

			<button className={`${stylesApp.button} ${stylesApp.backBtn}`}
				disabled={isCreating} onClick={() => navigate(-1)}
			>🞀 Назад</button>
			<h2 className={stylesApp.pageTitle}>Новая задача</h2>
			<textarea className={styles.titleTask}
				placeholder='Введите заголовок задачи...'
				value={task.title}
				onChange={(e) => {setTask({...task, title: e.target.value})}}
			></textarea>
			{taskError && <div className={styles.error}>{taskError}</div>}
			<button type="button" className={`${stylesApp.button} ${styles.addBtn}`}
				disabled={isCreating}
				onClick={onCreatingTask}
			>Добавить задачу</button>
			{isCreating && <div>Добавление...</div>}
		</div>
	)
};
