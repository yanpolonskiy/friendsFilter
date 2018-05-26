import { LOAD_FRIENDS_LIST } from '../constants/storeConstans';
import { sortObjectByName } from '../helpers/utils'

export const loadFriendsList = (friendsList) => {
    return {
        type: LOAD_FRIENDS_LIST,
        payload: friendsList
    };
};