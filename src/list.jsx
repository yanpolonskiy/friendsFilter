import task from './task.jsx';
import React, {Component} from 'react';

class TheList extends Component {
  constructor (props) {
    super(props)

    this.state = {
      tasks: props.tasks 
    }

    this.onClick = this.onClick.bind(this)
  }

  onClick () {
    const {tasks} = this.state

    this.setState({
      tasks: [].concat(tasks, { 
        description: Math.random(), 
        date: new Date().toString()
      })
  }) }

  render () {
     
    return (<article> 
      <header> 
        <h1>To Do List</h1> 
      </header> 
      <ul className='tasksList'> 
        {this.state.tasks.map((task, i) => (<Task key={i} {...task} />))} 
      </ul> 
      <button onClick={this.onClick}>Add new row</button>
    </article>)
  }

}
  