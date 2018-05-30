import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import './FriendsApp.less';

import * as utils from '../../helpers/utils.js';
import * as actions from '../../store/actions';
import TheList from '../List/List.jsx';
import { FilterInput } from '../FilterInput/FilterInput.jsx';

class FriendsApp extends Component {   

    componentDidMount() {
        const { loadFriendsList, loadFilteredIds } = this.props;
        loadFilteredIds();
        utils.initializeVk(6489235);
        utils.loginVk();
        utils.loadFriendsData().then(response => {
            loadFriendsList(response.response.items);
        }, error => { console.log(error.message); });
    }

    componentDidUpdate() {
        utils.saveIdsToCookie(this.props.filterIds);
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
        let commonList = utils.filterByIds(this.props.friendsList,
            this.props.filterIds, false);
        let filterList = utils.filterByIds(this.props.friendsList,
            this.props.filterIds, true);
        commonList = utils.filtration(commonList, ['first_name', 'last_name'],
            this.props.searchWord);
        filterList = utils.filtration(filterList, ['first_name', 'last_name'],
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
            </div>
        )
    }
}

const putStateToProps = (state) => {
    const friendsList = state.friendsListReducer.friendsList;
    const filterIds = state.friendsListReducer.filterIds;
    return {
        friendsList: friendsList.sort(utils.vkFriendsSortByBirthDate),
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




