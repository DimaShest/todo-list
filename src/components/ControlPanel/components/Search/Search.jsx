import styles from './Search.module.css';

export const Search = ({ value, onChange }) => (
	<input type="text" className={styles.search}
		placeholder='Поиск'
		value={value}
		onChange={onChange}
	/>
);

