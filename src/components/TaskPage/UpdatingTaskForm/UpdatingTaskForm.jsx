import styles from './UpdatingTaskForm.module.css'

export const UpdatingTaskForm = ({ task, setTask, isUpdating, onSubmitUpdatedTask }) => {

	return (
		<>
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
					<label className={styles.error}>{}</label>
				</div>

				<button type="button" className={styles.taskOption}
					disabled={isUpdating} onClick={onSubmitUpdatedTask}
				>✅</button>
			</div>
		</>
	)
};
