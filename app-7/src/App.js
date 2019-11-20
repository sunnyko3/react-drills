import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NewTask from "./NewTask";
import List from "./List";
import Todo from "./Todo";



class App extends Component {
  constructor(){
    super();

    this.state = {
      list: []
    };
    this.handleAddTask = this.handleAddTask.bind(this);
  }

  handleAddTask(task){
    this.setState({ list:[...this.state.list, task]});
  }
  render() {
    return (
      <div className="App"/>
        <div className="App-header">

      </div>
    );
  }
}

export default App;
