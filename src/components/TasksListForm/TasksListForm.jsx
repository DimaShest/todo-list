import { useEffect, useState } from 'react';
import { searchingTasksDebounce, sortTasksByTitlesAlphabet } from './utils';
import { ConrolPanel, TaskList } from './components';

export const TasksListForm = ({ setUpdatedTask, tasks, setTasks }) => {
	const [displayingTasks, setDisplayingTasks] = useState([]);
	const [isSorting, setIsSorting] = useState(false);
	const [searchValue, setSearchValue] = useState('');

	useEffect(() => {
		setDisplayingTasks(tasks);
	}, [tasks])

	const refreshDisplayingTasks = () => {
		const sortedTasks = isSorting ? sortTasksByTitlesAlphabet(tasks) : tasks;
		searchingTasksDebounce(sortedTasks, searchValue, setDisplayingTasks);
	}

	refreshDisplayingTasks();

	return (
		<>
			<ConrolPanel searchValue={searchValue} setSearchValue={setSearchValue} isSorting={isSorting} setIsSorting={setIsSorting} />
			<TaskList displayingTasks={displayingTasks} setTasks={setTasks} setUpdatedTask={setUpdatedTask} searchValue={searchValue}/>
		</>
	)
}
