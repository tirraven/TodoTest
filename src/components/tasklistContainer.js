import { connect } from "react-redux";
import TaskList from "./tasklist";
import {
  createTask,
  editTask,
  editDescChange,
  saveTask,
  cancelEditTask,
  deleteTask,
  searchChange
} from "../actions";

const mapStateToProps = state => {
  return {
    tasks: state.tasks,
    searchValue: state.searchValue
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onCreateTask: desc => {
      dispatch(createTask(desc));
    },
    onEditTask: id => {
      dispatch(editTask(id));
    },
    onSaveTask: id => {
      dispatch(saveTask(id));
    },
    onCancelEdit: id => {
      dispatch(cancelEditTask(id));
    },
    onEditDescChange: (id, desc) => {
      dispatch(editDescChange(id, desc));
    },
    onDeleteTask: id => {
      dispatch(deleteTask(id));
    },
    onSearchChange: searchValue => {
      dispatch(searchChange(searchValue));
    }
  };
};

export const TaskListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);
