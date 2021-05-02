import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <div id="header">
        <h1>React: Memory Game Project</h1>
        <h2>Objective: Answer the questions to test your memory.</h2>
         <h2>   Highest score is 10!</h2>


        </div>
        <div id="mainContent">

        </div>
        
      </main>
    );
  }
}

export default App;
