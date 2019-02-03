import React from "react";
import { Container, Row, Col, Input, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faSave,
  faBan,
  faTrash
} from "@fortawesome/free-solid-svg-icons";
import { PropTypes } from "prop-types";

class Task extends React.Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    desc: PropTypes.string.isRequired,
    mode: PropTypes.string.isRequired,
    inputDesc: PropTypes.string.isRequired,
    onDescChange: PropTypes.func.isRequired,
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
          <Col xs="1">
            <h5>{this.props.id}</h5>
          </Col>
          <Col>{this.taskDescControl()}</Col>
          <Col xs="auto" className="text-right">
            <TaskActionButtons
              mode={this.props.mode}
              onEditClick={() => this.props.onEditClick(this.props.id)}
              onSaveClick={() => this.props.onSaveClick(this.props.id)}
              onCancelClick={() => this.props.onCancelClick(this.props.id)}
              onDeleteClick={() => this.props.onDeleteClick(this.props.id)}
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
    onEditClick,
    onSaveClick,
    onCancelClick,
    onDeleteClick
  } = props;
  if (mode === "view") {
    return (
      <div className="taskAcionButtonCol">
        <Button onClick={onEditClick} className="mr-2">
          <FontAwesomeIcon icon={faEdit} size="lg" className="mr-2" />
          Edit
        </Button>
        <Button onClick={onDeleteClick}>
          <FontAwesomeIcon icon={faTrash} size="lg" className="mr-2" />
          Delete
        </Button>
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
  onEditClick: PropTypes.func.isRequired,
  onSaveClick: PropTypes.func.isRequired,
  onCancelClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired
};

export default Task;
