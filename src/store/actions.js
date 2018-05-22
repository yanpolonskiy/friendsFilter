import { LOAD_CITIES_LIST, SORT_CITIES_LIST } from '../constants/storeConstans';
import { sortObjectByName } from '../helpers/utils'

export const loadCitiesList = (сitiesList) => {
    return {
        type: LOAD_CITIES_LIST,
        payload: сitiesList
    }
}

export const sortCitiesList = () => {
    return {
        type: SORT_CITIES_LIST,
    }
}