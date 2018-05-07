import TheList from './list.jsx';
import ReactDOM from 'react-dom';
import React, {Component} from 'react';
import taskMassive from './task.jsx';


ReactDOM.render( 
    <TheList tasks={taskMassive}/>, 
    document.getElementById('react-container') 
  )
