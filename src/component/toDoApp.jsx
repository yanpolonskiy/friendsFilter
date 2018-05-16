import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { TheList } from './list.jsx';
import { guid, filtration, getData } from '../helpers/utils.js';
import { ItemWindow } from "./ItemWindow.jsx";
import { Popup } from "./Popup.jsx";
import { PopupDeleter } from "./PopupDeleter.jsx";
import { PopupEditor } from "./PopupEditor.jsx";
import { FilterInput } from './FilterInput.jsx';

export class ToDoApp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tasks: [{ id: '', title: '', description: '', addedDate: '' }],
            activeId: '',
            isSort: false,
            filterWord: '',
            PopupId: -1,
            isVisible: false
        }
    }

    componentDidMount() {       
      getData('src/data/tasks.json').then(tasks => {
          this.setState({
              tasks
          });
      }, error => {
          console.log(error);
      })
    }

    addTask = () => {
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

    sort = () => {
        let _tasks = [];
        if (this.state.isSort) {
            _tasks = this.state.tasks.reverse();
        }

        else {
            _tasks = [].concat(this.state.tasks).sort((a, b) => {
                if (Date.parse(a.addedDate) < Date.parse(b.addedDate)) {
                    return -1
                }
                if (Date.parse(a.addedDate) > Date.parse(b.addedDate)) {
                    return 1
                }
                return 0
            })
            this.setState({
                isSort: true
            })
        }

        this.setState({
            tasks: _tasks,
        })
    }

    filter = () => {
        this.setState({
            filterWord: ReactDOM.findDOMNode(this.refs.filterInput).value
        })
    }

    selectActive = (id) => {
        this.setState({
            activeId: id
        })

    }

    openPopupDeleter = () => {
        this.setState({
            PopupId: 0,
            isVisible: true
        })
    }

    openPopupEditor = () => {
        this.setState({
            PopupId: 1,
            isVisible: true
        })
    }

    deleteActiveTask = () => {
        this.setState({
            tasks: [].concat(this.state.tasks).filter((item) => {
                return item.id !== this.state.activeId;
            })
        })
    }

    editActiveTask = (description, title, addedDate) => {     
            this.setState({
                tasks: [].concat(this.state.tasks).map((item) => {
                    if (item.id === this.state.activeId)
                        return {
                            id: item.id,
                            title,
                            description,
                            addedDate
                        };
                    return item;
                })
            })
        }
    

    closePopup = () => {
        this.setState({
            isVisible: false
        })
    }

    render() {
        let tasks = filtration(this.state.tasks, "title", this.state.filterWord);
        let task = this.state.tasks.filter((item => {
            return item.id === this.state.activeId;
        }))[0] ? this.state.tasks.filter((item => {
            return item.id === this.state.activeId;
        }))[0] : {title: "", description: ""}
        return (
            <div id="react-container">
                <div id="list-container">
                    <div className="functions">
                        <button onClick={this.addTask}>Add new Task</button>
                        <button onClick={this.openPopupDeleter}>Удалить</button>
                        <button onClick={this.openPopupEditor}>Редактировать</button>
                        <button onClick={this.sort}>Sort</button>
                        <FilterInput ref="filterInput" onInput={this.filter} />
                    </div>
                    <ul>
                        <li className="headRow">
                            <span className="head-title">Название</span>
                            <span className="head-date">Дата изменения</span>
                        </li>
                        <TheList tasks={tasks} activeId={this.state.activeId} selectActive={this.selectActive} />
                    </ul>
                </div>
                <ItemWindow task={task} />
                <Popup id={this.state.PopupId} isVisible={this.state.isVisible} activeId={this.state.activeId}>
                    <PopupDeleter deleteActiveTask={this.deleteActiveTask} closePopup={this.closePopup} />
                    <PopupEditor title={task.title} description={task.description} editActiveTask={this.editActiveTask} closePopup={this.closePopup}/>
                </Popup>
            </div>
        )
    }
}





