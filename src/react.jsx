import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { rootReducer } from './store/reducers';
import FriendsApp from './component/FriendsApp/FriendsApp.jsx';


const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <FriendsApp />
    </Provider>,
    document.getElementById('container')
)

