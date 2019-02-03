import React from "react";
import Task from "./task";
import { ListGroup, ListGroupItem, Button, Input, Form } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { PropTypes } from "prop-types";

class TaskList extends React.Component {
  filterSearchTasks() {
    return this.props.tasks.filter(
      task =>
        task.desc.toLowerCase().indexOf(this.props.searchValue.toLowerCase()) >
        -1
    );
  }

  render() {
    return (
      <div>
        <TaskSearchBox
          searchValue={this.props.searchValue}
          onSearchChange={searchValue => {
            this.props.onSearchChange(searchValue);
          }}
        />
        <TaskListGroup
          tasks={this.filterSearchTasks()}
          onDescChange={(id, inputDesc) => {
            this.props.onEditDescChange(id, inputDesc);
          }}
          onToggleComplete={id => {
            this.props.onToggleComplete(id);
          }}
          onEditClick={id => {
            this.props.onEditTask(id);
          }}
          onSaveClick={id => {
            this.props.onSaveTask(id);
          }}
          onCancelClick={id => {
            this.props.onCancelEdit(id);
          }}
          onDeleteClick={id => {
            this.props.onDeleteTask(id);
          }}
        />
        <NewTaskButton
          onAddClick={() => {
            this.props.onCreateTask("New Task");
          }}
        />
      </div>
    );
  }
}

function TaskListGroup(props) {
  const {
    tasks,
    onDescChange,
    onToggleComplete,
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
            onToggleComplete={onToggleComplete}
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
  inputDesc: PropTypes.string.isRequired,
  complete: PropTypes.bool.isRequired
});

TaskListGroup.propTypes = {
  tasks: PropTypes.arrayOf(taskPropType).isRequired,
  onDescChange: PropTypes.func.isRequired,
  onToggleComplete: PropTypes.func.isRequired,
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
