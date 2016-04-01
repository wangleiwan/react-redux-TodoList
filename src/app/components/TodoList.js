import React, { PropTypes, Component } from 'react';
import TodoItem from './TodoItem';

import { connect } from 'react-redux';

export default class TodoList extends Component {

  render() {
    const todos = this.props.todos.todos.map((todo, index) =>
      <TodoItem key={index} todo={todo} index={index} />
    );
    return (
      <div className="todos">
        <ul>
          { todos }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    todos: state.ToDos,
  }
);

TodoList.propTypes = {
  todos: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, null)(TodoList);
