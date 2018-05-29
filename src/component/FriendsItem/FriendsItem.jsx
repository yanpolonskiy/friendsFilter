import React, { Component } from 'react';
import { parseVkDate, getVkAge } from '../../helpers/utils.js';

import './FriendsItem.less';
export default (props) => {
    let filtration = () => {
        props.filter(props.friendId);
    }
    return (
        <li className="friends-item">
            <div className="photo">
                <img src={props.friendPhoto} />
            </div>
            <div className="friend-full-name">
                <span>{props.friendFullName}</span>
            </div>
            <button onClick={filtration}>
                OK
            </button>
        </li>)
}


