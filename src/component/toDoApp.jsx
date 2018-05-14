import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { TheList } from './list.jsx';
import { guid } from '../helpers/utils.js';
import { ItemWindow } from "./ItemWindow.jsx";
import { Popup } from "./Popup.jsx";
import { PopupDeleter } from "./PopupDeleter.jsx";
import { PopupEditor } from "./PopupEditor.jsx";
import { filtration } from '../helpers/utils.js';

export class ToDoApp extends Component {
    constructor(props) {
        super(props)
    
        this.showActiveTask = this.showActiveTask.bind(this);
        this.state = {
            tasks: [],
            activeTask: []
        }
    }

    showActiveTask(task) {
      
        this.setState({
            activeTask: task
        })
    }
    

    componentDidMount() {
        let req = new XMLHttpRequest();

        req.open('GET', 'src/data/tasks.json', true);
        req.send();
        req.onload = () => {

            this.setState({
                tasks: JSON.parse(req.response)
            })
           
        }
    }

    

    render() {
        
   return(
  
    <div id="react-container">
        <div className="list-container"  >
        <TheList tasks={this.state.tasks} showActiveTask={this.showActiveTask} />
        </div>
        <ItemWindow task={this.state.activeTask} />
        <Popup id={0} activeId={this.state.activeTask.id}>
        <PopupDeleter/>
        <PopupEditor/>
        </Popup>
    </div>
   ) }


}