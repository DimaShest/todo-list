import { useState } from 'react';
import styles from './App.module.css';
import { TasksListForm, TaskAdditionForm, UpdatingTaskForm} from './components';
import { Loader } from './components/UI';
import { useRequestGetAllTasks } from './hooks';

export const App = () => {
	const {isLoading, tasks, setTasks, serverError} = useRequestGetAllTasks();

	const [updatedTask, setUpdatedTask] = useState({});

	return (
		<>
			{isLoading
			?	<Loader />
			:	 <div className={styles.App}>
					{serverError !== ''
					? 	<div>Ошибка подключения к серверу.</div>
					:	<>
							<h2 className={styles.todoListTitle}>Список задач</h2>
							<TaskAdditionForm
								setTasks={setTasks}
							/>
							{(Object.keys(updatedTask).length !== 0)
								?	<UpdatingTaskForm
										updatedTask={updatedTask}
										setUpdatedTask={setUpdatedTask}
										setTasks = {setTasks}
									/>
								:	<TasksListForm
										isLoading={isLoading}
										tasks={tasks}
										setUpdatedTask={setUpdatedTask}
										setTasks={setTasks}
									/>
							}
						</>
					}
				</div>
			}
		</>
	);
};
