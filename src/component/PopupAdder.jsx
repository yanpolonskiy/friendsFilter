import React, { Component } from 'react';
import { guid } from '../helpers/utils.js';

export class PopupAdder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: ''
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
                    onChange={this.changeTitle} />
                <span>Введите описание</span>
                <input value={this.state.description}
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