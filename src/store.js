import { createStore, combineReducers, compose } from "redux";
import firebase from "firebase";
import "firebase/firestore";
import { reactReduxFirebase, firebaseReducer } from "react-redux-firebase";
import { reduxFirestore, firestoreReducer } from "redux-firestore";

// Reducers
// @todo

const firebaseConfig = {
  apiKey: "AIzaSyBv7r8OMaFlc0ni6MeU1IYT8HawEW6FvaY",
  authDomain: "react-client-panel-f893e.firebaseapp.com",
  databaseURL: "https://react-client-panel-f893e.firebaseio.com",
  projectId: "react-client-panel-f893e",
  storageBucket: "react-client-panel-f893e.appspot.com",
  messagingSenderId: "729127346813"
};

// React redux firebase config
const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true
};

// Initiliaze firebase instance
firebase.initializeApp(firebaseConfig);
// Initialize firestore
const firestore = firebase.firestore();

// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
  reduxFirestore(firebase)
)(createStore);

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer
});

// Create initial state
const initialState = {};

// Create store
const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
