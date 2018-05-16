import React, { Component } from 'react';

import Task from './task.jsx';
import { guid, filtration } from '../helpers/utils.js';
import { FilterInput } from './FilterInput.jsx';

export class TheList extends Component {

    constructor(props) {
        super(props)
     
    }
    
    render() {                  
        return(this.props.tasks.map((task) => <Task key={task.id} activeId={this.props.activeId} selectActive={this.props.selectActive} openToEdit={this.props.openToEdit} {...task}/>))            
    }

}
