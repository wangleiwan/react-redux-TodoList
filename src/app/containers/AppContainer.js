import React, { Component } from 'react';
import TodoList from '../components/TodoList';
import InputBar from '../components/InputBar';

class AppContainer extends Component {

  render() {
    return (
      <div className="container">
        <div className="header" >
          <h1>To Do List</h1>
          <InputBar />
        </div>
        <TodoList />
      </div>
    );
  }
}

export default AppContainer;
