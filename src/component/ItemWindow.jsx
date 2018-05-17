import React, { Component } from 'react';

export const ItemWindow = (props) => {
    return (
        <div className="task-container">
            <span className="taskAddedDate">{props.task.title || ""}</span>
            <span className="taskDescription">{props.task.description || ""}</span>
        </div>
    )
}

