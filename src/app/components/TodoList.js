import React, { PropTypes, Component } from 'react';
import TodoItem from './TodoItem';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as todoActions from '../actions/Todos';
import { Tabs, Tab } from 'react-bootstrap';


export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
    this.state = {
      key: 1,
    };
  }

  handleSelect(key) {
    this.setState({ key });
    this.props.actions.filterView(key);
  }

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

    return (
      <div className="todos">
        <ul className="list">
          <Tabs
            activeKey={this.state.key}
            onSelect={this.handleSelect}
            id="controlled-tab"
          >
            <Tab eventKey={1} title="All">{' '}{todos}</Tab>
            <Tab eventKey={2} title="Completed">{' '}{completedtodos}</Tab>
            <Tab eventKey={3} title="Active">{' '}{activetodos}</Tab>
          </Tabs>
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

const mapDispatchToProps = (dispatch) => (
  {
    actions: bindActionCreators(todoActions, dispatch),
  }
);

TodoList.propTypes = {
  todos: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
