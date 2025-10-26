import { useState } from 'react';
import styles from './App.module.css';
import { TasksListForm, TaskAdditionForm } from './components';
import { useRequestGetAllTasks } from './hooks';
import { UpdatingTaskForm } from './components/UpdatingTaskForm/UpdatingTaskForm';

export const App = () => {
	const {isLoading, tasks} = useRequestGetAllTasks();

	const [updatedTask, setUpdatedTask] = useState({});

	return (
		<div className={styles.App}>
			<h2 className={styles.todoListTitle}>Todo list</h2>
			<TaskAdditionForm/>
			{(Object.keys(updatedTask).length !== 0)
				? <UpdatingTaskForm
					updatedTask={updatedTask}
					setUpdatedTask={setUpdatedTask}
				/>
				:<TasksListForm
					isLoading={isLoading}
					tasks={tasks}
					setUpdatedTask={setUpdatedTask}
				/>
			}
		</div>
	);
};
