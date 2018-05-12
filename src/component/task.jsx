import React, { Component } from 'react';


export default class Task extends Component {

    constructor(props) {
        super(props)
        this.description = this.props.description
        this.addedDate = this.props.addedDate
        this.id = this.props.id;

    }

    deleteTask() {      

        if (confirm("Удалить запись?")) this.props.deleteTask(this.props.id); 

    }

    render() {

        return (<li>
            <span className="description">{this.description}</span>
            <span className="addedDate" >{this.addedDate}</span>
            <button onClick={this.deleteTask.bind(this)}>Удалить запись</button>
        </li>)

    }
}

    //<button onClick={this.props.deleteTask.bind(this.props.id)}>Удалить запись</button>
