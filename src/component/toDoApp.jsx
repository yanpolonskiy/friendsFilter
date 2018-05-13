import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { TheList } from './list.jsx';
import { guid } from '../helpers/utils.js';
import { ItemWindow } from "./ItemWindow.jsx";

export class ToDoApp extends Component {
    constructor(props) {
        super(props)
    }
    render() {

   return(
    <div id="react-container">
        <div className="list-container">
        <TheList tasks={[]} />
        </div>
        <div className="task-container">
        <ItemWindow task={{}} />
        </div>
    </div>
   ) }


}