import { useSelector } from 'react-redux';
import styles from './Task.module.css';
import { deleteTaskAsync, setCurrentTask } from '../../../../actions';
import { NoticeProcess } from '../../../UI';
import { PROCESSES } from '../../../../constants/processes';

export const Task = ({ task, dispatch }) => {
	const isWaitingServerResponse = useSelector((state) => state.serverWorkState.isWaitingServerResponse);
	const process = useSelector((state) => state.serverWorkState.process);

	const onDeleteTask = () => {
		if(confirm('Вы точно хотите удалить задачу: «' + task.title + '»?'))
			dispatch(deleteTaskAsync(task));
	}

	const onUpdatingTaskForm = () => {
		dispatch(setCurrentTask(task));
	}

	return (
		<div className={styles.task}>
			<input className={styles.completed} type="checkbox"
				checked={task.completed} readOnly
			/>
			<div className={styles.title}>{task.title}</div>
			<button type="button" className={styles.taskOption}
				onClick={onUpdatingTaskForm}
				disabled={isWaitingServerResponse}
			>✍</button>
			{isWaitingServerResponse && process === PROCESSES.DELETING
				&& <NoticeProcess>{PROCESSES.DELETING}...</NoticeProcess>}
				<button type="button" className={styles.taskOption}
					onClick={onDeleteTask}
					disabled={isWaitingServerResponse }
				>❌</button>
		</div>
	)
};
