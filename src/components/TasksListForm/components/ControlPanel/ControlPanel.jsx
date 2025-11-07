import styles from './ControlPanel.module.css';
import { Search, Sort } from './components';

export const ConrolPanel = ({ searchValue, setSearchValue, isSorting, setIsSorting }) =>  (
	<div className={styles.controlPanel}>
		<Search searchValue={searchValue} setSearchValue={setSearchValue} />
		<Sort isSorting={isSorting} setIsSorting={setIsSorting} />
	</div>
)
