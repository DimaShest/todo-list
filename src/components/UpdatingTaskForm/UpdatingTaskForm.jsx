import styles from './UpdatingTaskForm.module.css'
import { getTaskTitleError } from '../../validation/getTaskTitleError';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { setCurrentTaskDefault, updateTaskAsync } from '../../actions';
import { PROCESSES } from '../../constants/processes';
import { NoticeProcess } from '../UI';

export const UpdatingTaskForm = ( { dispatch }) => {
	const currentTask = useSelector((state) => state.tasksState.currentTask);
	const [task, setTask] = useState({});

	useEffect(() => {
		setTask(currentTask);
	}, [])

	let taskError = null;

	const isWaitingServerResponse = useSelector((state) => state.serverWorkState.isWaitingServerResponse);
	const process = useSelector((state) => state.serverWorkState.process);

	const onSubmitUpdatedTask = () =>  {
		if (getTaskTitleError(task.title) === null) {
			dispatch(updateTaskAsync(task))
		}
		else alert(getTaskTitleError(task.title));
	}

	return (
		<div>
			<div className={styles.flexRow}>
				<button type="button" className={styles.taskOption}
						onClick={() => dispatch(setCurrentTaskDefault)}
						disabled={isWaitingServerResponse}
					>❎</button>
			<div className={styles.formTitle}>Редактирование задачи</div>
			</div>
			{Object.keys(task).length !== 0
			&& 	<>
					<div className={styles.task}>
				<input className={styles.taskCompleted} type="checkbox"
					checked={task.completed}
					onChange={(e) => setTask({...task, completed: e.target.checked})}
				/>
				<div className={styles.updateTitleContainer}>
					<textarea type="text" className={styles.updateTitle}
					onChange={(e) =>
						setTask({...task, title: e.target.value})}
					value={task.title}></textarea>
					<label className={styles.error}>{taskError}</label>
				</div>

			</div>
			<div className={styles.flexRow}>
					{isWaitingServerResponse && process === PROCESSES.UPDATING
								&& <NoticeProcess>{PROCESSES.UPDATING}...</NoticeProcess>}
					<button type="button" className={styles.taskOption}
						onClick={onSubmitUpdatedTask} disabled={isWaitingServerResponse}
					>✅</button>
				</div>
				</>
			}
		</div>
	)
};
