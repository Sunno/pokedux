import axios from "axios";
import { getPokemons } from "../api/getPokemons";
import { CLEAR_ERROR, SET_ERROR, SET_POKEMON, TOGGLE_FAVORITE, TOGGLE_LOADER } from "./types";

export const setPokemon = (payload) => ({
  type: SET_POKEMON,
  payload,
});

export const setError = (payload) => ({
  type: SET_ERROR,
  payload,
});

export const clearError = (payload) => ({
  type: CLEAR_ERROR,
  payload,
});

export const toggleLoader = () => ({
  type: TOGGLE_LOADER
});

export const toggleFavorite = (id) => ({
  type: TOGGLE_FAVORITE,
  id: id
});

export const getPokemonWithDetails = () => (dispatch) => {
  getPokemons()
    .then((res) => {
      const pokemonList = res.results;
      dispatch(toggleLoader());
      return Promise.all(pokemonList.map((pokemon) => axios.get(pokemon.url)));
    })
    .then((pokemonResponse) => {
      const pokemonsData = pokemonResponse.map((pokemon) => ({...pokemon.data, favorite: false}));
      dispatch(setPokemon(pokemonsData));
      dispatch(toggleLoader());
    })
    .catch((err) => {
      dispatch(setError({ message: "Ocurrió un error", err }));
      dispatch(toggleLoader());
    });
};
