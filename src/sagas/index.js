import { call, put, takeEvery } from "redux-saga/effects";
import { getPokemonWithDetails } from "../api/getPokemons";
import { setPokemon } from "../actions";
import { FETCH_POKEMONS } from "../actions/types";

function* fetchPokemonWithDetails(action) {
  try {
    const pokemonWithDetails = yield call(getPokemonWithDetails);
    yield put(setPokemon(pokemonWithDetails));
  } catch (e) {
    console.log(e);
  }
}

function* pokemonSaga() {
  yield takeEvery(FETCH_POKEMONS, fetchPokemonWithDetails);
}

export default pokemonSaga;
