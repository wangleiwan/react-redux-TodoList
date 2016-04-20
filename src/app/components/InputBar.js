import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as todoActions from '../actions/Todos';

import TextField from 'material-ui/lib/text-field';
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import ContentAdd from 'material-ui/lib/svg-icons/content/add';

class InputBar extends Component {
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
    return (
      <div className="input">
        <div className="textField">
          <TextField ref="input" hintText="Add TO DO" />
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

InputBar.propTypes = {
  actions: PropTypes.object,
};


export default connect(
  null,
  mapDispatchToProps
)(InputBar);
