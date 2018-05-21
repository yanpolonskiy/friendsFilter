import { LOAD_CITIES_LIST, SORT_CITIES_LIST } from './constNames.js';
import { sortObjectByName } from '../helpers/utils'

export const loadCitiesList = (CitiesList) => {
    return {
        type: LOAD_CITIES_LIST,
        payload: CitiesList
    }
}

export const sortCitiesList = (CitiesList) => {
    return {
        type: SORT_CITIES_LIST,
        payload: CitiesList.sort(sortObjectByName)
    }
}