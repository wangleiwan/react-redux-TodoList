import React, { PropTypes, Component } from 'react';
import Table from 'material-ui/lib/table/table';
import TableRow from 'material-ui/lib/table/table-row';
import TableRowColumn from 'material-ui/lib/table/table-row-column';
import TableBody from 'material-ui/lib/table/table-body';
import RaisedButton from 'material-ui/lib/raised-button';

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleEdit() {
    console.log('hfd');
  }

  render() {
    const todos = this.props.todos.map((todo) => {
      return (
        <TableRow>
          <TableRowColumn ref="row">{todo.todo}</TableRowColumn>
          <TableRowColumn>
            <RaisedButton label="Edit" />
            {' '}
            <RaisedButton label="Delete" />
          </TableRowColumn>
        </TableRow>
      );
    });

    return (
      <Table>
        <TableBody>
        { todos }
        </TableBody>
      </Table>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
};
