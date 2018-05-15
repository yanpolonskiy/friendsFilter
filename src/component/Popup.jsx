import React, { Component } from 'react';

export class Popup extends Component {
    constructor(props) {
        super(props);
    
   }

    render() {
        let className = this.props.isVisible ? "pop-up visible" : "pop-up";  
        return (
            <div className={className}>
            {this.props.children[this.props.id]}
            </div>
        )
    }
        
}