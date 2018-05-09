import React, { Component } from 'react';

import { Task } from './task.jsx';
import { guid } from '../helpers/utils.js';

export class TheList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tasks: props.tasks
    }

    this.addTask = this.addTask.bind(this)
    this.deleteTask = this.deleteTask.bind(this)
    this.sort = this.sort.bind(this)
  }

  addTask() {
    const { tasks } = this.state
    let description = prompt("Введите Таск", "Новое задание");

    this.setState({
      tasks: [].concat(tasks, {
        id: guid(),
        description: description,
        addedDate: new Date().toString()
      })
    })

  }

  deleteTask(id) {

    const { tasks } = this.state
    const _tasks = [].concat(tasks)


    this.setState({
      tasks: _tasks.filter((item, index) => {
        console.log(item.id);
        console.log(id);
        return item.id !== id
      })
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
      tasks: _tasks
    })
  }

  render() {

    return (<article>
      <header>
        <h1>To Do List</h1>
      </header>
      <ul className='taskList'>
      <li className="headRow">
        <span>Описание</span>
        <span>Дата добавления</span>
        <span>Кнопка удалить</span>
      </li>
        {this.state.tasks.map((task, i) => (
          <Task key={guid()} id={guid()} deleteTask={this.deleteTask} {...task} />))}
      </ul>
      <button onClick={this.addTask}>Add new Task</button>
      <button onClick={this.sort}>Sort</button>
    </article>)
  }

}
