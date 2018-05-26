import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './FriendsApp.less';

import { guid, vkFriendsSortByBirthDate, loginVk, initializeVk, loadFriendsData} from '../../helpers/utils.js';
import { loadFriendsList } from '../../store/actions';
import { TheList } from '../List/List.jsx';

class FriendsApp extends Component {
    componentDidMount() {
        const { loadFriendsList } = this.props;
        initializeVk(6489235);
        loginVk();
       loadFriendsData().then(response => { 
          loadFriendsList(response.response.items);    
       }, error => { console.log(error.message); });        
    }

    render() {
        return (
            <div id="react-container">
                <div className="head-box">
                    <span className="list-title">Друзья</span>
                </div>
                <div className="head-row">
                    <span>Фото</span>
                    <span>Имя</span>
                    <span>Дата рождения</span>
                    <span>Возраст</span>
                </div>
                <TheList friendsList={this.props.friendsList} />
            </div>
        )
    }
}

const putStateToProps = (state) => {
    return {
        friendsList: state.friendsList.sort(vkFriendsSortByBirthDate)
    };
}

const putActionsToProps = (dispatch) => {
    return {
        loadFriendsList: bindActionCreators(loadFriendsList, dispatch),       
    }
};

export default connect(putStateToProps, putActionsToProps)(FriendsApp);




