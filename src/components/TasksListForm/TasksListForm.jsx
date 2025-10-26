import { useEffect, useState } from 'react';
import _ from 'lodash';
import styles from './TasksListForm.module.css';
import { Task } from '../';
import { sortTasksByTitlesAlphabet } from './sortTasksByTitlesAlphabet';
import { searchingTasksDebounce } from './searchingTasks.js';


export const TasksListForm = ({isLoading, setUpdatedTask, tasks, refreshTasks}) => {
	const [displayingTasks, setDisplayingTasks] = useState([]);
	const [isSorting, setIsSorting] = useState(false);
	const [searchValue, setSearchValue] = useState('');

	useEffect(() => {
		setDisplayingTasks(tasks);
	}, [tasks])

	const refreshDisplayingTasks = (search, currentIsSorting) => {
		const sortedTasks = currentIsSorting ? sortTasksByTitlesAlphabet(tasks) : tasks;
		searchingTasksDebounce(sortedTasks, search, setDisplayingTasks);
	}

	const onSearchValueChange = (event) => {
		setSearchValue(event.target.value);
		refreshDisplayingTasks(event.target.value, isSorting);
	}

	const onSortingTasks = () => {
		refreshDisplayingTasks(searchValue, !isSorting)
		setIsSorting(!isSorting);
	}

	return (
		<div>
			<div>Список задач</div>
			<div className={styles.flexRow}>
				<input type="text" className={styles.search}
				placeholder='Поиск'
				value={searchValue} onChange={onSearchValueChange}
				/>
				<button className={styles.btn} type="button"
					onClick={onSortingTasks}
				>{isSorting ? 'Отменить сортировку' : 'Отсортировать по алфавиту'}</button>
			</div>
			{searchValue !== '' && <label>Найденные задачи: </label>}
			{(displayingTasks.length === 0 && !isLoading) && <label>Задачи отсутствуют </label>}

			<div className={styles.tasksList}>
				{isLoading
				? <div className={styles.loader}></div>
				:  displayingTasks.map((task, index) => (
					<div key={task.id}>
						<Task
							task={task}
							refreshTasks={refreshTasks}
							setUpdatedTask={setUpdatedTask}
						/>
						{index !== displayingTasks.length - 1  && <div className={styles.line}></div>}
					</div>
				))}
			</div>
		</div>
	)
}
