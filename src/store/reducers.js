import { LOAD_FRIENDS_LIST } from '../constants/storeConstans';
import { sortObjectByName } from '../helpers/utils.js';

const initialState = {
    friendsList: []
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_FRIENDS_LIST:
            return {
                ...state,
                friendsList: action.payload
            };
    }
    return state;
}