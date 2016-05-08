import React, { Component } from 'react';
import InputBar from '../components/InputBar';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1 className="title">To Do List</h1>
        <InputBar />
      </div>
    );
  }
}

export default Header;
