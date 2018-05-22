import React, { Component } from 'react';
import './List.less';

import CityItem from '../CityItem/CityItem.jsx';
import { guid, filtration } from '../../helpers/utils.js';

export const TheList = (props) => {
    return (
        <ul className="cityList">
            {props.citiesList.map((city, i) =>
                <CityItem key={guid()}
                    cityName={city.name} {...city} />)
            }
        </ul>
    );
}
