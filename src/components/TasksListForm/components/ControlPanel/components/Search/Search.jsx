import { useContext } from 'react';
import styles from './Search.module.css';
import { ControlPanelDataContext } from '../../../../context';

export const Search = () => {
	const { searchValue, setSearchValue } = useContext(ControlPanelDataContext);

	return (
		<input type="text" className={styles.search}
			placeholder='Поиск'
			value={searchValue} onChange={({ target }) => setSearchValue(target.value)}
		/>
	);
}
