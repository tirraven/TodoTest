import React from "react";
import ReactDOM from "react-dom";
import TaskList from "./components/tasklist";
import { Container } from "reactstrap";

import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <h1>Task Manager</h1>
      <h2>Add some tasks below</h2>
      <Container>
        <TaskList />
      </Container>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
