import React, { Component } from 'react';


export default class Task extends Component {

    constructor(props) {
        super(props)
                      
    }

    selectActive = () => {
        this.props.selectActive(this.props.id);
    }

     render() {
 
        return (<li className={this.props.activeId === this.props.id ? "active" : ""} onClick={this.selectActive}>
            <span className="title">{this.props.title}</span>
            <span className="addedDate" >{this.props.addedDate}</span>
        </li>)

    }
}
