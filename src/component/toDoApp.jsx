import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { TheList } from './list.jsx';
import { guid } from '../helpers/utils.js';
import { ItemWindow } from "./ItemWindow.jsx";

export class ToDoApp extends Component {
    constructor(props) {
        super(props)
    
        this.showActiveTask = this.showActiveTask.bind(this);
        this.state = {
            activeTask: []
        }
    }

    showActiveTask(task) {
      
        this.setState({
            activeTask: task
        })
    }

    render() {
        console.log("rerender");
        console.log(this.state.activeTask);
   return(
  
    <div id="react-container">
        <div className="list-container"  >
        <TheList tasks={[]} showActiveTask={this.showActiveTask} />
        </div>
        <ItemWindow task={this.state.activeTask} />
    </div>
   ) }


}