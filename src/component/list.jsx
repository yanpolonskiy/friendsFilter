import React, { Component } from 'react';

import { Task } from './task.jsx';
import { guid, filtration } from '../helpers/utils.js';

export class TheList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tasks: props.tasks,
      displayTasks: props.tasks
    }

    this.addTask = this.addTask.bind(this)
    this.deleteTask = this.deleteTask.bind(this)
    this.sort = this.sort.bind(this)
    this.filter = this.filter.bind(this)
  }

  addTask() {
    const { tasks } = this.state
    let description = prompt("Введите Таск", "Новое задание");

    this.setState({
      tasks: [].concat(tasks, {
        id: guid(),
        description: description,
        addedDate: new Date().toString()
      }),
      displayTasks: [].concat(tasks, {
        id: guid(),
        description,
        addedDate: new Date().toString()
      })
    })

  }

  deleteTask(id) {

    const { tasks } = this.state
    const _tasks = [].concat(tasks)


    this.setState({
      tasks: _tasks.filter((item, index) => {
         return item.id !== id
      }),
      displayTasks: tasks.filter((item, index) => {
        return item.id !== id
     })
    })

  }

  filter() {
    let word = document.querySelector(".listFilter").value; 
  
    this.setState( {
      displayTasks: filtration(this.state.tasks.slice(), 'description', word)
  }) 
}

  sort() {
    const { tasks } = this.state
    const _tasks = [].concat(tasks)
    console.log(_tasks);
    _tasks.sort((a, b) => {

      if (Date.parse(a.addedDate) < Date.parse(b.addedDate)) {
        return -1
      }

      if (Date.parse(a.addedDate) > Date.parse(b.addedDate)) {

        return 1
      }

      return 0

    }

    )
    console.log(_tasks);
    this.setState({
      tasks: _tasks,
      displayTasks: tasks
    })
  }

  render() {
   let li = this.state.displayTasks.map((task, i) => (
    <Task key={task.id} deleteTask={this.deleteTask} {...task} />))
    return (<article>
      <header>
        <h1>To Do List</h1>
      </header>
      <ul className='taskList'>
      <div className="functions">
      <button onClick={this.addTask}>Add new Task</button>
      <button onClick={this.sort}>Sort</button>
      <input type="text" className="listFilter" onInput={this.filter} placeholder="Введите описание"></input>
      </div>
      <li className="headRow">
        <span>Описание</span>
        <span>Дата добавления</span>
        <span>Кнопка удалить</span>
      </li>
        {li}
      </ul>
      
    </article>)
  }

}
