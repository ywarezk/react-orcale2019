import React from 'react';
import logo from './logo.svg';
import './App.css';
import SendMessage from './components/SendMessage';
import RecieveMessage from './components/RecieveMessage';
// import Hello /*, {hello}*/ from './components/Hello';
// import TodoList from './components/TodoList';
// import {BrowserRouter, Route} from 'react-router-dom';
// import Login from './components/Login';
// import Dashboard from './components/Dashboard';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div>
        <SendMessage />
        <RecieveMessage />
      </div>
    </Provider>
    
  )
  // return (
  //   <BrowserRouter>
  //         <div className="App">
  //           <Hello name={'Yariv'} />

  //           <TodoList />

  //           <Route 
  //             component={Login}
  //             path={'/login'} >
  //           </Route>

  //           <Route 
  //             component={Dashboard}
  //             path={'/dashboard'} >
              
  //           </Route>
  //         </div>
  //   </BrowserRouter>

  // );
}

export default App;
