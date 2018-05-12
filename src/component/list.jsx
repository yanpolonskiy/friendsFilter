import React, { Component } from 'react';

import Task from './task.jsx';
import { guid, filtration } from '../helpers/utils.js';
import { FilterInput } from './FilterInput.jsx';

export class TheList extends Component {

    constructor(props) {

        super(props)

        this.state = {
            tasks: props.tasks,
            filterWord: ''
        }

        this.addTask = this.addTask.bind(this)
        this.deleteTask = this.deleteTask.bind(this)
        this.sort = this.sort.bind(this)
        this.filter = this.filter.bind(this)

    }

    addTask() {

        let description = prompt("Введите Таск", "Новое задание");
        let id = guid();

        this.setState({

            tasks: [].concat(this.state.tasks, {
                id,
                description: description,
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

    componentDidMount() {
        let req = new XMLHttpRequest();

        req.open('GET', 'src/data/tasks.json', true);
        req.send();
        req.onload = () => {

            let parsedReq = JSON.parse(req.response);
            this.setState({
                tasks: parsedReq
            })

        }
    }

    render() {

        let taskRender = filtration(this.state.tasks, 'description',
            this.state.filterWord).map((task, i) =>
                <Task key={task.id} deleteTask={this.deleteTask} {...task} />)

        return (
            <article>
                <header>
                    <h1>To Do List</h1>
                </header>
                <ul className='taskList'>
                    <div className="functions">
                        <button onClick={this.addTask}>Add new Task</button>
                        <button onClick={this.sort}>Sort</button>
                        <FilterInput filter={this.filter} />
                    </div>
                    <li className="headRow">
                        <span>Описание</span>
                        <span>Дата добавления</span>
                        <span>Кнопка удалить</span>
                    </li>

                    {taskRender}
                    
                </ul>
            </article>)
    }

}
