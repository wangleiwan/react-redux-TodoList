import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import TodoList from '../components/TodoList';
import Header from '../components/Header';

class AppContainer extends Component {

  render() {
    const { todos } = this.props;
    return (
      <div className="container">
        <div className="wrapper">
          <Header todoItems={todos.todos.length} />
          <TodoList />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    todos: state.ToDos,
  }
);

AppContainer.propTypes = {
  todos: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, null)(AppContainer);
