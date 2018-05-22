import { LOAD_CITIES_LIST, SORT_CITIES_LIST } from '../constants/storeConstans';
import { sortObjectByName } from '../helpers/utils.js';

const initialState = {
    sortOrder: 0,
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
            console.log(state.sortOrder);
            if (state.sortOrder === 0)
                return {
                    ...state,
                    citiesList: [].concat(state.citiesList.sort(sortObjectByName)),
                    sortOrder: 1
                }
            else
                return {
                    ...state,
                    citiesList: [].concat(state.citiesList).reverse(),
                    sortOrder: state.sortOrder === 1 ? -1 : 1
                }
    }
    return state;
}