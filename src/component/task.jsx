import React, { Component } from 'react';


export default class Task extends Component {

    constructor(props) {
        super(props)
                      
    }

    selectActive = () => {
        this.props.selectActive(this.props.id);
    }

    deleteTask = (e) => {
        e.stopPropagation();
        console.log(this.props.deleteTask(this.props.id));
    }

     render() {
 
        return (<li className={this.props.activeId === this.props.id ? "active" : ""} onClick={this.selectActive} onDoubleClick={this.props.openToEdit}>
            <span className="title">{this.props.title}</span>
            <span className="addedDate" >{this.props.addedDate}</span>
            <button onClick={this.deleteTask}>Удалить</button>
        </li>)

    }
}
