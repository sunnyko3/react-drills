import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Image from "./Image";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Image url={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuYHtwP4IW3z_Jlh-CZApihNOwKWRwN5ODRfapFeS3oRvUrIAj&s"}/>
      </div>
    );
  }
}

export default App;
