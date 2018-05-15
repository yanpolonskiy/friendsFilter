import React, { Component } from 'react';

export class ItemWindow extends Component {
    constructor(props) {
        super(props);
                 
    }

    render() {
        return (
            <div className="task-container">
            <span className="taskAddedDate">{this.props.task.title ? this.props.task.title : ""}</span>
            <span className="taskDescription">{this.props.task.description ? this.props.task.description : ""}</span>
            </div>
        )
    }
        
}

