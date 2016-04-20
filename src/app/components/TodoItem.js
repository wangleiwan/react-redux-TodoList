import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as todoActions from '../actions/Todos';

import RaisedButton from 'material-ui/lib/raised-button';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleEdit() {
    const value = this.refs.todo.textContent;
    const index = this.props.index;
    this.props.actions.editToDo(value, index);
  }

  handleSave() {
    const value = this.refs.edit.value;
    const index = this.props.index;
    this.props.actions.saveToDo(value, index);
  }

  handleDelete() {
    const index = this.props.index;
    this.props.actions.deleteToDo(index);
  }

  render() {
    return (
      <li>
      { this.props.todo.isEditting ?
        <input ref="edit" className="edit" defaultValue={this.props.todo.todo} />
        :
        <div ref="todo" className="todo">{this.props.todo.todo}</div>
      }
        <div className="buttons">
        { this.props.todo.isEditting ?
          <RaisedButton label="Save" onMouseDown={this.handleSave} />
          :
          <RaisedButton label="Edit" onMouseDown={this.handleEdit} />
        }
          {' '}
          <RaisedButton label="Delete" onMouseDown={this.handleDelete} />
        </div>
      </li>
    );
  }
}

const mapDispatchToProps = (dispatch) => (
  {
    actions: bindActionCreators(todoActions, dispatch),
  }
);

TodoItem.propTypes = {
  actions: PropTypes.object.isRequired,
  todo: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default connect(null, mapDispatchToProps)(TodoItem);
