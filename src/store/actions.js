import * as constants from '../constants/storeConstans';
import { sortObjectByName } from '../helpers/utils'

export const loadFriendsList = (friendsList) => {
    return {
        type: constants.LOAD_FRIENDS_LIST,
        payload: friendsList
    };
};

export const addId = (id) => {
    return {
        type: constants.ADD_ID_FRIENDS_FILTER,
        payload: id
    }
}

export const removeId = (id) => {
    return {
        type: constants.REMOVE_ID_FRIENDS_FILTER,
        payload: id
    }
}

export const changeSearchWord = (word) => {
    return {
        type: constants.CHANGE_SEARCH_WORD,
        payload: word
    }
}

export const changeSearchWordFilter = (word) => {
    return {
        type: constants.CHANGE_SEARCH_WORD_FILTER,
        payload: word
    }
}