import React, { Component } from 'react';

export default class TodoList extends Component {
  constructor(props) {
    super(props);
			this.state = {
				todos: [
					'make a website',
					'do grocery shopping'
				]
			}
  }

  render() {
    return (
			<table>
				<thead>
					<tr>TodoList</tr>
				</thead>
				<tbody>
				{this.state.todos.map((todo, index) => {
					return (
						<tr><td>{todo}</td></tr>
					)
				})}
				</tbody>
			</table>
		);
	}
}
