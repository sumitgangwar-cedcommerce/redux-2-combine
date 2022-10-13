import { combineReducers } from "redux";

const Add = (state = { res: "" }, action) => {
  switch (action.type) {
    case "ADD":
      return { ...state, res: Number(action.payload.a) + Number(action.payload.b) };
    default:
      return state;
  }
};

const Subtract = (state = { res: "" }, action) => {
  switch (action.type) {
    case "SUBTRACT":
      return { ...state, res: Number(action.payload.a) - Number(action.payload.b) };
    default:
      return state;
  }
};

const Division = (state = { res: "" }, action) => {
  switch (action.type) {
    case "DIVIDE":
      return { ...state, res: Number(action.payload.a) / Number(action.payload.b) };
    default:
      return state;
  }
};

const Multiply = (state = { res: "" }, action) => {
  switch (action.type) {
    case "MULTIPLY":
      return { ...state, res:Number(action.payload.a) * Number(action.payload.b) };
    default:
      return state;
  }
};

const Clear = (state = { res: "" }, action) => {
  switch (action.type) {
    case "CLEAR":
      return { ...state, res: "" };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  Add,
  Subtract,
  Division,
  Multiply,
  Clear,
});
export default rootReducer;
