import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as todoActions from '../actions/Todos';

import TextField from 'material-ui/lib/text-field';
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import ContentAdd from 'material-ui/lib/svg-icons/content/add';
import DropDownMenu from 'material-ui/lib/DropDownMenu';
import MenuItem from 'material-ui/lib/menus/menu-item';

class InputBar extends Component {
  constructor(props) {
    super(props);
    this.handleAddToDo = this.handleAddToDo.bind(this);
    this.handleKeyAddToDo = this.handleKeyAddToDo.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = { value: 1 };
  }

  handleAddToDo() {
    const { actions } = this.props;
    const value = this.refs.input.input.value;
    if (value !== '') {
      actions.addToDo(value);
      this.refs.input.input.value = '';
    }
  }

  handleKeyAddToDo(event) {
    const { actions } = this.props;
    const value = this.refs.input.input.value;
    if (event.keyCode === 13 && value !== '') {
      actions.addToDo(value);
      this.refs.input.input.value = '';
    }
  }

  handleChange(e, i, value) {
    const { actions } = this.props;
    this.setState({ value });
    actions.filterView(value);
  }

  render() {
    return (
      <div className="input">
        <div className="textField">
          <TextField ref="input" hintText="Add TO DO" onKeyDown={this.handleKeyAddToDo} />
        </div>
        <FloatingActionButton mini onMouseDown={this.handleAddToDo}>
          <ContentAdd />
        </FloatingActionButton>
        <DropDownMenu
          className="filter"
          value={this.state.value}
          autoWidth={false}
          onChange={this.handleChange}
        >
          <MenuItem value={1} primaryText ="All" />
          <MenuItem value={2} primaryText ="Completed" />
          <MenuItem value={3} primaryText ="Active" />
        </DropDownMenu>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => (
  {
    actions: bindActionCreators(todoActions, dispatch),
  }
);

InputBar.propTypes = {
  actions: PropTypes.object,
};


export default connect(
  null,
  mapDispatchToProps
)(InputBar);
