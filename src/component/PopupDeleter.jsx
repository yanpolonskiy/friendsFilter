import React, { Component } from 'react';

export class PopupDeleter extends Component {
    constructor(props) {
        super(props);

       
   }    

   confirm = () => {
    this.props.deleteActiveTask();
    this.props.closePopup();
   }   

   negative = () => {       
    this.props.closePopup();
   }

    render() {
    
        return (
            <div className="pop-up-deleter">
            <span>Вы действительно хотите удалить запись?</span>
            <div className="buttons"><button onClick={this.confirm}>Да</button>
            <button onClick={this.negative}>Нет</button></div> 
            </div>
        )
    }
        
}