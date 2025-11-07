import { useEffect, useState } from 'react';
import { searchingTasksDebounce, sortTasksByTitlesAlphabet } from './utils';
import { ControlPanelDataContext } from './context';
import { ConrolPanel, TaskList } from './components';

export const TasksListForm = ({ tasks }) => {
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
			<ControlPanelDataContext value={{ searchValue, setSearchValue, isSorting, setIsSorting }}>
				<ConrolPanel />
			</ControlPanelDataContext>
			<TaskList displayingTasks={displayingTasks} searchValue={searchValue}/>
		</>
	)
}
