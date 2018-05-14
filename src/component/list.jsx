import React, { Component } from 'react';

import Task from './task.jsx';
import { guid, filtration } from '../helpers/utils.js';
import { FilterInput } from './FilterInput.jsx';

export class TheList extends Component {

    constructor(props) {

        super(props)
        this.addTask = this.addTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
        this.sort = this.sort.bind(this);
        this.filter = this.filter.bind(this);
        

        this.state = {
            tasks: this.props.tasks,
            filterWord: '',
            activeId: 1234
        }

        
    }


    addTask() {

        let title = prompt("Введите Таск", "Новое задание");
        let description = prompt("Введите Описание", "Описание");
        let id = guid();

        this.setState({

            tasks: [].concat(this.state.tasks, {
                id,
                title: title,
                description,
                addedDate: new Date().toString()

            }),
        })

    }

    deleteTask(id) {

        const _tasks = [].concat(this.state.tasks)

        this.setState({
            tasks: _tasks.filter((item, index) => item.id !== id)
        })

    }

    filter(word) {

        this.setState({
            filterWord: word
        })

    }

    sort() {

        const { tasks } = this.state
        const _tasks = [].concat(tasks)

        _tasks.sort((a, b) => {

            if (Date.parse(a.addedDate) < Date.parse(b.addedDate)) {
                return -1
            }

            if (Date.parse(a.addedDate) > Date.parse(b.addedDate)) {
                return 1
            }
            return 0
        })

        this.setState({

            tasks: _tasks,

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

    render() {
      //  console.log(this.state.activeId);
        let taskRender = filtration(this.state.tasks, 'description',
            this.state.filterWord).map((task, i) =>
                <Task activeId={this.state.activeId} key={task.id} deleteTask={this.deleteTask} setActiveTask={this.setActiveTask.bind(this)} {...task} />)
               
        return (
            <article>
                <header>
                    <h1>To Do List</h1>
                </header>
                <ul className='taskList'>
                    <div className="functions">
                        <button onClick={this.addTask}>Add new Task</button>                        
                        <button onClick={this.deleteActiveTask}>Удалить</button>
                        <button onClick={this.editActiveTask}>Редактировать</button>
                        <button onClick={this.sort}>Sort</button>
                        <FilterInput filter={this.filter} />
                    </div>
                    <li className="headRow">
                        <span>Название</span>
                        <span>Дата добавления</span>
                        <span>Кнопка удалить</span>
                    </li>
                    
                    {taskRender}
                    
                </ul>
            </article>)
    }

}
