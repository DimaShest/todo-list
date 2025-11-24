import { useSelector } from 'react-redux';
import styles from './ControlPanel.module.css';
import { Search, Sort } from './components';
import { CHANGE_IS_SORTING, setSearchValue } from '../../actions/conrolPanelActions';

export const ConrolPanel = ({ dispatch }) =>  {
	const searchValue = useSelector((state) => state.controlPanelState.searchValue);
	const isSorting = useSelector((state) => state.controlPanelState.isSorting);
	const sortValue = isSorting ? 'Отменить сортировку' : 'Отсортировать по алфавиту';

	const changeSearchValue = ({target}) =>
		dispatch(setSearchValue(target.value));
	const onSorting = () => dispatch(CHANGE_IS_SORTING);

	return (
		<div className={styles.controlPanel}>
			<Search value={searchValue} onChange={changeSearchValue}/>
			<Sort value={sortValue} onClick={onSorting}/>
		</div>
	)
}
