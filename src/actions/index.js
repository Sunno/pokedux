import axios from "axios";
import { getPokemons } from "../api/getPokemons";
import { CLEAR_ERROR, SET_ERROR, SET_POKEMON } from "./types";

export const setPokemon = (payload) => ({
    type: SET_POKEMON,
    payload
});

export const setError = (payload) => ({
    type: SET_ERROR,
    payload,
  });
  
  export const clearError = (payload) => ({
    type: CLEAR_ERROR,
    payload,
  });

  export const getPokemonWithDetails = () => dispatch => {
    getPokemons().then((res) => {
      const pokemonList = res.results;
      return Promise.all(pokemonList.map((pokemon) => axios.get(pokemon.url)));
    }).then(pokemonResponse => {
      const pokemonsData = pokemonResponse.map(pokemon => pokemon.data);
      dispatch(setPokemon(pokemonsData));
    }).catch((err) => {
      dispatch(setError({ message: "Ocurrió un error", err }));
    });
  }