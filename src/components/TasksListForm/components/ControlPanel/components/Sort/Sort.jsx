import { useContext } from 'react';
import styles from './Sort.module.css';
import { ControlPanelDataContext } from '../../../../context';

export const Sort = () => {
	const { isSorting, setIsSorting } = useContext(ControlPanelDataContext);

	return (
		<button className={styles.sort} type="button"
			onClick={() => setIsSorting(!isSorting)}
		>
			{isSorting ? 'Отменить сортировку' : 'Отсортировать по алфавиту'}
		</button>
	);
}
