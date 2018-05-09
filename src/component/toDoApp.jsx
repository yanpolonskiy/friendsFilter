import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import {TheList} from './list.jsx';
import {taskMassive} from './task.jsx';
import {guid} from '../helpers/utils.js';


let req = new XMLHttpRequest(); 

req.open('GET', 'src/data/tasks.json', true);

req.send();
req.onload = () => {
  
  let parsedReq = JSON.parse(req.response);
 parsedReq.map((item) => item.id = guid())
  ReactDOM.render( 
    <TheList tasks={parsedReq}/>, 
    document.getElementById('react-container') 
  )
}


