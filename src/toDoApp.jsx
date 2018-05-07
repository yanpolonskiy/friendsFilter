import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import TheList from './list.jsx';
import taskMassive from './task.jsx';


ReactDOM.render( 
    <TheList tasks={taskMassive}/>, 
    document.getElementById('react-container') 
  )
