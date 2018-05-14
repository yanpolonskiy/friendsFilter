import React, { Component } from 'react';


export default class Task extends Component {

    constructor(props) {
        super(props)
       
        this.setActive = this.setActive.bind(this);
    
       
     this.state = {
          activeId: this.props.activeId
     }
        
    }

    setActive() {
      
        this.props.setActiveTask(this.props.id);
        
    }


     deleteTask() {      

        if (confirm("Удалить запись?")) this.props.deleteTask(this.props.id); 

    }

    render() {
 
        return (<li className={this.props.activeId === this.props.id ? "active" : "not-active"}  onClick={this.setActive.bind(this)}>
            <span className="description">{this.props.title}</span>
            <span className="addedDate" >{this.props.addedDate}</span>
            <button onClick={this.deleteTask.bind(this)}>Удалить запись</button>
        </li>)

    }
}
