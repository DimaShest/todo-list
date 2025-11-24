import { useEffect, useState } from 'react';
import styles from './TasksList.module.css';
import { Task } from './components';
import { useSelector } from 'react-redux';
import { searchingTasksDebounce, sortTasksByTitlesAlphabet } from './utils';

export const TaskList = ({ dispatch }) =>  {
	const [displayingTasks, setDisplayingTasks] = useState([]);
	const tasks = useSelector((state) => state.tasksState.tasks)

	const searchValue = useSelector((state) => state.controlPanelState.searchValue);
	const isSorting = useSelector((state) => state.controlPanelState.isSorting);

	useEffect(() => {
		if(displayingTasks.length !== 0 || searchValue != '') {
			refreshDisplayingTasks();
		} else if (tasks.length !== 0) {
			setDisplayingTasks(tasks);
		}
	}, [tasks, displayingTasks, searchValue, isSorting])

	const refreshDisplayingTasks = () => {
		const sortedTasks = isSorting ? sortTasksByTitlesAlphabet(tasks) : tasks;
		searchingTasksDebounce(sortedTasks, searchValue, setDisplayingTasks);
	}

	 return (
		<>
			{searchValue !== '' && <label>Найденные задачи: </label>}
			{displayingTasks.length === 0 && <label>задачи отсутствуют</label>}
			<div className={styles.tasksList}>
					{displayingTasks.map((task, index) => (
						<div key={task.id}>
							<Task task={task} dispatch={dispatch}/>
							{index !== displayingTasks.length - 1
								&& <div className={styles.line}></div>}
						</div>
					))}
			</div>
		</>
	)
}

