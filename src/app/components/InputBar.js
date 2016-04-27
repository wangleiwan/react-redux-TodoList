import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as todoActions from '../actions/Todos';

import TextField from 'material-ui/lib/text-field';
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import ContentAdd from 'material-ui/lib/svg-icons/content/add';
// import DropDownMenu from 'material-ui/lib/DropDownMenu';
// import MenuItem from 'material-ui/lib/menus/menu-item';

class InputBar extends Component {
  constructor(props) {
    super(props);
    this.handleAddToDo = this.handleAddToDo.bind(this);
    this.handleKeyAddToDo = this.handleKeyAddToDo.bind(this);
    // this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.state = { value: 1 };
  }

  handleAddToDo() {
    const { actions, todos } = this.props;
    const value = this.refs.input.input.value;
    let index;
    if (todos.todos === undefined) {
      index = 0;
    } else {
      index = todos.todos.length;
    }
    if (value !== '') {
      actions.addToDo(value, index);
      this.refs.input.input.value = '';
    }
  }

  handleKeyAddToDo(event) {
    const { actions, todos } = this.props;
    const value = this.refs.input.input.value;
    let index;
    if (todos.todos === undefined) {
      index = 0;
    } else {
      index = todos.todos.length;
    }
    if (event.keyCode === 13 && value !== '') {
      actions.addToDo(value, index);
      this.refs.input.input.value = '';
    }
  }

  handleBlur(e) {
    const { todos } = this.props;
    const isEditting = todos.todos.find(todo => todo.isEditting === true);
    if (isEditting === undefined) {
      e.target.focus();
    }
  }
  //
  // handleChange(e, i, value) {
  //   const { actions } = this.props;
  //   this.setState({ value });
  //   actions.filterView(value);
  // }

  render() {
    return (
      <div className="input">
        <div className="textField">
          <TextField
            ref="input"
            hintText="Add TO DO"
            onKeyDown={this.handleKeyAddToDo}
            onBlur={this.handleBlur}
          />
        </div>
        <FloatingActionButton mini onMouseDown={this.handleAddToDo}>
          <ContentAdd />
        </FloatingActionButton>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => (
  {
    actions: bindActionCreators(todoActions, dispatch),
  }
);

const mapStateToProps = (state) => (
  {
    todos: state.ToDos,
  }
);

InputBar.propTypes = {
  actions: PropTypes.object,
  todos: PropTypes.object,
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputBar);
