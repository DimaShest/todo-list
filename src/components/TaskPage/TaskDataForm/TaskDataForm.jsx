import styles from './TaskDataForm.module.css';

export const TaskDataForm = ({ task, setIsEditing, onCompleteChange, isDeleting, onDeleteTask}) => {


	return (
		<>
			<div className={styles.task}>
				<input className={styles.completed} type="checkbox"
					checked={task.completed || ''}
					onChange={onCompleteChange}
				/>
				<div className={styles.title}>{task.title}</div>

				<button type="button" className={styles.taskOption}
					onClick={() => setIsEditing(true)}
					disabled={isDeleting}
				>✍</button>

				<button type="button" className={styles.taskOption}
					onClick={onDeleteTask}
					disabled={isDeleting}
				>❌</button>
			</div>
		</>
	)
};
