import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import TodoList from '../components/TodoList';
import Header from '../components/Header';

class AppContainer extends Component {

  render() {
    const { todos } = this.props;
    const completedtodos = todos.todos.filter((todo) => todo.isComplete === true);
    let todoItems;
    if (todos.filter === 'all') {
      todoItems = todos.todos.length;
    } else if (todos.filter === 'completed') {
      todoItems = completedtodos.length;
    } else {
      todoItems = todos.todos.length - completedtodos.length;
    }
    return (
      <div className="container">
        <div className="wrapper">
          <Header todoItems={todoItems} />
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
