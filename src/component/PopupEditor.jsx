import React, { Component } from 'react';

export class PopupEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            PopupId: this.props.id
        }
   }

    render() {
    
        return (
            <div className="pop-up-editor">
            <span>1111111111</span>
            </div>
        )
    }
        
}