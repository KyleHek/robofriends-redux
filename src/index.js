import React from 'react';
// import ReactDOM from 'react-dom'; The new way to import createRoot:
import { createRoot } from "react-dom/client";
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import './index.css';
import App from './containers/App';
import 'tachyons';
import { searchRobots, requestRobots } from './reducers';
// import registerServiceWorker from './registerServiceWorker';

const logger = createLogger();
const rootReducer = combineReducers({ searchRobots, requestRobots })
const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

const root = createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);


// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
