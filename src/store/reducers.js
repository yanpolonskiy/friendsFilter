import { LOAD_CITIES_LIST, SORT_CITIES_LIST, FILTER_CITIES_LIST, CHANGE_FILTER_WORD } from '../constants/storeConstans';
import { sortObjectByName } from '../helpers/utils.js';

const initialState = {
    sortOrder: 0,
    filterWord: '',
    citiesList: []
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {

        case LOAD_CITIES_LIST:
            return {
                ...state,
                citiesList: action.payload
            };

        case SORT_CITIES_LIST:
            if (state.sortOrder === 0)
                return {
                    ...state,
                    citiesList: [].concat(state.citiesList.sort(sortObjectByName)),
                    sortOrder: 1
                };
            else
                return {
                    ...state,
                    citiesList: [].concat(state.citiesList).reverse(),
                    sortOrder: state.sortOrder === 1 ? -1 : 1
                };

        case CHANGE_FILTER_WORD:
            return {...state, filterWord: action.payload };
    }
    return state;
}