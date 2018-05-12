import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { TheList } from './list.jsx';
import { guid } from '../helpers/utils.js';



ReactDOM.render(
    <TheList tasks={[]} />,
    document.getElementById('react-container')
)