import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import stylesApp from '../../App.module.css';
import { TaskDataForm, UpdatingTaskForm } from '.';
import { useRequestUpdateTask, useRequestDeleteTask } from '../../hooks';
import { getTaskTitleError } from '../../validation/getTaskTitleError';

export const TaskPage = ({ tasks, setTasks }) => {
	const [task, setTask] = useState({});
	const [isEditing, setIsEditing] = useState(false);

	const params = useParams();
	const navigate = useNavigate();

	const { isUpdating, isUpdated, setIsUpdated, requestUpdateTask } = useRequestUpdateTask(setTasks);
	const { isDeleting, isDeleted, requestDeleteTask } = useRequestDeleteTask(task.id, setTasks);

	useEffect(() => {
		if (!tasks)
			return;
		if (isUpdated) {
			setIsEditing(false);
			setIsUpdated(false);
		}
		if (isDeleted) {
			navigate('/');
			return;
		}

		const findedTask = tasks.find(t => String(t.id) === params.id)
		if (findedTask)
			setTask(findedTask);
		else navigate('/404');
	}, [tasks, isUpdated, setIsEditing, setIsUpdated, isDeleted, params, navigate]);

	const onSubmitUpdatedTask = () =>  {
		if (getTaskTitleError(task.title) === null) {
			requestUpdateTask(task);
		}
		else alert(getTaskTitleError(task.title));
	}

	const onDeleteTask = () => {
		if (confirm('Вы точно хотите удалить задачу: «' + task.title + '»?')) {
			requestDeleteTask();
		}
	}

	const onCompleteChange = (e) => {
		const updatedTask = {...task, completed: e.target.checked};
		setTask(updatedTask);
		requestUpdateTask(updatedTask);
	}

	return (
		<>
			<button className={`${stylesApp.button} ${stylesApp.backBtn}`}
				disabled={isUpdating || isDeleting} onClick={() => navigate(-1)}
			>🞀 Назад</button>
			<h2 className={stylesApp.pageTitle}>Данные задачи</h2>
			{isEditing
				?   <UpdatingTaskForm
						task={task}
						setTask={setTask}
						setIsEditing={setIsEditing}
						navigate={navigate}
						isUpdating={isUpdating}
						onSubmitUpdatedTask={onSubmitUpdatedTask}

					/>
				:   <TaskDataForm
						task={task}
						setIsEditing={setIsEditing}
						navigate={navigate}
						onCompleteChange={onCompleteChange}
						isDeleting={isDeleting}
						onDeleteTask={onDeleteTask}
					/>
			}
			{isUpdating && <div>Обновление...</div>}
			{isDeleting && <div>Удаление...</div>}
		</>
	)
};
