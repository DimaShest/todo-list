import styles from './App.module.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PROCESSES } from './constants';
import { Loader } from './components/UI';
import { ConrolPanel, TaskAdditionForm, TaskList, UpdatingTaskForm } from './components';
import { setTasksAsync } from './actions/tasksActions';


export const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setTasksAsync())
	}, [dispatch])

	const process = useSelector((state) => state.serverWorkState.process);
	const serverError = useSelector((state) => state.serverWorkState.serverError);
	const currentTask = useSelector((state) => state.tasksState.currentTask);

	return (
		<>
			{process === PROCESSES.LOADING
			?	<Loader />
			:	 <div className={styles.App}>
					{serverError !== ''
					? 	<div className={styles.pageTitle}>Ошибка подключения к серверу.</div>
					:	<>
							<h2 className={styles.pageTitle}>Список задач</h2>
							<TaskAdditionForm dispatch={dispatch}/>
							{(Object.keys(currentTask).length !== 0)
								?	<UpdatingTaskForm dispatch={dispatch}/>
								: 	<>
										<ConrolPanel dispatch={dispatch} />
										<TaskList dispatch={dispatch} />
									</>
							}

						</>
					}
				</div>
			}
		</>
	);
};
