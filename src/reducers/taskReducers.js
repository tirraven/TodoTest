const EDIT_TASK = "EDIT_TASK";

const taskReducer = (state, action) => {
  if (typeof state === "undefined") {
  }

  switch (action.type) {
    case EDIT_TASK:
      const newState = { ...state };
      const taskId = action.taskId;

      return null;
    default:
      return state;
  }
};

function getTask(tasks, taskId) {}
