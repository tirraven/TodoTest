import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { TaskListContainer } from "./components/tasklistContainer";
import { Container } from "reactstrap";
import { createStore } from "redux";
import taskAppReducer from "./reducers";

import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

const store = createStore(taskAppReducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Task Manager</h1>
        <h2>Add some tasks below</h2>
        <Container>
          <TaskListContainer />
        </Container>
      </div>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
