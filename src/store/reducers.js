import { LOAD_CITIES_LIST, SORT_CITIES_LIST } from './constNames.js';

const initialState = {
    CitiesList: []
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_CITIES_LIST:
            return { CitiesList: action.payload };
        case SORT_CITIES_LIST:
            return { CitiesList: action.payload };
    }
    return state;
}