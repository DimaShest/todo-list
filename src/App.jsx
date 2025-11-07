import { useState } from 'react';
import styles from './App.module.css';
import { AppSettersContext } from './context';
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
								:	<AppSettersContext value={{ setTasks, setUpdatedTask }}>
										<TasksListForm
											tasks={tasks}
										/>
									</AppSettersContext>
							}
						</>
					}
				</div>
			}
		</>
	);
};
