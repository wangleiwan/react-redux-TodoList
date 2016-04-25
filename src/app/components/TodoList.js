import React, { PropTypes, Component } from 'react';
import TodoItem from './TodoItem';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux';


export default class TodoList extends Component {
  render() {
    const todos = this.props.todos.todos.map((todo, index) =>
      <TodoItem key={index} todo={todo} index={index} />
    );
    const completedtodos = todos.filter((todo) =>
      todo.props.todo.isComplete === true
    );
    const activetodos = todos.filter((todo) =>
      todo.props.todo.isComplete === false
    );
    let todolist;
    if (this.props.todos.filter === 'all') {
      todolist = todos;
    } else if (this.props.todos.filter === 'completed') {
      todolist = completedtodos;
    } else {
      todolist = activetodos;
    }
    return (
      <div className="todos">
        <ul className="list">
          <ReactCSSTransitionGroup
            transitionName="animatedRow"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}
          >
          { todolist }
          </ReactCSSTransitionGroup>
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
