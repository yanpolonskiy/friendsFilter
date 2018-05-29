import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './store/store';
import FriendsApp from './component/FriendsApp/FriendsApp.jsx';


ReactDOM.render(
    <Provider store={store}>
        <FriendsApp />
    </Provider>,
    document.getElementById('container')
)

