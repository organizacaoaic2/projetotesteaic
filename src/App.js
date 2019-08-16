import React, { Component } from "react";
import Todos from "./components/Todos";
import "./App.css";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "tirar o lixo pra fora",
        completed: false
      },
      {
        id: 2,
        title: "Pintar o portao",
        completed: true
      },
      {
        id: 3,
        title: "Dar comida pros cachorros",
        completed: false
      }
    ]
  };
  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
