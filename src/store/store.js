import { combineReducers } from 'redux';
import { createStore } from 'redux';

import { friendsListReducer } from './reducers';

export const initialState = {
    friendsList: [],
    filterIds: [],
    searchWord: '',
    searchWordFilter: '',
    draggableId: 1
}

const allReducers = combineReducers({
    friendsListReducer
})

export const store = createStore(allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__());