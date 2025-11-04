import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import
	{ TaskPage, TaskAdditionPage, TasksListPage, NotFound, ErrConnectionServer, TaskNotExist }
	from './pages';


export const App = () => (
	<>
		<Outlet />
		<Routes>
			<Route path="/" element={<TasksListPage />}/>
			<Route path="/task" element={<TaskAdditionPage />}/>
			<Route path="/task/:id" element={<TaskPage />}/>
			<Route path="/404" element={<NotFound />}/>
			<Route path="/err-connection-server" element={<ErrConnectionServer />}/>
			<Route path="/task-not-exist" element={<TaskNotExist />}/>
			<Route path="*" element={<Navigate to="/404"/>}/>
		</Routes>
	</>
);

