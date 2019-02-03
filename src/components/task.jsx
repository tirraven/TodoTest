import React from "react";
import { Container, Row, Col, Input, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faSave,
  faBan,
  faTrash,
  faCheckCircle
} from "@fortawesome/free-solid-svg-icons";
import { PropTypes } from "prop-types";

class Task extends React.Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    desc: PropTypes.string.isRequired,
    mode: PropTypes.string.isRequired,
    inputDesc: PropTypes.string.isRequired,
    onDescChange: PropTypes.func.isRequired,
    onToggleComplete: PropTypes.func.isRequired,
    onEditClick: PropTypes.func.isRequired,
    onSaveClick: PropTypes.func.isRequired,
    onCancelClick: PropTypes.func.isRequired,
    onDeleteClick: PropTypes.func.isRequired
  };

  taskDescControl() {
    if (this.props.mode === "edit") {
      return (
        <div>
          <Input
            type="text"
            name="taskDeskInput"
            id="taskDeskInput"
            onChange={e =>
              this.props.onDescChange(this.props.id, e.target.value)
            }
            value={this.props.inputDesc}
          />
        </div>
      );
    } else {
      return <div>{this.props.desc}</div>;
    }
  }

  render() {
    return (
      <Container>
        <Row>
          <Col className={this.props.complete ? "completeTask" : ""} xs="1">
            <h5>{this.props.id}</h5>
          </Col>
          <Col className={this.props.complete ? "completeTask" : ""}>
            {this.taskDescControl()}
          </Col>
          <Col xs="5" className="text-right">
            <TaskActionButtons
              mode={this.props.mode}
              complete={this.props.complete}
              onEditClick={() => this.props.onEditClick(this.props.id)}
              onSaveClick={() => this.props.onSaveClick(this.props.id)}
              onCancelClick={() => this.props.onCancelClick(this.props.id)}
              onDeleteClick={() => this.props.onDeleteClick(this.props.id)}
              onToggleComplete={() =>
                this.props.onToggleComplete(this.props.id)
              }
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

function TaskActionButtons(props) {
  const {
    mode,
    complete,
    onEditClick,
    onSaveClick,
    onCancelClick,
    onDeleteClick,
    onToggleComplete
  } = props;
  let completeButton = (
    <TaskCompleteButton
      complete={complete}
      onToggleComplete={onToggleComplete}
    />
  );
  let editButton = (
    <Button onClick={onEditClick} className="mr-2">
      <FontAwesomeIcon icon={faEdit} size="lg" className="mr-2" />
      Edit
    </Button>
  );
  let deleteButton = (
    <Button onClick={onDeleteClick}>
      <FontAwesomeIcon icon={faTrash} size="lg" className="mr-2" />
      Delete
    </Button>
  );
  if (mode === "view") {
    return (
      <div className="taskAcionButtonCol">
        {completeButton}
        {complete ? null : editButton}
        {complete ? null : deleteButton}
      </div>
    );
  } else if (mode === "edit") {
    return (
      <div className="taskAcionButtonCol">
        <Button onClick={onSaveClick} className="mr-2">
          <FontAwesomeIcon icon={faSave} size="lg" className="mr-2" />
          Save
        </Button>
        <Button onClick={onCancelClick}>
          <FontAwesomeIcon icon={faBan} size="lg" className="mr-2" />
          Cancel
        </Button>
      </div>
    );
  }

  return null;
}

TaskActionButtons.propTypes = {
  mode: PropTypes.string.isRequired,
  complete: PropTypes.bool.isRequired,
  onEditClick: PropTypes.func.isRequired,
  onSaveClick: PropTypes.func.isRequired,
  onCancelClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  onToggleComplete: PropTypes.func.isRequired
};

function TaskCompleteButton(props) {
  const { complete, onToggleComplete } = props;
  if (complete)
    return (
      <Button onClick={onToggleComplete} className="mr-2">
        <FontAwesomeIcon icon={faBan} size="lg" className="mr-2" />
        Not Done
      </Button>
    );
  else
    return (
      <Button onClick={onToggleComplete} className="mr-2">
        <FontAwesomeIcon icon={faCheckCircle} size="lg" className="mr-2" />
        Done
      </Button>
    );
}

export default Task;
