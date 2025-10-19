import { useEffect, useState } from 'react';
import styles from './App.module.css';

export const App = () => {
	const [tasks, setTasks] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);

		fetch('https://jsonplaceholder.typicode.com/todos')
			.then((loadedTasksJSON) => loadedTasksJSON.json())
			.then((loadedTasks) => setTasks(loadedTasks))
			.finally(() => setIsLoading(false));
	}, []);

	return (
		<div className={styles.App}>
			<h2 className={styles.listTitle}>Todo list</h2>
			<div className={styles.tasksList}>
				{isLoading
				? <div className={styles.loader}></div>
				: tasks.map((task, index) => (
					<div key={task.id}>
						<div className={styles.task}>
							<div className={styles.taskTitle}>{task.title}</div>
							<input className={styles.taskCompleted} type='checkbox'
								checked={task.completed}
								readOnly={true}
							/>
						</div>
						{index !== tasks.length - 1  && <div className={styles.line}></div>}
					</div>
				))}
			</div>
		</div>
	);
};
