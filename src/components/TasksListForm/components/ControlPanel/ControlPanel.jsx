import styles from './ControlPanel.module.css';
import { Search, Sort } from './components';

export const ConrolPanel = () =>  (
	<div className={styles.controlPanel}>
		<Search />
		<Sort />
	</div>
)
