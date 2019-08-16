import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: "grey",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    };
  };

  getStyleWrapper = () => {
    return {
      background: "white",
      paddingRight: "300px",
      paddingLeft: "300px",
      marginTop: "10px"
    };
  };
  render() {
    return (
      <div style={this.getStyleWrapper()}>
        <div style={this.getStyle()}>
          <p>{this.props.todo.title}</p>
        </div>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todos: PropTypes.object.isRequired
};

export default TodoItem;
