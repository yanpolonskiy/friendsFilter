import React, {Component} from 'react';

import {Task} from './task.jsx';

export class TheList extends Component {
  constructor (props) {
    super(props)

    this.state = {
      tasks: props.tasks 
    }

    this.onClick = this.onClick.bind(this)
    this.deleteTask = this.deleteTask.bind(this)
  }

  onClick () {
    const {tasks} = this.state
    let description = prompt("Введите Таск", "Новое задание");
    
    this.setState({
      tasks: [].concat(tasks, { 
        description: description,
        addedDate: new Date().toString()
       })
  }) 
 
}

  deleteTask (key) {
   const {tasks} = this.state

tasks.splice(key, 1)
 

   this.setState({
    tasks: tasks
   })

  }

  render () {

    return (<article> 
      <header> 
        <h1>To Do List</h1> 
      </header> 
      <ul className='tasksList'> 
        {this.state.tasks.map((task, i) => (
       
        <Task key={i} id={i} deleteTask={this.deleteTask} {...task} />))} 
      </ul> 
      <button onClick={this.onClick}>Add new row</button>
    </article>)
  }

}
  