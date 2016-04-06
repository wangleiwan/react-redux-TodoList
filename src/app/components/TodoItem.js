import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as todoActions from '../actions/Todos';

import FloatingActionButton from 'material-ui/lib/floating-action-button';
import ContentSave from 'material-ui/lib/svg-icons/content/save';
import ActionDelete from 'material-ui/lib/svg-icons/action/delete';
import EditorModeEdit from 'material-ui/lib/svg-icons/editor/mode-edit';
import Paper from 'material-ui/lib/paper';

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
    if (value !== '') {
      this.props.actions.saveToDo(value, index);
    }
  }

  handleDelete() {
    const index = this.props.index;
    this.props.actions.deleteToDo(index);
  }

  render() {
    const style = {
      width: 500,
      height: 70,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    };
    return (
      <li className="row">
        <Paper style={style} zDepth={1} >
        { this.props.todo.isEditting ?
          <input ref="edit" className="edit" maxLength="55" defaultValue={this.props.todo.todo} />
          :
          <div ref="todo" className="todo">{this.props.todo.todo}</div>
          }
          <div className="buttons">
          { this.props.todo.isEditting ?
            <FloatingActionButton backgroundColor="steelblue" onMouseDown={this.handleSave}>
              <ContentSave />
            </FloatingActionButton>
            :
            <FloatingActionButton backgroundColor="#3c763d" onMouseDown={this.handleEdit}>
              <EditorModeEdit />
            </FloatingActionButton>
            }
            {' '}
            <FloatingActionButton backgroundColor="#d81e05" onMouseDown={this.handleDelete}>
              <ActionDelete />
            </FloatingActionButton>
          </div>
        </Paper>

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
