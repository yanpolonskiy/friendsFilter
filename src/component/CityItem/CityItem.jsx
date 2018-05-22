import React, { Component } from 'react';

export default (props) => {
    return (<li className="CityItem">
        <span className="cityName">{props.cityName}</span>
    </li>)
}
