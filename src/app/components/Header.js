import React, { PropTypes, Component } from 'react';
import InputBar from '../components/InputBar';
import Badge from 'material-ui/lib/badge';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <Badge
          badgeContent={this.props.todoItems}
          secondary
          badgeStyle={{ top: 15, right: 15 }}
        >
          <h1 className="title">To Do List</h1>
        </Badge>
        <InputBar />
      </div>
    );
  }
}

Header.propTypes = {
  todoItems: PropTypes.number.isRequired,
};

export default Header;
