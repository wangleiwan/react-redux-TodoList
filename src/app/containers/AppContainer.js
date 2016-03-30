import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as todoActions from '../actions/addTodo';

import TodoList from '../components/TodoList';
import TextField from 'material-ui/lib/text-field';
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import ContentAdd from 'material-ui/lib/svg-icons/content/add';

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.handleAddToDo = this.handleAddToDo.bind(this);
  }

  handleAddToDo() {
    const { actions } = this.props;
    const value = this.refs.input.input.value;
    if (value !== '') {
      actions.addToDo(value);
      this.refs.input.input.value = '';
    }
  }

  render() {
    const style = {
      container: {
        width: 650,
        marginLeft: 50,
      },
      header: {
        width: '50%',
        margin: '0 auto',
      },
    };
    return (
      <div style={style.container}>
        <div style={style.header} >
          <h1>To Do List</h1>
          <TextField ref="input" hintText="Add TO DO" />
          <FloatingActionButton mini onMouseDown={this.handleAddToDo}>
            <ContentAdd />
          </FloatingActionButton>
        </div>
        {this.props.todos.todos.length}
        <TodoList todos={this.props.todos.todos} />
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
    todos: state.addToDo,
  }
);

AppContainer.propTypes = {
  actions: PropTypes.object,
  todos: PropTypes.object,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
