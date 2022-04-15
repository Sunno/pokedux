import { fromJS } from "immutable";
import { SET_POKEMON, TOGGLE_FAVORITE, TOGGLE_LOADER } from "../actions/types";

const initialState = fromJS({
  list: [],
  loading: false,
});

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMON:
      return state.set('list', fromJS(action.payload));
    case TOGGLE_FAVORITE:
      const pokemonIndex = state.get('list').findIndex(
        (pokemon) => pokemon.get('id') === action.id
      );
      const isFavorite = state.getIn(['list', pokemonIndex, 'favorite'])
      return state.setIn(['list', pokemonIndex, 'favorite'], !isFavorite);
    case TOGGLE_LOADER:
      return state.set('loading', !state.get('loading'));
    default:
      return state;
  }
};

export default pokemonReducer;
