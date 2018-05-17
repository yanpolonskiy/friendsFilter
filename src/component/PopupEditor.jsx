import React, { Component } from 'react';

export class PopupEditor extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            title: this.props.title,
            description: this.props.description
        }
    }

    componentWillReceiveProps(nextProps) {
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
        let description = this.state.description || this.props.description;
        let title = this.state.title || this.props.title;
        this.props.editActiveTask(description, title, new Date().toString());
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
                <input type="text" value={this.state.description} onChange={this.changeDescription} />
                <div className="buttons">
                    <button onClick={this.saveChanges}>Сохранить изменения</button>
                    <button onClick={this.negative}>Отмена</button>
                </div>
            </div>
        )
    }
}