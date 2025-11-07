import { useContext } from 'react';
import styles from './Task.module.css';
import { AppSettersContext } from '../../../../../../context';
import { useRequestDeleteTask } from '../../../../../../hooks';

export const Task = ({ task }) => {
	const { setTasks, setUpdatedTask } = useContext(AppSettersContext);

	const { isDeleting, requestDeleteTask } = useRequestDeleteTask(task.id, setTasks)

	const onDeleteTask = () => {
		if(confirm('Вы точно хотите удалить задачу: «' + task.title + '»?'))
			requestDeleteTask(task);
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
