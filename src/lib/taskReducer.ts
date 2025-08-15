import { Task } from "@/types/task";

type TaskAction =
  | { type: "ADD_TASK"; payload: Task }
  | { type: "UPDATE_TASK"; payload: Task }
  | { type: "DELETE_TASK"; payload: string }
  | { type: "TOGGLE_TASK"; payload: string }
  | { type: "LOAD_TASKS"; payload: Task[] };

export function taskReducer(state: Task[], action: TaskAction): Task[] {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, action.payload];
    case "UPDATE_TASK":
      return state.map(t => t.id === action.payload.id ? action.payload : t);
    case "DELETE_TASK":
      return state.filter(t => t.id !== action.payload);
    case "TOGGLE_TASK":
      return state.map(t =>
        t.id === action.payload ? { ...t, done: !t.done } : t
      );
    case "LOAD_TASKS":
      return action.payload;
    default:
      return state;
  }
}
