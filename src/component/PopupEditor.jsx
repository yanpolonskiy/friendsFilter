import React, { Component } from 'react';
import { guid } from '../helpers/utils.js';

export class PopupEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            description: this.props.description
        }
        console.log(this.state);
    }

    componentWillReceiveProps(nextProps) {        
        console.log(this.state);
        this.setState({
            title: nextProps.title,
            description: nextProps.description 
        })                      
    }

    changeTitle = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    changeDescription = (e) => {
        this.setState({
            description: e.target.value
        })
    }

    saveChanges = () => {
        if (this.props.PopupId === 1) {         
            this.props.editActiveTask(this.state.description,
                this.state.title,
                new Date().toDateString());
        }
        else {
            if (!this.state.title || !this.state.description)
                return false;
            this.props.addTask(guid(), this.state.title, this.state.description);
        }
        this.props.closePopup();
    }

    negative = () => {
        this.props.closePopup();
    }

    render() {
        return (
            <div className="pop-up-editor">
                <span>Введите заголовок</span>
                <input type="text" value={this.state.title} onChange={this.changeTitle} />
                <span>Введите описание</span>
                <textarea
                    type="text"
                    value={this.state.description}
                    onChange={this.changeDescription} />
                <div className="buttons">
                    <button onClick={this.saveChanges}>Сохранить изменения</button>
                    <button onClick={this.negative}>Отмена</button>
                </div>
            </div>
        )
    }
}