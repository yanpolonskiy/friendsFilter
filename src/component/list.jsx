import React, { Component } from 'react';

import CityItem from './CityItem.jsx';
import { guid, filtration } from '../helpers/utils.js';
import { FilterInput } from './FilterInput.jsx';

export const TheList = (props) => {
    return (
       props.citiesList.map((city, i) =>
            <CityItem key={guid()}
                cityName={ city.name } {...city} />)
    );
}
