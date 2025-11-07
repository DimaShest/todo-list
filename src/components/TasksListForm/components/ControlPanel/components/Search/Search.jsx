import styles from './Search.module.css';

export const Search = ({ searchValue, setSearchValue }) => (
	<input type="text" className={styles.search}
		placeholder='Поиск'
		value={searchValue} onChange={({ target }) => setSearchValue(target.value)}
	/>
);
