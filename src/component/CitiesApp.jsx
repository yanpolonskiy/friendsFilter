import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { guid, getData } from '../helpers/utils.js';
import { sortCitiesList, loadCitiesList } from '../store/actions';
import { TheList } from './list.jsx';
import { FilterInput } from './FilterInput.jsx';

class CitiesApp extends Component {
    componentDidMount() {
        const { loadCitiesList } = this.props;
        getData('https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json').then(loadedList => {
            loadCitiesList(loadedList);
        }, error => {
            console.log(error);
        })
    }

    sort = () => {
        this.props.sortCitiesList();
    }

    filter = (e) => {
    }

    render() {
        return (
            <div id="react-container">
                <div className="functions">                   
                    <button onClick={this.sort}>Сортировка</button>
                    <FilterInput onInput={this.filter} />
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
        citiesList: state.citiesList
    };
}

const putActionsToProps = (dispatch) => {
    return {
        loadCitiesList: bindActionCreators(loadCitiesList, dispatch),
        sortCitiesList: bindActionCreators(sortCitiesList, dispatch)
    }
};
// return bindActionCreators({ loadCitiesList, sortCitiesList }, dispatch);

export default connect(putStateToProps, putActionsToProps)(CitiesApp);




