import { LOAD_CITIES_LIST, SORT_CITIES_LIST, CHANGE_FILTER_WORD, FILTER_CITIES_LIST } from '../constants/storeConstans';
import { sortObjectByName } from '../helpers/utils'

export const loadCitiesList = (сitiesList) => {
    return {
        type: LOAD_CITIES_LIST,
        payload: сitiesList
    };
};

export const sortCitiesList = () => {
    return {
        type: SORT_CITIES_LIST,
    };
};

export const changeFilterWord = (word) => {
    return {
        type: CHANGE_FILTER_WORD,
        payload: word
    };
};