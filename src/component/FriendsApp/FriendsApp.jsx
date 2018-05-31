import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import './FriendsApp.less';

import {initializeVk, loginVk, filterByIds, filtration, vkFriendsSortByBirthDate, saveIdsToCookie } from '../../helpers/utils.js';
import * as actions from '../../store/actions';
import TheList from '../List/List.jsx';
import { FilterInput } from '../FilterInput/FilterInput.jsx';

class FriendsApp extends Component {   

    componentDidMount() {
        const { loadFriendsList, loadFilteredIds } = this.props;
        loadFilteredIds();
        initializeVk(6489235);
        loginVk();
        loadFriendsList();
        
    }

    saveIds = () => {
        saveIdsToCookie(this.props.filterIds);
    }

    addIdToFilterList = (id) => {
        this.props.addId(id);
    }

    removeIdFromFilterList = (id) => {
        this.props.removeId(id);                
    }

   updateDragId = (id) => {
       this.props.changeDraggableId(id);
   }

   updateDragFilter = (isFilter) => {
       this.props.updateFilterByDrag(isFilter);
   }

    changeSearchWord = (e) => {
        this.props.changeSearchWord(e.target.value);
    }

    changeSearchWordFilter = (e) => {
        this.props.changeSearchWordFilter(e.target.value);
    }

    render() {
        let commonList = filterByIds(this.props.friendsList,
            this.props.filterIds, false);
        let filterList = filterByIds(this.props.friendsList,
            this.props.filterIds, true);
        commonList = filtration(commonList, ['first_name', 'last_name'],
            this.props.searchWord);
        filterList = filtration(filterList, ['first_name', 'last_name'],
            this.props.searchWordFilter);
        return (
            <div id="react-container">
                <div className="head-box">
                    <span className="list-title">Выберите друзей</span>
                </div>
                <div className="filter-inputs-container">
                    <FilterInput onInput={this.changeSearchWord} />
                    <FilterInput onInput={this.changeSearchWordFilter} />
                </div>
                <div className="lists-container">
                    <TheList
                        isFilterList = {0}
                        updateDragId = {this.updateDragId}
                        updateDragFilter = {this.updateDragFilter}
                        friendsList={commonList}
                        text="Ваши друзья"
                        filter={this.addIdToFilterList} />
                    <TheList
                        isFilterList = {1}
                        updateDragId = {this.updateDragId}
                        updateDragFilter = {this.updateDragFilter}
                        friendsList={filterList}
                        text="Друзья в списке"
                        filter={this.removeIdFromFilterList} />                
                </div>
                <div className="app-footer">
                    <button onClick={this.saveIds}>Сохранить</button>
                </div>
            </div>
        )
    }
}

const putStateToProps = (state) => {
    const friendsList = state.friendsListReducer.friendsList;
    const filterIds = state.friendsListReducer.filterIds;
    return {
        friendsList: friendsList.sort(vkFriendsSortByBirthDate),
        filterIds,
        searchWord: state.friendsListReducer.searchWord,
        searchWordFilter: state.friendsListReducer.searchWordFilter
    };
}

const putActionsToProps = (dispatch) => {
    return {
        loadFriendsList: bindActionCreators(actions.loadFriendsList, dispatch),
        addId: bindActionCreators(actions.addId, dispatch),
        removeId: bindActionCreators(actions.removeId, dispatch),
        changeSearchWordFilter: bindActionCreators(actions.changeSearchWordFilter, dispatch),
        changeSearchWord: bindActionCreators(actions.changeSearchWord, dispatch),
        loadFilteredIds: bindActionCreators(actions.loadFriendsIds, dispatch),
        changeDraggableId: bindActionCreators(actions.changeDraggableId, dispatch),
        updateFilterByDrag: bindActionCreators(actions.updateFilterByDrag, dispatch)
    }
};

let App = DragDropContext(HTML5Backend)(FriendsApp);
export default connect(putStateToProps, putActionsToProps)(App);




