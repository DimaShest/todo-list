import styles from './TasksList.module.css';
import { Task } from './components';

export const TaskList = ( { displayingTasks, searchValue }) =>  (
	<>
		{searchValue !== '' && <label>Найденные задачи: </label>}
		{displayingTasks.length === 0 && <label>задачи отсутствуют</label>}
		<div className={styles.tasksList}>
				{displayingTasks.map((task, index) => (
					<div key={task.id}>
						<Task task={task}/>
						{index !== displayingTasks.length - 1
							&& <div className={styles.line}></div>}
					</div>
				))}
		</div>
	</>

)
