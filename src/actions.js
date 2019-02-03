export const CREATE_TASK = "CREATE_TASK";
export const EDIT_TASK = "EDIT_TASK";
export const SAVE_TASK = "SAVE_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const SEARCH_CHANGE = "SEARCH_CHANGE";
export const CANCEL_EDIT_TASK = "CANCEL_EDIT_TASK";
export const EDIT_DESC_CHANGE = "EDIT_DESC_CHANGE";
export const TOGGLE_COMPLETE = "TOGGLE_COMPLETE";

export function createTask(desc) {
  return {
    type: CREATE_TASK,
    desc
  };
}

export function editTask(taskId) {
  return {
    type: EDIT_TASK,
    taskId
  };
}

export function editDescChange(taskId, desc) {
  return {
    type: EDIT_DESC_CHANGE,
    taskId,
    desc
  };
}

export function toggleComplete(taskId) {
  return {
    type: TOGGLE_COMPLETE,
    taskId
  };
}

export function cancelEditTask(taskId) {
  return {
    type: CANCEL_EDIT_TASK,
    taskId
  };
}

export function saveTask(taskId) {
  return {
    type: SAVE_TASK,
    taskId
  };
}

export function deleteTask(taskId) {
  return {
    type: DELETE_TASK,
    taskId
  };
}

export function searchChange(searchValue) {
  return {
    type: SEARCH_CHANGE,
    searchValue
  };
}
