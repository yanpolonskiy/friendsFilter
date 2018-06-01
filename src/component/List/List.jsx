import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';
import { connect } from 'react-redux';
import './List.less';

import { ItemTypes } from '../../constants/dndConstants.js';
import FriendsItem from '../FriendsItem/FriendsItem.jsx';
import { guid, filtration } from '../../helpers/utils.js';

const listTarget = {
    drop(props) {
        props.updateDragFilter(props.isFilterList)
    }
}

function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver()
    };
}

class TheList extends Component {
    
    render() {
        const { friendId, isOver, connectDropTarget } = this.props;
        let listClassName = this.props.isFilterList ? "friends-list filter-list" :
            "friends-list common-list";
        return (connectDropTarget(
            <div className="friends-list-wrapper">
                <span className="title">
                    {this.props.text}
                </span>
                <ul className={listClassName}>
                    {this.props.friendsList.map((friend, i) =>
                        <FriendsItem key={guid()}
                            updateDragId={this.props.updateDragId}
                            filter={this.props.filter}
                            isFilterList={this.props.isFilterList}
                            friend={friend} />)
                    }
                </ul>
            </div>
        ));
    }
}

export default DropTarget(ItemTypes.friend, listTarget, collect)(TheList);
