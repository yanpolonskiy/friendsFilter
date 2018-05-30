import * as constants from '../constants/storeConstans';
import { sortObjectByName, getIdsFromCookie } from '../helpers/utils'

export const loadFriendsList = (friendsList) => {
    return {
        type: constants.LOAD_FRIENDS_LIST,
        payload: friendsList
    };
};

export const loadFriendsIds = () => {
    return {
        type: constants.LOAD_FILTERED_IDS,
        payload: getIdsFromCookie()
    }
}

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

export const changeDraggableId = (id) => {
    return {
        type: constants.CHANGE_DRAGGABLE_ID,
        payload: id
    }
}

export const updateFilterByDrag = (isFilter) => {
    return {
        type: constants.UPDATE_FILTER_BY_DRAG,
        isFilter,
    }
}