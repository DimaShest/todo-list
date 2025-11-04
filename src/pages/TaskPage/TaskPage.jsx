import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import stylesApp from '../../App.module.css';
import { TaskDataForm, UpdatingTaskForm } from './components';
import { Loader } from '../../components/UI';
import { useRequestGetTaskById, useRequestUpdateTask, useRequestDeleteTask } from '../../hooks';
import { getTaskTitleError } from '../../validation/getTaskTitleError';

export const TaskPage = () => {
	const [isEditing, setIsEditing] = useState(false);

	const params = useParams();
	const navigate = useNavigate();

	const { task, setTask, isLoading } = useRequestGetTaskById(params.id);
	const { isUpdating, isUpdated, setIsUpdated, requestUpdateTask } = useRequestUpdateTask();
	const { isDeleting, isDeleted, requestDeleteTask } = useRequestDeleteTask();

	useEffect(() => {
		if (isUpdated) {
			setIsEditing(false);
			setIsUpdated(false);
		}
		if (isDeleted) {
			navigate('/');
			return;
		}
	}, [isUpdated, setIsEditing, setIsUpdated, isDeleted, navigate]);

	const onSubmitUpdatedTask = () =>  {
		if (getTaskTitleError(task.title) === null) {
			requestUpdateTask(task);
		}
		else alert(getTaskTitleError(task.title));
	}

	const onDeleteTask = () => {
		if (confirm('Вы точно хотите удалить задачу: «' + task.title + '»?')) {
			requestDeleteTask(task.id);
		}
	}

	const onCompleteChange = (e) => {
		const updatedTask = {...task, completed: e.target.checked};
		setTask(updatedTask);
		requestUpdateTask(updatedTask);
	}

	return (
		<>
			{isLoading
			?	<Loader />
			:	<div className={stylesApp.App}>
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
				</div>
			}
		</>
	)
};
