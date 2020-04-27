import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import { reduxFirestore, getFirestore } from 'redux-firestore';

import rootReducer from './reducers';
import firebase from '../Firebase/firebase';

// react-redux-firebase config
const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true
};

const composeEnhancers =
    process.env.NODE_ENV === 'development'
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
        : compose;

const store = createStore(
    rootReducer,
    composeEnhancers(
        reactReduxFirebase(firebase, rrfConfig),
        reduxFirestore(firebase),
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore }))
    )
);

export default store;