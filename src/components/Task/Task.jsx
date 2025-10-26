import styles from './Task.module.css'
import { useRequestDeleteTask } from '../../hooks';

export const Task = ({setUpdatedTask, task}) => {
	const {isDeleting, requestDeleteTask} = useRequestDeleteTask(task.id)

	const onDeleteTask = () => {
		if(confirm('Вы точно хотите удалить задачу: «' + task.title + '»?'))
			requestDeleteTask();
	}

	return (
		<div className={styles.task}>
			<input className={styles.completed} type="checkbox"
				checked={task.completed} readOnly
			/>
			<div className={styles.title}>{task.title}</div>
			<button type="button" className={styles.taskOption}
				onClick={() => {setUpdatedTask(task);}}
			>✍</button>
			<button type="button" className={styles.taskOption}
				onClick={onDeleteTask}
				disabled={isDeleting}
			>❌</button>
		</div>
	)
};
