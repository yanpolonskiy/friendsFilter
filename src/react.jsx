import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { rootReducer } from './store/reducers';
import CitiesApp from './component/CitiesApp.jsx';


const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <CitiesApp />
    </Provider>,
    document.getElementById('container')
)