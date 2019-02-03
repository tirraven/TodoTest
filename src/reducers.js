import {
  CREATE_TASK,
  EDIT_TASK,
  EDIT_DESC_CHANGE,
  SAVE_TASK,
  DELETE_TASK,
  SEARCH_CHANGE,
  CANCEL_EDIT_TASK
} from "./actions";
import { combineReducers } from "redux";

const initialTasks = [
  { id: 1, desc: "First Task", mode: "view", inputDesc: "First Task" },
  { id: 2, desc: "Second Task", mode: "view", inputDesc: "Second Task" }
];

const taskApp = combineReducers({
  tasks,
  searchValue
});

function tasks(state = initialTasks, action) {
  switch (action.type) {
    case CREATE_TASK:
      const modifiedTasks = state.map(task => {
        if (task.mode !== "view")
          return { ...task, mode: "view", inputDesc: task.desc };
        else return task;
      });

      return [...modifiedTasks, newTask(state)];

    case EDIT_TASK:
      return state.map(task => {
        if (task.id === action.taskId)
          return { ...task, mode: "edit", inputDesc: task.desc };
        else return task;
      });

    case EDIT_DESC_CHANGE:
      return state.map(task => {
        if (task.id === action.taskId)
          return { ...task, inputDesc: action.desc };
        else return task;
      });

    case CANCEL_EDIT_TASK:
      return state.map(task => {
        if (task.id === action.taskId)
          return { ...task, mode: "view", inputDesc: task.desc };
        else return task;
      });

    case SAVE_TASK:
      return state.map(task => {
        if (task.id === action.taskId)
          return { ...task, mode: "view", desc: task.inputDesc };
        else return task;
      });

    case DELETE_TASK:
      return state.filter(task => task.id !== action.taskId);

    default:
      return state;
  }
}

function newTask(tasks) {
  let maxId = tasks
    .map(task => task.id)
    .reduce((prev, current) => (prev > current ? prev : current), 0);
  const newTask = {
    id: maxId + 1,
    desc: "New Task",
    mode: "edit",
    inputDesc: "New Task"
  };
  return newTask;
}

function searchValue(state = "", action) {
  switch (action.type) {
    case SEARCH_CHANGE:
      return action.searchValue;
    default:
      return state;
  }
}

export default taskApp;
