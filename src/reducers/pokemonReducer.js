import { SET_POKEMON, TOGGLE_FAVORITE, TOGGLE_LOADER } from "../actions/types";

const initialState = {
  list: [],
  loading: false,
};

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMON:
      return { ...state, list: action.payload };
    case TOGGLE_LOADER:
      return { ...state, loading: !state.loading };
    case TOGGLE_FAVORITE:
      const newList = [...state.list];
      const pokemonIndex = newList.findIndex((pokemon) => pokemon.id === action.id);
      if (pokemonIndex !== -1) {
        newList[pokemonIndex].favorite = !newList[pokemonIndex].favorite;
      }
      return { ...state, list: newList };
    default:
      return { ...state };
  }
};

export default pokemonReducer;
