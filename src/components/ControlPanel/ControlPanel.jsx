import { useSelector } from 'react-redux';
import styles from './ControlPanel.module.css';
import { Search, Sort } from './components';

export const ConrolPanel = ({ dispatch }) =>  {
	const searchValue = useSelector((state) => state.controlPanelState.searchValue);
	const isSorting = useSelector((state) => state.controlPanelState.isSorting);
	const sortValue = isSorting ? 'Отменить сортировку' : 'Отсортировать по алфавиту';

	const changeSearchValue = ({target}) =>
		dispatch({ type: 'SET_SEARCH_VALUE', payload: target.value });
	const onSorting = () => dispatch({ type: 'SET_IS_SORTING', payload: !isSorting });

	return (
		<div className={styles.controlPanel}>
			<Search value={searchValue} onChange={changeSearchValue}/>
			<Sort value={sortValue} onClick={onSorting}/>
		</div>
	)
}
