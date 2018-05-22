import React, { Component } from 'react';
import './CityItem.less';

export default (props) => {
    return (
        <li className="CityItem">
            <span className="cityName">{props.cityName}</span>
        </li>)
}
