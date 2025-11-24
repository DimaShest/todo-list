import styles from './Sort.module.css';

export const Sort = ({ value, onClick}) => (
	<button className={styles.sort} type="button" onClick={onClick}>
		{value}
	</button>
);

