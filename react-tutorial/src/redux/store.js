/**
 * create the redux store
 */

 import {createStore} from 'redux';
 import reducer from './reducer';
 import { composeWithDevTools } from 'redux-devtools-extension';


 const store = createStore(reducer, {
     message: 'initial message'
 }, composeWithDevTools());

 export default store;