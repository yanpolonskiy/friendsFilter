import React, {Component} from 'react';
import TheList from './list.jsx';
import ReactDOM from 'react-dom';

import taskMassive from './task.jsx';


ReactDOM.render( 
    <TheList tasks={taskMassive}/>, 
    document.getElementById('react-container') 
  )
