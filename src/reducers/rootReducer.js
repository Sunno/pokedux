import { combineReducers } from "redux-immutable";
import { uiReducer } from "./ui";
import { pokemonReducer } from "./pokemonReducer";

const rootReducer = combineReducers({
  pokemon: pokemonReducer,
  ui: uiReducer,
});

export default rootReducer;