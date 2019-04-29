import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import {composeWithDevTools} from "redux-devtools-extension";



const composeEnhancers = composeWithDevTools({
    trace:true,traceLimit:25
});
export const store = createStore(rootReducer,composeEnhancers(
    applyMiddleware(thunk),));

