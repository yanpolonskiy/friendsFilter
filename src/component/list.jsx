import React, { Component } from 'react';

import Task from './task.jsx';
import { guid, filtration } from '../helpers/utils.js';
import { FilterInput } from './FilterInput.jsx';

export const TheList = (props) => {
    return (
        props.tasks.map((task) =>
            <Task key={task.id}
                activeId={props.activeId}
                selectActive={props.selectActive}
                openToEdit={props.openToEdit}
                taskDeleteButton={props.taskDeleteButton}
                deleteTask={props.deleteTask} {...task} />)
    );
}
