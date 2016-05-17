import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TodoList from '../components/TodoList';
import Header from '../components/Header';

import * as todoActions from '../actions/Todos';

class AppContainer extends Component {
  componentWillMount() {
    this.props.actions.getInitialTodos();
  }

  render() {
    const { todos } = this.props;
    if (Object.keys(todos).length === 0) {
      return (
        <div className="container">
          <div className="wrapper">
            <Header />
          </div>
        </div>
      );
    }

    return (
      <div className="container">
        <div className="wrapper">
          <Header />
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

const mapDispatchToProps = (dispatch) => (
  {
    actions: bindActionCreators(todoActions, dispatch),
  }
);

AppContainer.propTypes = {
  todos: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
