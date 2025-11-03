import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './TasksListPage.module.css';
import stylesApp from '../../App.module.css';
import { sortTasksByTitlesAlphabet, searchingTasksDebounce} from './utils';
import { Loader } from '../UI';

export const TasksListPage = ({ isLoading, tasks }) => {
	const [displayingTasks, setDisplayingTasks] = useState();
	const [isSorting, setIsSorting] = useState(false);
	const [searchValue, setSearchValue] = useState('');

	const navigate = useNavigate();

	useEffect(() => {
		setDisplayingTasks(tasks);
	}, [tasks]);

	const refreshDisplayingTasks = () => {
		const sortedTasks = isSorting ? sortTasksByTitlesAlphabet(tasks) : tasks;
		searchingTasksDebounce(sortedTasks, searchValue, setDisplayingTasks);
	}

	refreshDisplayingTasks();

	const onSearchValueChange = (event) => {
		setSearchValue(event.target.value);
	}

	const onSortingTasks = () => {
		setIsSorting(!isSorting);
	}

	return (
		<div>
			<title>Todo list - список задач</title>
			<h2 className={stylesApp.pageTitle}>Список задач</h2>

			<div className={styles.flexRow}>
				<input type="text" className={styles.search}
				placeholder='Поиск'
				value={searchValue} onChange={onSearchValueChange}
				/>
				<button className={`${stylesApp.button} ${styles.taskOption}`} type="button"
					onClick={onSortingTasks}
				>{isSorting ? 'Отменить сортировку' : 'Отсортировать по алфавиту'}</button>
				<button className={`${stylesApp.button} ${styles.taskOption}`}
					onClick={() => navigate('/task')}
				>┿</button>
			</div>
			{searchValue !== ''
			&&  <div className={styles.tasksListTitle}>Найденные задачи: </div>}

			{tasks && tasks.length === 0 && <div>Задачи отсутствуют </div>}

			<div className={styles.tasksList}>
				{isLoading || !displayingTasks
				? <Loader />
				:  displayingTasks.map((task, index) => (
					<div key={task.id}>
						<div className={styles.task}>
							<input className={styles.completed} type="checkbox"
								checked={task.completed}
								readOnly
							/>

							<Link to={`/task/${task.id}`} className={styles.title}>
							<div className={styles.title}>{task.title}</div>
							</Link>
						</div>
						{index !== displayingTasks.length - 1  && <div className={styles.line}></div>}
					</div>
				))}
			</div>
		</div>
	)
}
