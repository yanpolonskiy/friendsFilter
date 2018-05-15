import React, { Component } from 'react';

import Task from './task.jsx';
import { guid, filtration } from '../helpers/utils.js';
import { FilterInput } from './FilterInput.jsx';

export class TheList extends Component {

    constructor(props) {
        super(props)
     
    }
/*
    deleteTask(id) {

        const _tasks = [].concat(this.props.tasks)

        this.setState({
            tasks: _tasks.filter((item, index) => item.id !== id)
        })

    }

    filter(word) {

        this.setState({
            filterWord: word
        })

    }


   setActiveTask(id) {
   
    this.setState({
        activeId: id
    })
  
    this.props.showActiveTask(...[].concat(this.state.tasks).filter(item => {    
       return item.id === id

    }))
   }

   deleteActiveTask() {

   }
*/
    render() {                  
        return(this.props.tasks.map((task) => <Task key={task.id} activeId={this.props.activeId} selectActive={this.props.selectActive} {...task}/>))            
    }

}
