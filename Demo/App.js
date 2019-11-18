/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 */

import React from 'react';
import {
  View  
} from 'react-native';


import Hello from './components/Hello';
import TodoList from './components/TodoList';
import {NativeRouter, Route} from 'react-router-native';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <NativeRouter>
      <View style={ {
        backgroundColor: 'yellow', 
        height: '100%', 
        width: '100%',
        flex: 1,
        justifyContent: 'center'
      } }>
        {/* <Hello name={'Nerdeez'} vered={42} />
        <TodoList /> */}

        <Route path={'/'} component={Login} />
        <Route path={'/dashboard'} component={Dashboard} />
        
      </View>
    </NativeRouter>
  );
};



export default App;
