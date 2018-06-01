import React, { Component } from 'react';
import { DragSource } from 'react-dnd';
import { connect } from 'react-redux';
import { parseVkDate, getVkAge } from '../../helpers/utils.js';
import './FriendsItem.less';
import { ItemTypes } from '../../constants/dndConstants.js';

const friendSource = {
    beginDrag(props) {
        props.updateDragId(props.friend.id);
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
    }

    render() {
        const { connectDragSource, isDragging, test, friend, isFilterList } = this.props;
        let buttonClass = !isFilterList ? "commonButton" :
        "filterButton";
        return (
            connectDragSource(
                <li className="friends-item"
                    style={{
                        backgroundColor: isDragging ? "white" : "white",
                        cursor: 'move'
                    }}>
                    <div className="photo">
                        <img src={friend.photo_50} />
                    </div>
                    <div className="friend-full-name">
                        <span>{friend.first_name + " " + friend.last_name}</span>
                    </div>
                    <button onClick={()=>this.props.filter(friend.id)}
                    className={buttonClass}>
                    </button>
                </li>
            ))
    }
}

export default DragSource(ItemTypes.friend, friendSource, collect)(FriendsItem);