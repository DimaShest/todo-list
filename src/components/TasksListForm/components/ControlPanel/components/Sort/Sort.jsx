import styles from './Sort.module.css';

export const Sort = ({ isSorting, setIsSorting }) => (
	<button className={styles.sort} type="button"
		onClick={() => setIsSorting(!isSorting)}
	>
		{isSorting ? 'Отменить сортировку' : 'Отсортировать по алфавиту'}
	</button>
);
