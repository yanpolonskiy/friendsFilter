import * as constants from '../constants/storeConstans';
import { getIdsFromCookie } from '../helpers/utils.js';
import { initialState } from './store';

export const friendsListReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.LOAD_FRIENDS_LIST:
            return {
                ...state,
                friendsList: action.payload
            };

        case constants.ADD_ID_FRIENDS_FILTER:
            return {
                ...state,
                filterIds: [].concat(state.filterIds, action.payload)
            };

        case constants.REMOVE_ID_FRIENDS_FILTER:
            return {
                ...state,
                filterIds: state.filterIds.filter((item) => {
                    return item !== action.payload;
                })
            }

        case constants.CHANGE_SEARCH_WORD:
            return {
                ...state,
                searchWord: action.payload
            }

        case constants.CHANGE_SEARCH_WORD_FILTER:
            return {
                ...state,
                searchWordFilter: action.payload
            }

        case constants.LOAD_FILTERED_IDS:
            return {
                ...state,
                filterIds: action.payload
            }
    }
    return state;
}