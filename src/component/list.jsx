import React, { Component } from 'react';

import CityItem from './CityItem.jsx';
import { guid, filtration } from '../helpers/utils.js';
import { FilterInput } from './FilterInput.jsx';

export const TheList = (props) => {
    return (
       props.CitiesList.map((city, i) =>
            <CityItem key={i}
                cityName={ city.name } {...city} />)
    );
}


/*    */