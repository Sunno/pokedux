import axios from "axios";
import { getPokemons } from "../api/getPokemons";
import { CLEAR_ERROR, FETCH_POKEMONS, SET_ERROR, SET_POKEMON } from "./types";

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

  export const fetchPokemons = () => ({
    type: FETCH_POKEMONS,
  });

  export const getPokemonWithDetails = () => dispatch => {
    
  }