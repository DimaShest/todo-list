import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';
import { tasksReducer, serverWorkReducer, controlPanelReducer } from './reducers';

const reducer = combineReducers({
	tasksState: tasksReducer,
	serverWorkState: serverWorkReducer,
	controlPanelState: controlPanelReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
