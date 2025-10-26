import styles from './UpdatingTaskForm.module.css'
import { useRequestUpdateTask } from '../../hooks';
import { getTaskTitleError } from '../../validation/getTaskTitleError';

export const UpdatingTaskForm = ({ updatedTask, setUpdatedTask}) => {

	const {isUpdating, requestUpdateTask} = useRequestUpdateTask(updatedTask)

	const taskError = getTaskTitleError(updatedTask.title);

	const onSubmitUpdatedTask = () =>  {
		if (getTaskTitleError(updatedTask.title) === null) {
			requestUpdateTask();
			setUpdatedTask({});
		}
		else alert(getTaskTitleError(updatedTask.title));
	}

	return (
		<div>
			<div>Редактирование задачи</div>
			<div className={styles.task}>
				<input className={styles.taskCompleted} type="checkbox"
					checked={updatedTask.completed}
					onChange={(e) => setUpdatedTask({...updatedTask, completed: e.target.checked})}
				/>
				<div className={styles.updateTitleContainer}>
					<textarea type="text" className={styles.updateTitle}
					onChange={(e) =>
						setUpdatedTask({...updatedTask, title: e.target.value})}
					value={updatedTask.title}></textarea>
					<label className={styles.error}>{taskError}</label>
				</div>
				<div className={styles.flexColumn}>
					<button type="button" className={styles.taskOption}
						onClick={onSubmitUpdatedTask} disabled={isUpdating}
					>✅</button>
					<button type="button" className={styles.taskOption}
						onClick={() => {setUpdatedTask({});}}
					>❎</button>
				</div>
			</div>
		</div>
	)
};
