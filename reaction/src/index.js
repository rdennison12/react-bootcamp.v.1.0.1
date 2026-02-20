import React from 'react';
import ReactDOM from 'react-dom/client';
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from 'react-redux';
import rootReducer from './reducers';
import PubSub, {PubSubContext} from './pubsub';
import App from './components/App';
import {newMessage} from './actions/messages';
import './index.css';

const store = configureStore({
    reducer: rootReducer
});

// console.log('store.getState()', store.getState());
// store.subscribe(() => console.log('store.getState()', store.getState()));

const pubsub = new PubSub();

pubsub.addListener({
    message: messageObject => {
        const {message, channel} = messageObject;

        // console.log('message received:', message, 'on channel:', channel);
        store.dispatch(message);
    }
});

setTimeout(() => {
    pubsub.publish(newMessage({text: 'Hello World!', username: 'Bob'}));
}, 1000);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <PubSubContext.Provider value={pubsub}>
            <App/>
        </PubSubContext.Provider>
    </Provider>
);