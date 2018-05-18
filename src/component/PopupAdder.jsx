import React, { Component } from 'react';
import { guid } from '../helpers/utils.js';

export class PopupAdder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            placeholder: 'Введите значение'
        }
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

    addNew = () => {
        let id = guid();
        if (!this.state.title || !this.state.description) 
            return false;
        this.props.addTask(id, this.state.title, this.state.description);
        this.setState({
            description: '',
            title: ''
        })
        this.props.closePopup();
    }

    negative = () => {
        this.setState({
            description: '',
            title: ''
        })
        this.props.closePopup();
    }

    render() {
        return (
            <div className="pop-up-adder">
                <span>Введите заголовок</span>
                <input
                    value={this.state.title}
                    type="text"
                    placeholder={this.state.placeholder}
                    onChange={this.changeTitle} />
                <span>Введите описание</span>
                <input value={this.state.description}
                    placeholder={this.state.placeholder}
                    type="text"
                    onChange={this.changeDescription} />
                <div className="buttons">
                    <button onClick={this.addNew}>Сохранить изменения</button>
                    <button onClick={this.negative}>Отмена</button>
                </div>
            </div>
        )
    }
}