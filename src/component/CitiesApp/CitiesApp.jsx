import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { guid, getData, filtration } from '../../helpers/utils.js';
import { sortCitiesList, loadCitiesList, filterCitiesList, changeFilterWord } from '../../store/actions';
import { TheList } from '../List/List.jsx';
import { FilterInput } from '../FilterInput/FilterInput.jsx';

class CitiesApp extends Component {
    componentDidMount() {
        const { loadCitiesList } = this.props;
        getData('https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json')
            .then(loadedList => {
                loadCitiesList(loadedList);
            }, error => {
                console.log(error);
            })
    }

    sort = () => {
        this.props.sortCitiesList();
    }

    changeFilterWord = (e) => {
        this.props.changeFilterWord(e.target.value);
    }

    render() {
        return (
            <div id="react-container">
                <div className="functions">
                    <button onClick={this.sort}>Сортировка</button>
                    <FilterInput onInput={this.changeFilterWord} />
                </div>
                <div className="headRow">
                    <span className="ListTitle"></span>
                </div>
                <ul>
                    <TheList citiesList={this.props.citiesList} />
                </ul>
            </div>
        )
    }
}

const putStateToProps = (state) => {
    return {
        citiesList: filtration(state.citiesList, "name", state.filterWord)
    };
}

const putActionsToProps = (dispatch) => {
    return {
        loadCitiesList: bindActionCreators(loadCitiesList, dispatch),
        sortCitiesList: bindActionCreators(sortCitiesList, dispatch),
        changeFilterWord: bindActionCreators(changeFilterWord, dispatch)
    }
};
// return bindActionCreators({ loadCitiesList, sortCitiesList }, dispatch);

export default connect(putStateToProps, putActionsToProps)(CitiesApp);




