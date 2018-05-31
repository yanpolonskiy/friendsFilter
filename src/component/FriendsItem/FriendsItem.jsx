import React, { Component } from 'react';
import { DragSource } from 'react-dnd';
import { connect } from 'react-redux';
import { parseVkDate, getVkAge } from '../../helpers/utils.js';
import './FriendsItem.less';
import { ItemTypes } from '../../constants/dndConstants.js';

const friendSource = {
    beginDrag(props) {
        props.updateDragId(props.friendId);
        return {};
    }
};

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}

class FriendsItem extends Component {
    constructor(props) {
        super(props);
        this.filter = this.props.filter;
        this.friendId = this.props.friendId;
    }

    filtration() {
        this.filter(this.friendId);
    }

    render() {
        const { connectDragSource, isDragging, test } = this.props;
        let buttonClass = !this.props.isFilterList ? "commonButton" :
        "filterButton";
        return (
            connectDragSource(
                <li className="friends-item"
                    style={{
                        backgroundColor: isDragging ? "white" : "white",
                        cursor: 'move'
                    }}>
                    <div className="photo">
                        <img src={this.props.friendPhoto} />
                    </div>
                    <div className="friend-full-name">
                        <span>{this.props.friendFullName}</span>
                    </div>
                    <button onClick={this.filtration.bind(this)}
                    className={buttonClass}>
                    </button>
                </li>
            ))
    }
}

export default DragSource(ItemTypes.friend, friendSource, collect)(FriendsItem);