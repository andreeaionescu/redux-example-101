import React from 'react';
import ReactDOM from 'react-dom';
import rootReducer from './reducers/';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './App';

const initialState = {
    books: [{
        id: 0,
        title: 'Design Patterns by GoF',
        completed: false
    },
    {
        id: 1,
        title: 'Clean code by Robert Martin',
        completed: false
    }],
    visibilityFilter: 'SHOW_ALL'
}

const store = createStore(rootReducer, initialState)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

