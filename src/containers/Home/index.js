import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonWithDetails, setError, setPokemon } from "../../actions";
import { getPokemons } from "../../api/getPokemons";
import PokemonList from "../../components/PokemonList";
import Searcher from "../../components/Searcher";
import "./styles.css";

function Home() {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.list);

  useEffect(() => {
    dispatch(getPokemonWithDetails())
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
