import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import styles from './App.module.css';
import
	{ TaskPage, TaskAdditionPage, TasksListPage, NotFound, ErrConnectionServer }
	from './components';
import { Loader } from './components/UI';
import { useRequestGetAllTasks } from './hooks';

export const App = () => {
	const { tasks, setTasks, isLoading} = useRequestGetAllTasks();

	return (
		<>
			{isLoading
			?	<Loader />
			:	<div className={styles.App}>
					<Outlet />
					<Routes>
						<Route path="/" element={
							<TasksListPage tasks={tasks}/>
						}/>
						<Route path="/task" element={
								<TaskAdditionPage setTasks={setTasks}/>
						}/>
						<Route path="/task/:id" element={
							<TaskPage
								tasks={tasks} setTasks={setTasks}
							/>
						}/>
						<Route path="/404" element={<NotFound />}/>
						<Route path="/err-connection-server" element={<ErrConnectionServer />}/>
						<Route path="*" element={<Navigate to="/404"/>}/>
					</Routes>
				</div>
			}
		</>
	);
};
