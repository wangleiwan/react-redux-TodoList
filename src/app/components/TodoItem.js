import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import classnames from 'classnames';
import * as todoActions from '../actions/Todos';

import RaisedButton from 'material-ui/lib/raised-button';
import Toggle from 'material-ui/lib/toggle';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
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

  handleToggle() {
    const index = this.props.index;
    const value = this.refs.todo.textContent;
    this.props.actions.completeToDo(value, index);
  }

  render() {
    return (
      <li className={classnames({
        'list-group-item list-item': true,
        disabled: this.props.todo.isComplete,
      })}
      >
      { this.props.todo.isEditting ?
        <input
          id="edit"
          ref="edit"
          className="form-control edit"
          defaultValue={this.props.todo.todo}
        />
        :
        <div ref="todo" className="todo">{this.props.todo.todo}</div>
        }
        <div className="buttons">
          <Toggle
            style={{
              width: '55px',
            }}
            disabled={this.props.todo.isComplete}
            onToggle={this.handleToggle}
          />
          { this.props.todo.isEditting ?
          <RaisedButton
            label="Save"
            onMouseDown={this.handleSave}
          />
          :
          <RaisedButton
            label="Edit"
            onMouseDown={this.handleEdit}
            disabled={this.props.todo.isComplete}
          />
          }
          {' '}
          <RaisedButton
            label="Delete"
            onMouseDown={this.handleDelete}
            disabled={this.props.todo.isComplete}
          />
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
