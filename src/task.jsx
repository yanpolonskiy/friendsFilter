import React, {Component} from 'react';

export let taskMassive = [{
    description: "firstTask",
    addedDate: new Date(2012, 0, 1, 2, 3, 4, 567).toString()
},
{
    description: "secondTask",
    addedDate: new Date(2011, 0, 1, 2, 3, 4, 567).toString()
},
{
    description: "thirdTask",
    addedDate: new Date(2011, 0, 1, 2, 3, 4, 567).toString()
},
{
    description: "fourthTask",
    addedDate: new Date(2011, 0, 1, 2, 3, 4, 567).toString()
}
];

/*export const Task = ({description, date}) =>  
 (
            <li>
                <span className="description">{description}</span>
                <span className="addedDate">{date}</span>
                <button>Удалить запись</button>
            </li>
 )*/

 export class Task extends Component { 
 constructor(props) {
      super(props)
     

    this.state = {
      description: this.props.description,
      addedDate: this.props.addedDate
    }
 }

    deleteTask() {
       // let key = this.props.id;
     
         this.props.deleteTask(this.props.id);
         console.log(this.state);
         this.setState({
            description: this.props.description,
            addedDate: this.props.addedDate
         })
    } 
       render() {
        
           return(<li>
                <span className="description">{this.state.description}</span>
                <span className="addedDate" >{this.state.addedDate}</span>
                <button onClick={this.deleteTask.bind(this)}>Удалить запись</button>
           </li>)
       }

    }

    //<button onClick={this.props.deleteTask.bind(this.props.id)}>Удалить запись</button>
         