import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setError, setPokemon } from "../../actions";
import { getPokemons } from "../../api/getPokemons";
import PokemonList from "../../components/PokemonList";
import Searcher from "../../components/Searcher";
import "./styles.css";

function Home() {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.list);

  useEffect(() => {
    getPokemons().then((res) => {
      const pokemonList = res.results;
      return Promise.all(pokemonList.map((pokemon) => axios.get(pokemon.url)));
    }).then(pokemonResponse => {
      const pokemonsData = pokemonResponse.map(pokemon => pokemon.data);
      dispatch(setPokemon(pokemonsData));
    }).catch((err) => {
      dispatch(setError({ message: "Ocurrió un error", err }));
    });
    // eslint-disable-next-line
  }, []);
  return (
    <div className="Home">
      <Searcher />
      <PokemonList pokemons={list} />
    </div>
  );
}

export default Home;
