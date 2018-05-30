import React, { Component } from 'react';
import { DragSource } from 'react-dnd';
import { parseVkDate, getVkAge } from '../../helpers/utils.js';
import './FriendsItem.less';

const ItemTypes = {
    friend: 'friend'
};

const friendSource = {
    beginDrag(props) {
        console.log(props);
        return {
            friendId: props.friendId
        };
    }
};

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}

@DragSource(ItemTypes.friend, friendSource, collect)
export default class FriendsItem extends Component {
    constructor(props) {
        super(props);
        this.filter = this.props.filter;
        this.friendId = this.props.friendId;
    }

    filtration() {
        this.filter(this.friendId);
    }

    onDragStart(event) {
        event.dataTransfer.effectAllowed='move';
        event.dataTransfer.setDragImage(event.target,100,100);
        event.dataTransfer.setData("Text", 123);
        return true;
    }

    drag(event) {
        let a = event.dataTransfer.getData('Text');
        console.log(a);
        // event.target.textContent = data;
    }

    render() {
        const { connectDragSource, isDragging } = this.props;
        return (
            connectDragSource(
                <li className="friends-item"
                    onDrag={this.drag.bind(this)}
                    onDragStart={this.onDragStart.bind(this)}
                    style={{
                        opacity: isDragging ? 0.5 : 1,
                        cursor: isDragging ? 'move' : 'pointer'
                    }}>
                    <div className="photo">
                        <img src={this.props.friendPhoto} />
                    </div>
                    <div className="friend-full-name">
                        <span>{this.props.friendFullName}</span>
                    </div>
                    <button onClick={this.filtration.bind(this)}>
                        OK
                    </button>
                </li>
            ))
    }
}
