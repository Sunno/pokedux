import { fromJS } from "immutable";
import { CLEAR_ERROR, SET_ERROR, TOGGLE_LOADER } from "../actions/types";

const initialState = fromJS({
  loading: false,
  error: "",
});

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERROR:
      return state.set("error", fromJS(action.payload));
    case CLEAR_ERROR:
      return state.set("error", "");
    case TOGGLE_LOADER:
      return state.set("loading", !state.get("loading"));
    default:
      return state;
  }
};

export default uiReducer;
