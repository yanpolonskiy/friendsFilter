import React, { Component } from 'react';
import { parseVkDate, getVkAge } from '../../helpers/utils.js';

import './FriendsItem.less';
export default (props) => {    
    return (
        <li className="friends-item">
            <div><img src={props.friendPhoto}/></div>
            <div><span className="friendsFullName">{props.friendFullName}</span></div>
            <div><span className="birth-date">{parseVkDate(props.friendBirthDate)}</span></div>
            <div><span className="age">{getVkAge(props.friendBirthDate)}</span></div>
        </li>)
}


