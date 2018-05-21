import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { guid, getData } from '../helpers/utils.js';
import { sortCitiesList, loadCitiesList } from '../store/actions';
import { TheList } from './list.jsx';
//import { FilterInput } from './FilterInput.jsx';

class CitiesApp extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const { loadCitiesList } = this.props;
        getData('https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json').then(loadedList => {
            loadCitiesList(loadedList);
        }, error => {
            console.log(error);
        })
    }

    sort = () => {
        sortCitiesList(this.props.CitiesList);
    }

    filter = (e) => {
    }

    render() {
        console.log(this.props);
        return (
            <div id="react-container">
                <div className="functions">
                    <button onClick={this.sort}>Сортировка</button>
                </div>
                <div className="headRow">
                    <span className="ListTitle"></span>
                </div>
                <ul>
                    <TheList CitiesList={this.props.CitiesList} />
                </ul>
            </div>
        )
    }
}

const putStateToProps = (state) => {
    return {
        CitiesList: state.CitiesList
    };
}

const putActionsToProps = (dispatch) => {
    return bindActionCreators({ loadCitiesList, sortCitiesList }, dispatch);
};


export default connect(putStateToProps, putActionsToProps)(CitiesApp);
//  <FilterInput onInput={this.filter} />



