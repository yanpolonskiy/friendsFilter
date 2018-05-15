import React, { Component } from 'react';

export class FilterInput extends Component {
    
    constructor(props) {
        super(props)
       
    };
  
    
    render() {

        return (

            <input type="text"
                className="listFilter" onChange={this.props.onInput}
                placeholder="Введите описание"></input>

        )
    }

}