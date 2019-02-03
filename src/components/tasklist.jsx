import React from "react";
import Task from "./task";
import { ListGroup, ListGroupItem, Button, Input, Form } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { PropTypes } from "prop-types";

class TaskList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [
        { id: 1, desc: "First Task", mode: "view", inputDesc: "First Task" },
        { id: 2, desc: "Second Task", mode: "view", inputDesc: "Second Task" }
      ],
      searchValue: ""
    };
  }

  handleEditClick = id => {
    // this.cancelAllEdits();
    // const { tasks } = this.state;
    // const tasksCopy = [...tasks];
    // const task = tasksCopy.filter(task => task.id === id)[0];
    // task.mode = "edit";
    // this.setState({ tasks: tasksCopy });
  };

  // cancelAllEdits() {
  //   const { tasks } = this.state;
  //   const tasksCopy = [...tasks];
  //   tasksCopy
  //     .filter(task => task.mode !== "view")
  //     .forEach(task => {
  //       task.mode = "view";
  //       task.inputDesc = task.desc;
  //     });

  //   this.setState({ tasks: tasksCopy });
  // }

  handleSaveClick = id => {
    // const { tasks } = this.state;
    // const tasksCopy = [...tasks];
    // const task = tasksCopy.filter(task => task.id === id)[0];
    // task.desc = task.inputDesc;
    // task.mode = "view";
    // this.setState({ tasks: tasksCopy });
  };

  handleCancelClick = id => {
    // const { tasks } = this.state;
    // const tasksCopy = [...tasks];
    // const task = tasksCopy.filter(task => task.id === id)[0];
    // task.inputDesc = task.desc;
    // task.mode = "view";
    // this.setState({ tasks: tasksCopy });
  };

  handleAddClick = () => {
    //   this.cancelAllEdits();
    //   const { tasks } = this.state;
    //   const tasksCopy = [...tasks];
    //   let maxId = tasksCopy
    //     .map(task => task.id)
    //     .reduce((prev, current) => (prev > current ? prev : current), 0);
    //   const newTask = {
    //     id: maxId + 1,
    //     desc: "New Task",
    //     mode: "edit",
    //     inputDesc: "New Task"
    //   };
    //   tasksCopy.push(newTask);
    //   this.setState({ tasks: tasksCopy });
  };

  handleDeleteClick = id => {
    // const { tasks } = this.state;
    // const tasksCopy = [...tasks].filter(task => task.id !== id);
    // this.setState({ tasks: tasksCopy });
  };

  handleDescChange = (id, inputDesc) => {
    // const { tasks } = this.state;
    // const tasksCopy = [...tasks];
    // const task = tasksCopy.filter(task => task.id === id)[0];
    // task.inputDesc = inputDesc;
    // this.setState({ tasks: tasksCopy });
  };

  // handleSearchChange = searchValue => {
  //   this.setState({ searchValue });
  // };

  filterSearchTasks() {
    return this.state.tasks.filter(
      task =>
        task.desc.toLowerCase().indexOf(this.state.searchValue.toLowerCase()) >
        -1
    );
  }

  render() {
    return (
      <div>
        <TaskSearchBox
          searchValue={this.state.searchValue}
          onSearchChange={this.handleSearchChange}
        />
        <TaskListGroup
          tasks={this.filterSearchTasks()}
          onDescChange={this.handleDescChange}
          onEditClick={this.handleEditClick}
          onSaveClick={this.handleSaveClick}
          onCancelClick={this.handleCancelClick}
          onDeleteClick={this.handleDeleteClick}
        />
        <NewTaskButton onAddClick={this.handleAddClick} />
      </div>
    );
  }
}

function TaskListGroup(props) {
  const {
    tasks,
    onDescChange,
    onEditClick,
    onSaveClick,
    onCancelClick,
    onDeleteClick
  } = props;
  return (
    <ListGroup>
      {tasks.map(task => (
        <ListGroupItem key={task.id}>
          <Task
            {...task}
            onDescChange={onDescChange}
            onEditClick={onEditClick}
            onSaveClick={onSaveClick}
            onCancelClick={onCancelClick}
            onDeleteClick={onDeleteClick}
          />
        </ListGroupItem>
      ))}
    </ListGroup>
  );
}

const taskPropType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  desc: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
  inputDesc: PropTypes.string.isRequired
});

TaskListGroup.propTypes = {
  tasks: PropTypes.arrayOf(taskPropType).isRequired,
  onDescChange: PropTypes.func.isRequired,
  onEditClick: PropTypes.func.isRequired,
  onSaveClick: PropTypes.func.isRequired,
  onCancelClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired
};

function NewTaskButton(props) {
  const { onAddClick } = props;

  return (
    <Button color="primary" className="mt-2" onClick={onAddClick}>
      <FontAwesomeIcon icon={faPlusSquare} size="lg" className="mr-2" />
      Add
    </Button>
  );
}
NewTaskButton.propTypes = { onAddClick: PropTypes.func.isRequired };

function TaskSearchBox(props) {
  const { searchValue, onSearchChange } = props;

  return (
    <Form className="mb-2">
      <Input
        placeholder="Search Tasks"
        id="searchBox"
        value={searchValue}
        onChange={e => {
          onSearchChange(e.target.value);
        }}
      />
    </Form>
  );
}
TaskSearchBox.propTypes = {
  searchValue: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired
};

export default TaskList;
