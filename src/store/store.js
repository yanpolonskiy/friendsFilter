import { combineReducers, compose, applyMiddleware } from 'redux';
import { createStore } from 'redux';
import thunk from 'redux-thunk';

import { friendsListReducer } from './reducers';

export const initialState = {
    friendsList: [],
    filterIds: [],
    searchWord: '',
    searchWordFilter: '',
    dragableId: ''
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE_ || compose;

const allReducers = combineReducers({
    friendsListReducer
})

export const store = createStore(allReducers,
    composeEnhancers(applyMiddleware(thunk)));