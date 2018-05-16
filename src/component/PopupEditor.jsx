import React, { Component } from 'react';

export class PopupEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            description: this.props.description
        }
   }

   changeTitle = (e) => {
       this.setState({
           title: e.target.value
       })
   }

   changeTitle = (e) => {
    this.setState({
        description: e.target.value
    })
}

   saveChanges = () => {

   }

   negative = () => {       
    this.props.closePopup();
   }

    render() {
        console.log(this.state);
        return (
            <div className="pop-up-editor">
            <span>Введите заголовок</span>
            <input type="text" value={this.state.title} onChange={this.changeTitle}/>
            <span>Введите описание</span>
            <input type="text" value={this.state.description} onChange={this.changeDescription}/>
            <div className="buttons">
            <button onClick={this.saveChanges}>Сохранить изменения</button>
            <button onClick={this.negative}>Отмена</button>
            </div>
            </div>
        )
    }
        
}