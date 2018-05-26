import React, { Component } from 'react';
import './List.less';

import FriendsItem from '../FriendsItem/FriendsItem.jsx';
import { guid, filtration } from '../../helpers/utils.js';

export const TheList = (props) => {
    return (
        <ul className="friends-list">
            {props.friendsList.map((friend, i) =>
                <FriendsItem key={guid()}
                    friendPhoto={friend.photo_50}
                    friendFullName={friend.first_name + " " + friend.last_name}
                    friendBirthDate={friend.bdate} />)
            }
        </ul>
    );
}
