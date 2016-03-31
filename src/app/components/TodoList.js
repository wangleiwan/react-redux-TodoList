import React, { PropTypes, Component } from 'react';
import RaisedButton from 'material-ui/lib/raised-button';

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleEdit() {
    console.log(this.refs.todo);
    // const rowNumber = this.refs.table.state.selectedRows[0];
    // const value = this.refs.table.props.children[rowNumber].props.children[0].props.children;
    // console.log(this.refs.table.state.selectedRows.length);

  }

  render() {
    const todos = this.props.todos.map((todo, index) => (
        <li key={index} ref="todo">
          <div className="todo">{todo.todo}</div>
          <div className="buttons">
            <RaisedButton label="Edit" onMouseDown={this.handleEdit}/>
            {' '}
            <RaisedButton label="Delete" />
          </div>
        </li>
      ));

    return (
      <div className="todos">
        <ul>
          { todos }
        </ul>
      </div>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
};
