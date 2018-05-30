import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';
import './List.less';

import FriendsItem from '../FriendsItem/FriendsItem.jsx';
import { guid, filtration } from '../../helpers/utils.js';

const ItemTypes = {
    friend: 'friend'
};


const listTarget = {
    drop(props) {
        console.log(props);
    }
}

function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver()
    };
}

@DropTarget(ItemTypes.friend, listTarget, collect)

export default class TheList extends Component {
    render() {
        const { connectDropTarget } = this.props;
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
                            filter={this.props.filter}
                            friendId={friend.id}
                            friendPhoto={friend.photo_50}
                            friendFullName={
                                friend.first_name + " " + friend.last_name} />)
                    }
                </ul>
            </div>
        ));
    }
}
