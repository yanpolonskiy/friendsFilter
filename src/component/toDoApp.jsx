import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { TheList } from './list.jsx';
import { guid, filtration, getData } from '../helpers/utils.js';
import { ItemWindow } from "./ItemWindow.jsx";
import { Popup } from "./Popup.jsx";
import { PopupDeleter } from "./PopupDeleter.jsx";
import { PopupAdder } from "./PopupAdder.jsx";
import { PopupEditor } from "./PopupEditor.jsx";
import { FilterInput } from './FilterInput.jsx';

export class ToDoApp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tasks: [{ id: '', title: '', description: '', addedDate: '' }],
            activeId: null,
            deleteId: null,
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

    addTask = (id, title, description) => {
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

    filter = (e) => {
        this.setState({
            filterWord: e.target.value
        })
    }

    selectActive = (id) => {
        this.setState({
            activeId: id
        })

    }

    openPopupAdder = () => {
        this.setState({
            PopupId: 2,
            isVisible: true
        })
    }

    openPopupDeleter = () => {
        if (this.state.activeId === "") return false;
        this.setState({
            PopupId: 0,
            isVisible: true
        })
    }

    openPopupEditor = () => {
        if (this.state.activeId === "") return false;
        this.setState({
            PopupId: 1,
            isVisible: true
        })
    }

    taskDeleteButton = (id) => {
        this.setState({
            deleteId: id
        })
        this.openPopupDeleter();
    }

    commonButtonDelete = () => {
        this.setState({
            deleteId: this.state.activeId
        })
        this.openPopupDeleter();
    }

    deleteTask = () => {
        this.setState({
            activeId: null,
            tasks: [].concat(this.state.tasks).filter((item) => {
                return item.id !== this.state.deleteId;
            })
        })
    }

    editActiveTask = (description, title, addedDate) => {
        this.setState({
            tasks: [].concat(this.state.tasks).map((item) => {
                if (item.id === this.state.activeId)
                    return {
                        id: item.id,
                        title: title,
                        description: description,
                        addedDate: addedDate
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
        const { activeId, filterWord } = this.state;
        let task = { title: "", description: "" };
        let tasks = this.state.tasks;
        if (tasks && tasks.length) {
            tasks = filtration(tasks, "title", filterWord);
            if (activeId) {
                task = tasks.find((item => item.id === activeId));
            }
        }
        return (
            <div id="react-container">
                <div id="list-container">
                    <div className="functions">
                        <button onClick={this.openPopupAdder}>Add new Task</button>
                        <button onClick={this.commonButtonDelete}>Удалить</button>
                        <button onClick={this.openPopupEditor}>Редактировать</button>
                        <button onClick={this.sort}>Sort</button>
                        <FilterInput onInput={this.filter} />
                    </div>
                    <div className="headRow">
                        <span className="head-title">Название</span>
                        <span className="head-date">Дата изменения</span>
                        <span className=""></span>
                    </div>
                    <ul>
                        <TheList
                            tasks={tasks}
                            activeId={this.state.activeId}
                            selectActive={this.selectActive}
                            openToEdit={this.openPopupEditor}
                            deleteTask={this.deleteTask}
                            taskDeleteButton={this.taskDeleteButton} />
                    </ul>
                </div>
                <ItemWindow task={task} />
                <Popup id={this.state.PopupId}
                    isVisible={this.state.isVisible}
                    activeId={this.state.activeId}>
                    <PopupDeleter
                        deleteTask={this.deleteTask}
                        closePopup={this.closePopup} />
                    <PopupEditor
                        title={task.title}
                        description={task.description}
                        editActiveTask={this.editActiveTask}
                        closePopup={this.closePopup} />
                    <PopupAdder
                        addTask={this.addTask}
                        closePopup={this.closePopup} />
                </Popup>
            </div>
        )
    }
}





